"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/zeri-adventure",{

/***/ "./pages/zeri-adventure.js":
/*!*********************************!*\
  !*** ./pages/zeri-adventure.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_img_projects_zeri1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/img//projects/zeri1.png */ \"./public/img/projects/zeri1.png\");\n/* harmony import */ var _public_img_projects_zeri2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/img//projects/zeri2.png */ \"./public/img/projects/zeri2.png\");\n/* harmony import */ var _public_img_projects_zeri3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/img//projects/zeri3.png */ \"./public/img/projects/zeri3.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Github = ()=>{\n    _s();\n    const [activeImage, setActiveImage] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0);\n    const handleScreenshot = (value)=>{\n        setActiveImage(value);\n    };\n    const screenshots = [\n        _public_img_projects_zeri1_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _public_img_projects_zeri2_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _public_img_projects_zeri3_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"game\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Zeri's Adventure\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\zeri-adventure.js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"game-box\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: screenshots[activeImage],\n                                    alt: \"kio icon\",\n                                    quality: 100,\n                                    className: \"image-project\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\zeri-adventure.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"carrusel-lista\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: _public_img_projects_zeri1_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                            alt: \"kio icon\",\n                                            className: activeImage === 0 ? \"screenshot-active\" : \"screenshot\",\n                                            onClick: ()=>handleScreenshot(0)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\zeri-adventure.js\",\n                                            lineNumber: 33,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: _public_img_projects_zeri2_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                            alt: \"kio icon\",\n                                            className: activeImage === 1 ? \"screenshot-active\" : \"screenshot\",\n                                            onClick: ()=>handleScreenshot(1)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\zeri-adventure.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: _public_img_projects_zeri3_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                            alt: \"kio icon\",\n                                            className: activeImage === 2 ? \"screenshot-active\" : \"screenshot\",\n                                            onClick: ()=>handleScreenshot(2)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\zeri-adventure.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\zeri-adventure.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\zeri-adventure.js\",\n                            lineNumber: 24,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Description\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\zeri-adventure.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Zeri's Adventure is a short metroidvania-style platformer game, where you play as Zeri, a blue-haired girl who, for unknown reasons, finds herself inside a cave. Your goal is to escape, but to do so, you need to overcome all the adversities that the cave brings: acid pits, poisonous bushes, and of course, monsters.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\zeri-adventure.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\zeri-adventure.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 28\n                                        }, undefined),\n                                        \"Throughout the map, you will acquire different abilities that will allow you to keep progressing. Good luck!\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\zeri-adventure.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Roles\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\zeri-adventure.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"• Game Development \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\zeri-adventure.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 47\n                                        }, undefined),\n                                        \" • Game Design \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\zeri-adventure.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 68\n                                        }, undefined),\n                                        \" • 2D Art \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\zeri-adventure.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 84\n                                        }, undefined),\n                                        \" • Animation\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\zeri-adventure.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Play Now!\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\zeri-adventure.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"link\",\n                                    target: \"_blank\",\n                                    href: \"https://kevin-parra.itch.io/zeris-adventure\",\n                                    children: \"Itch.io\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\zeri-adventure.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Repository\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\zeri-adventure.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"link\",\n                                    target: \"_blank\",\n                                    href: \"https://github.com/KevinParraDev/Zeri-s-Adventure\",\n                                    children: \"Github.com\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\zeri-adventure.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\zeri-adventure.js\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\zeri-adventure.js\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\zeri-adventure.js\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\zeri-adventure.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Github, \"ZjIyVGf22ebblVxrlWvqHjhNndQ=\");\n_c = Github;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Github);\nvar _c;\n$RefreshReg$(_c, \"Github\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy96ZXJpLWFkdmVudHVyZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ1g7QUFDcUI7QUFDQTtBQUNBO0FBQ25CO0FBQ1I7QUFDYTtBQUV0QyxNQUFNUSxTQUFTOztJQUNYLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNTSxtQkFBbUIsQ0FBQ0M7UUFDdEJGLGVBQWVFO0lBQ25CO0lBRUEsTUFBTUMsY0FBYztRQUFDWCxzRUFBSUE7UUFBRUMsc0VBQUlBO1FBQUVDLHNFQUFJQTtLQUFDO0lBRXRDLHFCQUNJLDhEQUFDSiwwREFBTUE7a0JBQ0gsNEVBQUNjO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQzs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDRjtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNEOzs4Q0FFRyw4REFBQ2IsbURBQUtBO29DQUNGZ0IsS0FBS0osV0FBVyxDQUFDSixZQUFZO29DQUM3QlMsS0FBSTtvQ0FDSkMsU0FBUztvQ0FDVEosV0FBVTs7Ozs7OzhDQUVkLDhEQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ1gsOERBQUNkLG1EQUFLQTs0Q0FDRmdCLEtBQUtmLHNFQUFJQTs0Q0FDVGdCLEtBQUk7NENBQ0pILFdBQVdOLGdCQUFnQixJQUFJLHNCQUFzQjs0Q0FDckRXLFNBQVMsSUFBTVQsaUJBQWlCOzs7Ozs7c0RBRXBDLDhEQUFDVixtREFBS0E7NENBQ0ZnQixLQUFLZCxzRUFBSUE7NENBQ1RlLEtBQUk7NENBQ0pILFdBQVdOLGdCQUFnQixJQUFJLHNCQUFzQjs0Q0FDckRXLFNBQVMsSUFBTVQsaUJBQWlCOzs7Ozs7c0RBRXBDLDhEQUFDVixtREFBS0E7NENBQ0ZnQixLQUFLYixzRUFBSUE7NENBQ1RjLEtBQUk7NENBQ0pILFdBQVdOLGdCQUFnQixJQUFJLHNCQUFzQjs0Q0FDckRXLFNBQVMsSUFBTVQsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSTVDLDhEQUFDRzs7OENBQ0csOERBQUNPOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNDOzhDQUFFOzs7Ozs7OENBQ0gsOERBQUNBOztzREFBRSw4REFBQ0M7Ozs7O3dDQUFLOzs7Ozs7OzhDQUNULDhEQUFDRjs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQzs7d0NBQUU7c0RBQW1CLDhEQUFDQzs7Ozs7d0NBQUs7c0RBQWUsOERBQUNBOzs7Ozt3Q0FBSztzREFBVSw4REFBQ0E7Ozs7O3dDQUFLOzs7Ozs7OzhDQUNqRSw4REFBQ0Y7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0c7b0NBQUVULFdBQVU7b0NBQU9VLFFBQU87b0NBQVNDLE1BQUs7OENBQThDOzs7Ozs7OENBQ3ZGLDhEQUFDTDs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDRztvQ0FBRVQsV0FBVTtvQ0FBT1UsUUFBTztvQ0FBU0MsTUFBSzs4Q0FBb0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JIO0dBM0RNbEI7S0FBQUE7QUE2RE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvemVyaS1hZHZlbnR1cmUuanM/MzJkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IGtpbzEgZnJvbSBcIi4uL3B1YmxpYy9pbWcvL3Byb2plY3RzL3plcmkxLnBuZ1wiXHJcbmltcG9ydCBraW8yIGZyb20gXCIuLi9wdWJsaWMvaW1nLy9wcm9qZWN0cy96ZXJpMi5wbmdcIlxyXG5pbXBvcnQga2lvMyBmcm9tIFwiLi4vcHVibGljL2ltZy8vcHJvamVjdHMvemVyaTMucG5nXCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSAncmVhY3QtcGxheWVyJ1xyXG5cclxuY29uc3QgR2l0aHViID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2FjdGl2ZUltYWdlLCBzZXRBY3RpdmVJbWFnZV0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNjcmVlbnNob3QgPSAodmFsdWUpID0+IHtcclxuICAgICAgICBzZXRBY3RpdmVJbWFnZSh2YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzY3JlZW5zaG90cyA9IFtraW8xLCBraW8yLCBraW8zXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPlplcmkncyBBZHZlbnR1cmU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c2NyZWVuc2hvdHNbYWN0aXZlSW1hZ2VdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwia2lvIGljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2UtcHJvamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FycnVzZWwtbGlzdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17a2lvMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJraW8gaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmVJbWFnZSA9PT0gMCA/IFwic2NyZWVuc2hvdC1hY3RpdmVcIiA6IFwic2NyZWVuc2hvdFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNjcmVlbnNob3QoMCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtraW8yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImtpbyBpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZUltYWdlID09PSAxID8gXCJzY3JlZW5zaG90LWFjdGl2ZVwiIDogXCJzY3JlZW5zaG90XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2NyZWVuc2hvdCgxKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2tpbzN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwia2lvIGljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YWN0aXZlSW1hZ2UgPT09IDIgPyBcInNjcmVlbnNob3QtYWN0aXZlXCIgOiBcInNjcmVlbnNob3RcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTY3JlZW5zaG90KDIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkRlc2NyaXB0aW9uPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+WmVyaSdzIEFkdmVudHVyZSBpcyBhIHNob3J0IG1ldHJvaWR2YW5pYS1zdHlsZSBwbGF0Zm9ybWVyIGdhbWUsIHdoZXJlIHlvdSBwbGF5IGFzIFplcmksIGEgYmx1ZS1oYWlyZWQgZ2lybCB3aG8sIGZvciB1bmtub3duIHJlYXNvbnMsIGZpbmRzIGhlcnNlbGYgaW5zaWRlIGEgY2F2ZS4gWW91ciBnb2FsIGlzIHRvIGVzY2FwZSwgYnV0IHRvIGRvIHNvLCB5b3UgbmVlZCB0byBvdmVyY29tZSBhbGwgdGhlIGFkdmVyc2l0aWVzIHRoYXQgdGhlIGNhdmUgYnJpbmdzOiBhY2lkIHBpdHMsIHBvaXNvbm91cyBidXNoZXMsIGFuZCBvZiBjb3Vyc2UsIG1vbnN0ZXJzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGJyIC8+VGhyb3VnaG91dCB0aGUgbWFwLCB5b3Ugd2lsbCBhY3F1aXJlIGRpZmZlcmVudCBhYmlsaXRpZXMgdGhhdCB3aWxsIGFsbG93IHlvdSB0byBrZWVwIHByb2dyZXNzaW5nLiBHb29kIGx1Y2shPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+Um9sZXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7igKIgR2FtZSBEZXZlbG9wbWVudCA8YnIgLz4g4oCiIEdhbWUgRGVzaWduIDxiciAvPiDigKIgMkQgQXJ0IDxiciAvPiDigKIgQW5pbWF0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+UGxheSBOb3chPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2tldmluLXBhcnJhLml0Y2guaW8vemVyaXMtYWR2ZW50dXJlXCI+SXRjaC5pbzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlJlcG9zaXRvcnk8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9LZXZpblBhcnJhRGV2L1plcmktcy1BZHZlbnR1cmVcIj5HaXRodWIuY29tPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2l0aHViOyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJJbWFnZSIsImtpbzEiLCJraW8yIiwia2lvMyIsInVzZVN0YXRlIiwiUmVhY3QiLCJSZWFjdFBsYXllciIsIkdpdGh1YiIsImFjdGl2ZUltYWdlIiwic2V0QWN0aXZlSW1hZ2UiLCJoYW5kbGVTY3JlZW5zaG90IiwidmFsdWUiLCJzY3JlZW5zaG90cyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3JjIiwiYWx0IiwicXVhbGl0eSIsIm9uQ2xpY2siLCJoMiIsInAiLCJiciIsImEiLCJ0YXJnZXQiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/zeri-adventure.js\n"));

/***/ })

});