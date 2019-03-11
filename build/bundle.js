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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_game_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _styles_game_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_game_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partials_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);


 // create a game instance

var game = new _partials_Game__WEBPACK_IMPORTED_MODULE_1__["default"]("game", _settings__WEBPACK_IMPORTED_MODULE_2__["boardWidth"], _settings__WEBPACK_IMPORTED_MODULE_2__["boardHeight"]);

(function gameLoop() {
  game.render();
  requestAnimationFrame(gameLoop);
})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(2);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Imports
var urlEscape = __webpack_require__(4);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(5));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(5) + "?#iefix");
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(6));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(7));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(8) + "#silkscreennormal");

// Module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/**\n * FONTS\n */\n\n@font-face {\n  font-family: 'Silkscreen Web';\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  src: url(" + ___CSS_LOADER_URL___1___ + ") format('embedded-opentype'),\n    url(" + ___CSS_LOADER_URL___2___ + ") format('woff'),\n    url(" + ___CSS_LOADER_URL___3___ + ") format('truetype'),\n    url(" + ___CSS_LOADER_URL___4___ + ") format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/**\n * GAME\n */\n\nhtml {\n  font-size: 16px;\n}\n\nbody {\n  align-items: center;\n  display: flex;\n  font-family: 'Silkscreen Web', monotype;\n  height: 100vh;\n  justify-content: center;\n  width: 100%;\n}\n\nh1 {\n  font-size: 2.5rem;\n  margin-bottom: 1rem; \n  text-align: center;\n}\n", ""]);



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.eot";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.woff";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.ttf";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.svg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(10);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _Paddle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _Score__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Game =
/*#__PURE__*/
function () {
  function Game(element, width, height) {
    var _this = this;

    _classCallCheck(this, Game);

    this.element = element;
    this.width = width;
    this.height = height;
    this.pause = false;
    this.gameElement = document.getElementById(this.element);
    this.board = new _Board__WEBPACK_IMPORTED_MODULE_1__["default"](this.width, this.height);
    this.player1Name = "Player1";
    this.player2Name = "Player2";
    this.startNewGame();
    document.addEventListener("keydown", function (event) {
      if (event.key === _settings__WEBPACK_IMPORTED_MODULE_0__["KEYS"].spaceBar) {
        _this.pause = !_this.pause;
      }
    });
  }

  _createClass(Game, [{
    key: "startNewGame",
    value: function startNewGame() {
      this.player1Name = prompt("Enter player 1's name:");
      this.player2Name = prompt("Enter player 2's name:");
      this.player1 = new _Paddle__WEBPACK_IMPORTED_MODULE_2__["default"](this.player1Name, this.height, _settings__WEBPACK_IMPORTED_MODULE_0__["paddleWidth"], _settings__WEBPACK_IMPORTED_MODULE_0__["paddleHeight"], _settings__WEBPACK_IMPORTED_MODULE_0__["boardGap"], (this.height - _settings__WEBPACK_IMPORTED_MODULE_0__["paddleHeight"]) / 2, _settings__WEBPACK_IMPORTED_MODULE_0__["KEYS"].a, _settings__WEBPACK_IMPORTED_MODULE_0__["KEYS"].z);
      this.player2 = new _Paddle__WEBPACK_IMPORTED_MODULE_2__["default"](this.player2Name, this.height, _settings__WEBPACK_IMPORTED_MODULE_0__["paddleWidth"], _settings__WEBPACK_IMPORTED_MODULE_0__["paddleHeight"], this.width - (_settings__WEBPACK_IMPORTED_MODULE_0__["boardGap"] + _settings__WEBPACK_IMPORTED_MODULE_0__["paddleWidth"]), (this.height - _settings__WEBPACK_IMPORTED_MODULE_0__["paddleHeight"]) / 2, _settings__WEBPACK_IMPORTED_MODULE_0__["KEYS"].up, _settings__WEBPACK_IMPORTED_MODULE_0__["KEYS"].down);
      this.ball = new _Ball__WEBPACK_IMPORTED_MODULE_3__["default"](_settings__WEBPACK_IMPORTED_MODULE_0__["ballRadius"], this.width, this.height);
      this.score1 = new _Score__WEBPACK_IMPORTED_MODULE_4__["default"](this.width / 2 - _settings__WEBPACK_IMPORTED_MODULE_0__["scoreBoardSize"] * 3, _settings__WEBPACK_IMPORTED_MODULE_0__["scoreBoardSize"] * 2, _settings__WEBPACK_IMPORTED_MODULE_0__["scoreBoardSize"]);
      this.score2 = new _Score__WEBPACK_IMPORTED_MODULE_4__["default"](this.width / 2 + 2.5 * _settings__WEBPACK_IMPORTED_MODULE_0__["scoreBoardSize"], _settings__WEBPACK_IMPORTED_MODULE_0__["scoreBoardSize"] * 2, _settings__WEBPACK_IMPORTED_MODULE_0__["scoreBoardSize"]);
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      var winner;

      if (this.player1.score > this.player2.score) {
        winner = this.player1.name;
      } else {
        winner = this.player2.name;
      }

      alert("The winner of the game is: ".concat(winner, ". Press \"OK\" to start a new game."));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.pause === true) {
        return;
      }

      if (this.player1.score === _settings__WEBPACK_IMPORTED_MODULE_0__["finalScore"] || this.player2.score === _settings__WEBPACK_IMPORTED_MODULE_0__["finalScore"]) {
        this.gameOver();
        this.startNewGame();
      }

      this.gameElement.innerHTML = "";
      var svg = document.createElementNS(_settings__WEBPACK_IMPORTED_MODULE_0__["SVG_NS"], "svg");
      svg.setAttributeNS(null, "width", this.width);
      svg.setAttributeNS(null, "height", this.height);
      svg.setAttributeNS(null, "viewBox", "0 0 ".concat(this.width, " ").concat(this.height));
      svg.setAttributeNS(null, "version", "1.1");
      this.gameElement.appendChild(svg);
      this.board.render(svg);
      this.player1.render(svg);
      this.player2.render(svg);
      this.ball.render(svg, this.player1, this.player2);
      this.score1.render(svg, this.player1.score);
      this.score2.render(svg, this.player2.score);
    }
  }]);

  return Game;
}();



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVG_NS", function() { return SVG_NS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYS", function() { return KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boardHeight", function() { return boardHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boardWidth", function() { return boardWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddleWidth", function() { return paddleWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddleHeight", function() { return paddleHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boardGap", function() { return boardGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ballRadius", function() { return ballRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreBoardSize", function() { return scoreBoardSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boardColor", function() { return boardColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineWidth", function() { return lineWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashes", function() { return dashes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddleSpeed", function() { return paddleSpeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finalScore", function() { return finalScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFamily", function() { return fontFamily; });
var SVG_NS = "http://www.w3.org/2000/svg";
var KEYS = {
  a: "a",
  // player 1 up key
  z: "z",
  // player 1 down key
  up: "ArrowUp",
  // player 2 up key
  down: "ArrowDown",
  // player 2 down key
  spaceBar: " " // we'll use this later...

};
var boardHeight = 256;
var boardWidth = 512;
var paddleWidth = 8;
var paddleHeight = 56;
var boardGap = 10;
var ballRadius = 8;
var scoreBoardSize = 16;
var color = "#FFFFFF";
var boardColor = "#353535";
var lineWidth = "2";
var dashes = "10,15";
var paddleSpeed = 10;
var finalScore = 10;
var fontFamily = "Silkscreen Web";

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Board =
/*#__PURE__*/
function () {
  function Board(width, height) {
    _classCallCheck(this, Board);

    this.width = width;
    this.height = height;
  }

  _createClass(Board, [{
    key: "render",
    value: function render(svg) {
      var rect = document.createElementNS(_settings__WEBPACK_IMPORTED_MODULE_0__["SVG_NS"], "rect");
      rect.setAttributeNS(null, "width", this.width);
      rect.setAttributeNS(null, "height", this.height);
      rect.setAttributeNS(null, "fill", _settings__WEBPACK_IMPORTED_MODULE_0__["boardColor"]);
      var line = document.createElementNS(_settings__WEBPACK_IMPORTED_MODULE_0__["SVG_NS"], "line");
      line.setAttributeNS(null, "x1", this.width / 2);
      line.setAttributeNS(null, "x2", this.width / 2);
      line.setAttributeNS(null, "y1", "0");
      line.setAttributeNS(null, "y2", this.height);
      line.setAttributeNS(null, "fill", _settings__WEBPACK_IMPORTED_MODULE_0__["color"]);
      line.setAttributeNS(null, "stroke", _settings__WEBPACK_IMPORTED_MODULE_0__["color"]);
      line.setAttributeNS(null, "stroke-width", _settings__WEBPACK_IMPORTED_MODULE_0__["lineWidth"]);
      line.setAttributeNS(null, "stroke-dasharray", _settings__WEBPACK_IMPORTED_MODULE_0__["dashes"]);
      svg.appendChild(rect);
      svg.appendChild(line);
    }
  }]);

  return Board;
}();



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Paddle; });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Paddle =
/*#__PURE__*/
function () {
  function Paddle(name, boardHeight, width, height, x, y, upKey, downKey) {
    var _this = this;

    _classCallCheck(this, Paddle);

    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.name = name;
    this.score = 0;
    document.addEventListener("keydown", function (event) {
      switch (event.key) {
        case upKey:
          _this.up();

          break;

        case downKey:
          _this.down();

          break;
      }
    });
  }

  _createClass(Paddle, [{
    key: "up",
    value: function up() {
      this.y = Math.max(this.y - _settings__WEBPACK_IMPORTED_MODULE_0__["paddleSpeed"], 0);
    }
  }, {
    key: "down",
    value: function down() {
      this.y = Math.min(this.y + _settings__WEBPACK_IMPORTED_MODULE_0__["paddleSpeed"], this.boardHeight - this.height);
    }
  }, {
    key: "render",
    value: function render(svg) {
      var rect = document.createElementNS(_settings__WEBPACK_IMPORTED_MODULE_0__["SVG_NS"], "rect");
      rect.setAttributeNS(null, "width", this.width);
      rect.setAttributeNS(null, "height", this.height);
      rect.setAttributeNS(null, "x", this.x);
      rect.setAttributeNS(null, "y", this.y);
      rect.setAttributeNS(null, "fill", _settings__WEBPACK_IMPORTED_MODULE_0__["color"]);
      svg.appendChild(rect);
      var text = document.createElementNS(_settings__WEBPACK_IMPORTED_MODULE_0__["SVG_NS"], "text");
      text.setAttributeNS(null, "x", this.x + this.width / 2);
      text.setAttributeNS(null, "y", this.y + this.height / 2);
      text.setAttributeNS(null, "font-family", _settings__WEBPACK_IMPORTED_MODULE_0__["fontFamily"]);
      text.setAttributeNS(null, "font-size", this.width * 1.3);
      text.setAttributeNS(null, "fill", _settings__WEBPACK_IMPORTED_MODULE_0__["boardColor"]);
      text.setAttributeNS(null, "writing-mode", "tb");
      text.setAttributeNS(null, "text-anchor", "middle");
      text.textContent = this.name;
      svg.appendChild(text);
    }
  }, {
    key: "coordinates",
    value: function coordinates(x, y, width, height) {
      var leftX = x;
      var rightX = x + width;
      var topY = y;
      var bottomY = y + height;
      return {
        leftX: leftX,
        rightX: rightX,
        topY: topY,
        bottomY: bottomY
      };
    }
  }]);

  return Paddle;
}();



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ball; });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Ball =
/*#__PURE__*/
function () {
  function Ball(radius, boardWidth, boardHeight) {
    _classCallCheck(this, Ball);

    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = (Math.floor(Math.random() * 2) - 0.5) * 2;
    this.ballSpeed = 1;
    this.reset();
    this.ping = new Audio("../../public/sounds/pong-01.wav");
  }

  _createClass(Ball, [{
    key: "reset",
    value: function reset() {
      this.x = this.boardWidth / 2;
      this.y = this.boardHeight / 2;

      do {
        this.vy = Math.floor(Math.random() * 10 - 5);
      } while (this.vy === 0);

      this.vx = this.direction * (6 - Math.abs(this.vy));
    }
  }, {
    key: "render",
    value: function render(svg, player1, player2) {
      var circle = document.createElementNS(_settings__WEBPACK_IMPORTED_MODULE_0__["SVG_NS"], "circle");
      this.x += this.vx * this.ballSpeed;
      this.y += this.vy * this.ballSpeed;
      this.paddleCollision(player1, player2);
      this.wallCollison(player1, player2);
      circle.setAttributeNS(null, "cx", this.x);
      circle.setAttributeNS(null, "cy", this.y);
      circle.setAttributeNS(null, "r", this.radius);
      circle.setAttributeNS(null, "fill", _settings__WEBPACK_IMPORTED_MODULE_0__["color"]);
      svg.appendChild(circle);
    }
  }, {
    key: "goal",
    value: function goal(player) {
      player.score++;
      this.ballSpeed = 1;
      this.reset();
    }
  }, {
    key: "wallCollison",
    value: function wallCollison(player1, player2) {
      var hitLeft = this.x - this.radius <= 0;
      var hitRight = this.x + this.radius >= this.boardWidth;
      var hitTop = this.y - this.radius <= 0;
      var hitBottom = this.y + this.radius >= this.boardHeight;

      if (hitLeft) {
        this.direction = -1;
        this.goal(player2);
      } else if (hitRight) {
        this.direction = 1;
        this.goal(player1);
      } else if (hitTop || hitBottom) {
        this.vy = -1 * this.vy;
      }
    }
  }, {
    key: "paddleCollision",
    value: function paddleCollision(player1, player2) {
      var paddleHorizontalHit = false;
      var paddleVerticalHit = false;
      var paddle;

      if (this.vx > 0) {
        paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height);
        paddleHorizontalHit = this.x + this.radius >= paddle.leftX && this.x + this.radius <= paddle.rightX && this.y >= paddle.topY && this.y <= paddle.bottomY;
        paddleVerticalHit = this.x >= paddle.leftX && this.x <= paddle.rightX && (this.y + this.radius >= paddle.topY && this.y - this.radius <= paddle.topY && this.y <= paddle.bottomY || this.y + this.radius >= paddle.bottomY && this.y - this.radius <= paddle.bottomY && this.y >= paddle.topY);
      } else {
        paddle = player1.coordinates(player1.x, player1.y, player1.width, player1.height);
        paddleHorizontalHit = this.x - this.radius <= paddle.rightX && this.x - this.radius >= paddle.leftX && this.y >= paddle.topY && this.y <= paddle.bottomY;
        paddleVerticalHit = this.x >= paddle.leftX && this.x <= paddle.rightX && (this.y + this.radius >= paddle.topY && this.y - this.radius <= paddle.topY && this.y <= paddle.bottomY || this.y + this.radius <= paddle.bottomY && this.y - this.radius >= paddle.bottomY && this.y >= paddle.topY);
      }

      if (paddleHorizontalHit) {
        this.vx *= -1;
        this.ballSpeed *= 1.1;
        this.ping.play();
      } else if (paddleVerticalHit) {
        this.vy *= -1;
        this.vx *= -1;
        this.ballSpeed *= 1.1;
        this.ping.play();
      }
    }
  }]);

  return Ball;
}();



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Score; });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Score =
/*#__PURE__*/
function () {
  function Score(x, y, size) {
    _classCallCheck(this, Score);

    this.x = x;
    this.y = y;
    this.size = size;
  }

  _createClass(Score, [{
    key: "render",
    value: function render(svg, score) {
      var text = document.createElementNS(_settings__WEBPACK_IMPORTED_MODULE_0__["SVG_NS"], "text");
      text.setAttributeNS(null, "x", this.x);
      text.setAttributeNS(null, "y", this.y);
      text.setAttributeNS(null, "font-family", _settings__WEBPACK_IMPORTED_MODULE_0__["fontFamily"]);
      text.setAttributeNS(null, "font-size", this.size);
      text.setAttributeNS(null, "fill", _settings__WEBPACK_IMPORTED_MODULE_0__["color"]);
      text.textContent = score;
      svg.appendChild(text);
    }
  }]);

  return Score;
}();



/***/ })
/******/ ]);