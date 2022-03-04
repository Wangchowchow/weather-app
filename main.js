/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ \"./src/request.js\");\n/* harmony import */ var _resolve__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolve */ \"./src/resolve.js\");\n\n\n\nconst searchForm = document.querySelector(\"form\");\nconst searchInput = document.querySelector(\"input\");\nconst searchButton = document.querySelector(\"button\");\n\nsearchForm.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    searchInput.value = \"\";\n});\n\nsearchButton.addEventListener(\"click\", async () => {\n    if (searchInput.value === \"\") {\n        alert(\"Please Input City/Region\");\n        return;\n    };\n    const data = await _request__WEBPACK_IMPORTED_MODULE_0__[\"default\"].requestData(searchInput.value);\n    _resolve__WEBPACK_IMPORTED_MODULE_1__[\"default\"].resolveData(data);\n});\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/request.js":
/*!************************!*\
  !*** ./src/request.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst request = (() => {\n    async function requestData(city) {\n        const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=39927cf8afc65b9b7ed1c185506f1814`;\n        try {\n            const response = await fetch(api, {mode: \"cors\"});\n            if (!response.ok) throw new Error(`City/Region ${city} not found`);\n            const data = convertData(await response.json());\n            return data;\n        } catch (error) {\n            alert(error);\n            return null;\n        }\n    }\n    return {requestData};\n\n    function convertData(data) {\n        const {\n            name: cityName,\n            main: {temp: temperature, feels_like: feelsLike, humidity},\n            wind: {speed: wind},\n        } = data;\n        return {cityName, temperature, feelsLike, humidity, wind};\n    }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);\n\n//# sourceURL=webpack://weather-app/./src/request.js?");

/***/ }),

/***/ "./src/resolve.js":
/*!************************!*\
  !*** ./src/resolve.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst resolve = (() => {\n    function resolveData(data) {\n        if (!data) return;\n\n        const searchResult = document.querySelector(\".search-result\");\n        searchResult.classList.add(\"active\");\n\n        const cityName = document.querySelector(\".city-name\");\n        const temperature = document.querySelector(\".temperature\");\n        const feelsLike = document.querySelector(\".feels-like\");\n        const humidity = document.querySelector(\".humidity\");\n        const wind = document.querySelector(\".wind\");\n\n        cityName.textContent = `${data.cityName}`;\n        temperature.textContent = `${data.temperature} °C`;\n        feelsLike.textContent = `Feels like: ${data.feelsLike} °C`;\n        humidity.textContent = `Humidity: ${data.humidity} %`;\n        wind.textContent = `Wind: ${data.wind} km/h`;\n    }\n\n    return {resolveData};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolve);\n\n//# sourceURL=webpack://weather-app/./src/resolve.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;