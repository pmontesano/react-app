/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/components/header/header.js":
/*!*****************************************!*\
  !*** ./app/components/header/header.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var React = __webpack_require__(/*! react */ \"react\");\n\nvar namespace = \"ui-header\";\n\nvar Header = function Header(props) {\n  var data = [\"Inicio\", \"Mi enfoque\", \"Consultorio a distancia\", \"Plan alimentario\", \"Turnos\"];\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: namespace\n  }, /*#__PURE__*/React.createElement(\"h1\", null, \"Lic Florencia Telmo\"), /*#__PURE__*/React.createElement(\"ul\", null, data.map(function (element) {\n    return /*#__PURE__*/React.createElement(\"li\", null, element, \" \");\n  })));\n};\n\nmodule.exports = Header;\n\n//# sourceURL=webpack:///./app/components/header/header.js?");

/***/ }),

/***/ "./app/server/index.js":
/*!*****************************!*\
  !*** ./app/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/register */ \"@babel/register\");\n\n(void 0)['.scss'] = function () {};\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar routes = __webpack_require__(/*! ./routes */ \"./app/server/routes/index.js\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar app = express(); // cargar las routas\n\napp.use(\"/\", express[\"static\"](path.resolve(__dirname, \"../../build\")));\napp.use(\"/\", routes());\napp.listen(3000);\n\n//# sourceURL=webpack:///./app/server/index.js?");

/***/ }),

/***/ "./app/server/routes/index.js":
/*!************************************!*\
  !*** ./app/server/routes/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar React = __webpack_require__(/*! react */ \"react\");\n\nvar ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar template = __webpack_require__(/*! ../template */ \"./app/server/template.js\");\n\nvar Home = __webpack_require__(/*! ../../views/home */ \"./app/views/home/index.js\");\n\nvar _require = __webpack_require__(/*! react */ \"react\"),\n    Children = _require.Children;\n\nmodule.exports = function () {\n  router.get(\"/\", function (req, res) {\n    var data = {\n      name: \"Pablo Montesano\"\n    };\n    console.log(\"data\", data);\n    var html = template(\"home\", ReactDOMServer.renderToString(React.createElement(Home, {\n      data: data\n    })), data);\n    res.send(html);\n  });\n  router.get(\"/descripcion\", function (req, res) {\n    res.render(\"Descripción!\");\n  });\n  return router;\n};\n\n//# sourceURL=webpack:///./app/server/routes/index.js?");

/***/ }),

/***/ "./app/server/template.js":
/*!********************************!*\
  !*** ./app/server/template.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bundle, component, data) {\n  return \"\\n  <!DOCTYPE html>\\n  <html lang=\\\"en\\\">\\n    <head>\\n      <meta charset=\\\"UTF-8\\\">\\n      <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n      <title>Title</title>\\n      <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"/\".concat(bundle, \".css\\\" />\\n      <script>window.__PRELOADED_STATE__ = \").concat(JSON.stringify(data), \"</script>\\n    </head>\\n    <body>\\n      <div id=\\\"root-app\\\">\").concat(component, \"</div>\\n      <script src=\\\"/\").concat(bundle, \".js\\\"></script>\\n    </body>\\n  </html>\\n\");\n};\n\n//# sourceURL=webpack:///./app/server/template.js?");

/***/ }),

/***/ "./app/views/home/home.scss":
/*!**********************************!*\
  !*** ./app/views/home/home.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/views/home/home.scss?");

/***/ }),

/***/ "./app/views/home/index.js":
/*!*********************************!*\
  !*** ./app/views/home/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var React = __webpack_require__(/*! react */ \"react\");\n\nvar Header = __webpack_require__(/*! ../../components/header/header */ \"./app/components/header/header.js\");\n\n__webpack_require__(/*! ./home.scss */ \"./app/views/home/home.scss\");\n\nvar namespace = \"ui-app\";\n\nvar Home = function Home(props) {\n  console.log('que trae la props', props);\n  var name = props.name;\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"ui-app\"\n  }, \"pagina home con props \", name, /*#__PURE__*/React.createElement(Header, null));\n};\n\nmodule.exports = Home;\n\n//# sourceURL=webpack:///./app/views/home/index.js?");

/***/ }),

/***/ "@babel/register":
/*!**********************************!*\
  !*** external "@babel/register" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/register\");\n\n//# sourceURL=webpack:///external_%22@babel/register%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });