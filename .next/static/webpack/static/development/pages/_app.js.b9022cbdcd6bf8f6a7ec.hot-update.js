webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/index.mdx":
/*!*************************!*\
  !*** ./pages/index.mdx ***!
  \*************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var _components_BlogMeta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BlogMeta */ "./components/BlogMeta.js");


var _jsxFileName = "/home/devpedrobazzo/Desktop/nextjs-mdx-blog/pages/index.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */


var meta = {
  title: "Next.js MDX Blog Kit",
  tags: ["Next.js", "MDX"],
  layout: "post",
  publishDate: "2011-01-01",
  modifiedDate: false,
  seoDescription: "This is the home page."
};

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }));
  };
};

var layoutProps = {
  meta: meta
};

var MDXLayout = function HelloWorld() {
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Hello World");
};

function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Pedro Bazzo"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Blog kit about React.js development and the programming world"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Check out the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://pt-br.reactjs.org/docs/getting-started.html"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), "docs")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Feature List:")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Why React "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "How to start an application with React"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "What is JSX for"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "What is Virtual DOM"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "How React components lifecycle works"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "The Age of Componentization"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "One-way data binding"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Flux, Redux ou MobX"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "What to use to create unit tests with React")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "**\nIntroduction\nTo begin, we need to know what React is. For this, nothing better than using the definition of who created it, Facebook itself, which defines it like this:\nA declarative, efficient and flexible JavaScript library for creating visual interfaces\nWith that, we have to:\nReact is not a framework, but a library.\nReact is used to create visual interfaces (UI).\nThese two pieces of information together create the first big confusion for those just starting out: if React is just a library and only serves to create UI, how can I create complete applications with it?\nAnd to resolve this issue we need to understand that when the community refers to React, what it really means is React and its ecosystem.\nAnd this ecosystem is formed by:\nReact\nJSX\nES2015\nWebpack\nFlux / Redux\naxios / fetch\nJest / Mocha\nAnd with all these items, which are part of the React ecosystem, we can say that it is possible to create complete applications using React.\nJSX\nExplaining quickly, JSX is an extension of JavaScript syntax (hence the name, JavaScript Syntax eXtension) that allows us to write HTML within JavaScript.\nIn the early days, JSX was a major reason for criticism and jokes about React. In theory we were back in time when mixing HTML with JavaScript.\nThe staunchest critics claimed that JSX breaks one of the basic principles of software development, which is the Separation of Concerns.\nIn my opinion, this view is wrong for two reasons:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "React itself, the library and not the ecosystem, as I mentioned earlier, represents only the part of your application's view. So, by definition, it has only one concern: rendering the UI. So which concerns are being violated?\nAnd even if JSX violated this principle, the technology area evolves (and a lot) over time. If one of the principles that we have always held true does not make sense for a given scenario, should we still force ourselves to follow that principle?\nRegardless of my personal opinions, over time the community realized that JSX was the right decision and that it ended up becoming one of the great foundations of React's success.\nComponents\nAs previously stated, React's main function is to assist in the creation of the UI. I just left one important detail out: React uses components, and only components, so that it is possible to increase the maximum reuse in your application."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "To illustrate, let's look at some code to understand what a React component looks like:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "//import react from 'react';"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "The above function (yes, React components can simply be JavaScript functions) generates a button that shows an alert to the user when clicked.\nIf we need another button like this, just reuse it without having to add more code to the application. Remembering that more code means more work, more unit tests and more potential bugs inserted.\nAnd if the need is a button like this, just edit it by passing some parameters (we'll talk more about them in the next section) and make it what we need.\nIf there is a bug in the behavior, or even in the layout of the button, we know exactly where we should tamper with the code to do the quick fix.\nIn short, the components in React make us more productive. With them we have a greater reuse of code and a lower probability of new bugs being introduced in the application.\nProps\nIn all types of software development paradigms, passing parameters is extremely common. With React's components this could not be different. The difference is that in React, we use props (short for properties).\nThe idea is simple.\nThe component below shows the user a Hello World:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "//import react from 'react';"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Assuming we need to change the \u2018World\u2019 message to one that is sent dynamically, we can rewrite this component using the props like this:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "//import react from 'react';"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "//export default function HelloWithProps(props) {\nreturn ("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), "<h1>Hello {props.name}</h1>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "  );\n}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Lighthouse:"), " If you want first-hand evidence of the audit scores shown in the project README.md, feel free to run a Lighthouse audit of this site. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Scores are more accurate when run in an incognito browser because Chrome extensions can adversely affect scores.")));
}
;
MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=_app.js.b9022cbdcd6bf8f6a7ec.hot-update.js.map