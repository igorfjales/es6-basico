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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/funcoes.js":
/*!************************!*\
  !*** ./src/funcoes.js ***!
  \************************/
/*! exports provided: soma, subtracao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"soma\", function() { return soma; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subtracao\", function() { return subtracao; });\n/**\r\n *  EXPORT\r\n * \r\n *  Exporta determinados objetos para que outros arquivos possam utilizar seus atributos e funcionalidades\r\n */\nfunction soma(a, b) {\n  return a + b;\n}\nfunction subtracao(a, b) {\n  return a - b;\n}\n\n//# sourceURL=webpack:///./src/funcoes.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _funcoes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funcoes */ \"./src/funcoes.js\");\n/* harmony import */ var _soma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./soma */ \"./src/soma.js\");\n/**\r\n *  IMPORT E EXPORT\r\n * \r\n *  'export' - Exporta um objeto para que possa ser usado em outro arquivo.\r\n * \r\n *  'import' - Importa o objeto para dentro do arquivo atual, para podermos utilzar seus atributos e funcionalidades.\r\n * \r\n *  EXPORT DEFAULT\r\n *  - A diferença para o 'export' tradicional, é que o arquivo que exporta algo por padrão, só exporta 1 determinado\r\n *    objeto. E na sua importação, não precisamos colocar chave em volta e podemos atribuir qualquer nome.\r\n */\n // está importando tais funções do arquivo funcoes.js\n\n\n/* Observe que 'sum' foi importando de dentro do arquvio soma.js.\r\n   Dentro desse arquivo, só exportamos uma determinada funcionalidade por padrão,\r\n   que é uma função com o nome de 'soma'. Repare que na sua importação\r\n   nesse arquivo atual, 'main', não utilizamos as chaves em volta e tro-\r\n   camos o nome da função declarada dentro do arquivo 'soma.js'.*/\n\nconsole.log(Object(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"soma\"])(1, 2));\nconsole.log(Object(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"subtracao\"])(4, 2));\nconsole.log(Object(_soma__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1, 2));\n/**\r\n * OBS 1: Se nós quisermos renomear a função, como fazemos no caso 'export default' utilizando o 'export' \r\n * tradicional, temos que utilizar a seguinte sintaxe:\r\n *  \r\n *  import { soma as sum, subtracao as sub } from './funcoes';\r\n * \r\n *  'soma as sum' informa que estamos apelidando o objeto 'soma' como 'sum'.\r\n *  'subtracao as sub' informa que estamos apelidando o objeto 'subtracao' como 'sub'.\r\n * \r\n *  A partir disso, conseguimos referenciar tal objeto pelo seu apelido e utilizar suas funcionalidades.\r\n * \r\n *  OBS 2: Dentro de um arquivo podemos ter 'EXPORT DEFAULT' e 'EXPORT' tradicional ao mesmo tempo. Os obejtos que\r\n *  tiverem só 'EXPORT' antes, na sua importação, deverão utilzar exatamente seus nomes declarados iguais\r\n *  e entre chaves, já o que tiver 'EXPORT DEFAULT', pode trocar de nome e não utilizar as chaves em volta.\r\n * \r\n *  EXEMPLO: \r\n *  import soma, { subtracao } from './funcoes';\r\n * \r\n *  OBS 3: Se dentro de um determinado arquivo tivermos muitos 'exports' tradicionais, e não quisermos importar\r\n *  de um por um, podemos utilizar a seguinte sintaxe:\r\n * \r\n *  import * as funcoes from './funcoes'\r\n *  console.log(funcoes.soma(1, 2));\r\n *  console.log(funcoes.subtracao(4, 2));\r\n */\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/soma.js":
/*!*********************!*\
  !*** ./src/soma.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return soma; });\nfunction soma(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./src/soma.js?");

/***/ })

/******/ });