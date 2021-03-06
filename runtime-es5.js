/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"runtime": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"common":"common","home-home-module":"home-home-module","core-js-js":"core-js-js","creditos-creditos-module":"creditos-creditos-module","css-shim-206ea950-3169f23e-js":"css-shim-206ea950-3169f23e-js","default~ajuda-ajuda-module~contmesa-contmesa-module~gerrpg-gerrpg-module":"default~ajuda-ajuda-module~contmesa-contmesa-module~gerrpg-gerrpg-module","ajuda-ajuda-module":"ajuda-ajuda-module","default~contmesa-contmesa-module~explorar-explore-capitulo-explore-capitulo-module~explorar-explore-~1f72f94d":"default~contmesa-contmesa-module~explorar-explore-capitulo-explore-capitulo-module~explorar-explore-~1f72f94d","perfil-perfil-module":"perfil-perfil-module","default~contmesa-contmesa-module~explorar-explore-capitulo-explore-capitulo-module~explorar-explore-~816164c8":"default~contmesa-contmesa-module~explorar-explore-capitulo-explore-capitulo-module~explorar-explore-~816164c8","default~contmesa-contmesa-module~explorar-explore-capitulo-explore-capitulo-module~explorar-explore-~aa69e00b":"default~contmesa-contmesa-module~explorar-explore-capitulo-explore-capitulo-module~explorar-explore-~aa69e00b","default~contmesa-contmesa-module~explorar-explore-capitulo-explore-capitulo-module~explorar-explore-~e53c79d0":"default~contmesa-contmesa-module~explorar-explore-capitulo-explore-capitulo-module~explorar-explore-~e53c79d0","default~contmesa-contmesa-module~explorar-explore-capitulo-explore-capitulo-module~explorar-explore-~04356d04":"default~contmesa-contmesa-module~explorar-explore-capitulo-explore-capitulo-module~explorar-explore-~04356d04","default~contmesa-contmesa-module~explorar-explore-capitulo-explore-capitulo-module~explorar-explore-~8c31e54e":"default~contmesa-contmesa-module~explorar-explore-capitulo-explore-capitulo-module~explorar-explore-~8c31e54e","default~contmesa-contmesa-module~explorar-explore-capitulo-explore-capitulo-module~explorar-explore-~b414090c":"default~contmesa-contmesa-module~explorar-explore-capitulo-explore-capitulo-module~explorar-explore-~b414090c","default~explorar-explore-capitulo-explore-capitulo-module~explorar-explore-faccao-explore-faccao-mod~eaa1d9f1":"default~explorar-explore-capitulo-explore-capitulo-module~explorar-explore-faccao-explore-faccao-mod~eaa1d9f1","default~explorar-explore-npc-explore-npc-module~explorar-explore-rpg-explore-rpg-module":"default~explorar-explore-npc-explore-npc-module~explorar-explore-rpg-explore-rpg-module","default~explorar-explore-rpg-explore-rpg-module~suporte-suporte-module":"default~explorar-explore-rpg-explore-rpg-module~suporte-suporte-module","explorar-explore-rpg-explore-rpg-module":"explorar-explore-rpg-explore-rpg-module","explorar-explore-capitulo-explore-capitulo-module":"explorar-explore-capitulo-explore-capitulo-module","explorar-explore-mapa-explore-mapa-module":"explorar-explore-mapa-explore-mapa-module","explorar-explore-missao-explore-missao-module":"explorar-explore-missao-explore-missao-module","explorar-explore-modelo-ficha-explore-modelo-ficha-module":"explorar-explore-modelo-ficha-explore-modelo-ficha-module","default~contmesa-contmesa-module~ficha-ficha-module~fichamodelo-fichamodelo-module~gercapitulos-gerc~51cbcb23":"default~contmesa-contmesa-module~ficha-ficha-module~fichamodelo-fichamodelo-module~gercapitulos-gerc~51cbcb23","default~contmesa-contmesa-module~ficha-ficha-module~gerequipamentos-gerequipamentos-module~gerinimig~dc9172e7":"default~contmesa-contmesa-module~ficha-ficha-module~gerequipamentos-gerequipamentos-module~gerinimig~dc9172e7","default~contmesa-contmesa-module~ficha-ficha-module~germesas-germesas-module~teste-teste-module":"default~contmesa-contmesa-module~ficha-ficha-module~germesas-germesas-module~teste-teste-module","ficha-ficha-module":"ficha-ficha-module","default~contmesa-contmesa-module~gercapitulos-gercapitulos-module~gerfaccoes-gerfaccoes-module~germa~86bb7768":"default~contmesa-contmesa-module~gercapitulos-gercapitulos-module~gerfaccoes-gerfaccoes-module~germa~86bb7768","default~contmesa-contmesa-module~gerequipamentos-gerequipamentos-module~gerinimigos-gerinimigos-modu~9709502c":"default~contmesa-contmesa-module~gerequipamentos-gerequipamentos-module~gerinimigos-gerinimigos-modu~9709502c","default~contmesa-contmesa-module~gerrpg-gerrpg-module":"default~contmesa-contmesa-module~gerrpg-gerrpg-module","contmesa-contmesa-module":"contmesa-contmesa-module","germapas-germapas-module":"germapas-germapas-module","gerrpg-gerrpg-module":"gerrpg-gerrpg-module","gerequipamentos-gerequipamentos-module":"gerequipamentos-gerequipamentos-module","gerinimigos-gerinimigos-module":"gerinimigos-gerinimigos-module","default~germesas-germesas-module~teste-teste-module":"default~germesas-germesas-module~teste-teste-module","teste-teste-module":"teste-teste-module","explorar-explore-npc-explore-npc-module":"explorar-explore-npc-explore-npc-module","explorar-explore-faccao-explore-faccao-module":"explorar-explore-faccao-explore-faccao-module","default~explorar-explore-item-ataque-explore-item-ataque-module~explorar-explore-item-defesa-explore~e9d0f86f":"default~explorar-explore-item-ataque-explore-item-ataque-module~explorar-explore-item-defesa-explore~e9d0f86f","explorar-explore-item-ataque-explore-item-ataque-module":"explorar-explore-item-ataque-explore-item-ataque-module","explorar-explore-item-defesa-explore-item-defesa-module":"explorar-explore-item-defesa-explore-item-defesa-module","explorar-explore-item-utilizavel-explore-item-utilizavel-module":"explorar-explore-item-utilizavel-explore-item-utilizavel-module","gercapitulos-gercapitulos-module":"gercapitulos-gercapitulos-module","gerfaccoes-gerfaccoes-module":"gerfaccoes-gerfaccoes-module","germissoes-germissoes-module":"germissoes-germissoes-module","fichamodelo-fichamodelo-module":"fichamodelo-fichamodelo-module","gercriacoes-gercriacoes-module":"gercriacoes-gercriacoes-module","germesas-germesas-module":"germesas-germesas-module","default~recovery-recovery-module~referencia-referencia-module~registrar-registrar-module~suporte-sup~e116757c":"default~recovery-recovery-module~referencia-referencia-module~registrar-registrar-module~suporte-sup~e116757c","referencia-referencia-module":"referencia-referencia-module","default~hall-hall-module~login-login-module~logout-logout-module~recovery-recovery-module":"default~hall-hall-module~login-login-module~logout-logout-module~recovery-recovery-module","recovery-recovery-module":"recovery-recovery-module","suporte-suporte-module":"suporte-suporte-module","registrar-registrar-module":"registrar-registrar-module","login-login-module":"login-login-module","hall-hall-module":"hall-hall-module","logout-logout-module":"logout-logout-module","dom-96781eef-a2fb04dd-js":"dom-96781eef-a2fb04dd-js","dom-js":"dom-js","index-69c37885-js":"index-69c37885-js","novinimigo-novinimigo-module":"novinimigo-novinimigo-module","shadow-css-4889ae62-23996f3f-js":"shadow-css-4889ae62-23996f3f-js","ios-transition-071bd421-js":"ios-transition-071bd421-js","md-transition-15a81b08-js":"md-transition-15a81b08-js","swipe-back-35ad8e37-js":"swipe-back-35ad8e37-js","focus-visible-70713a0c-js":"focus-visible-70713a0c-js","hardware-back-button-5afe3cb0-js":"hardware-back-button-5afe3cb0-js","input-shims-a4fc53ac-js":"input-shims-a4fc53ac-js","status-tap-a0df8284-js":"status-tap-a0df8284-js","tap-click-ca00ce7f-js":"tap-click-ca00ce7f-js","swiper-bundle-ccdaac54-js":"swiper-bundle-ccdaac54-js"}[chunkId]||chunkId) + "-es5.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// run deferred modules from other chunks
/******/ 	checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([]);
//# sourceMappingURL=runtime-es5.js.map