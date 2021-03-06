/* global matches define, module */

(function(root, factory) {

	// Check we are not loading
	if(!root.Element) {
		throw new Error("Element is required for matches-selector-polyfill to be used");
	}

	"use strict";

	if (typeof define === 'function' && define.amd) {

		define([], factory);
	}
	else if (typeof module === 'object' && module.exports) {

		module.exports = factory();
	}

} (this, function() {



	/* inject:content */

	return matches;
}));