/* global _matches */
"use strict";

var _proto = Element.prototype;
var _matches = _proto.matches || _proto.webkitMatchesSelector || _proto.mozMatchesSelector || _proto.msMatchesSelector || _matchesSelector;

function _matchesSelector(selector) {

	var element = this,
		// potential matches against the parentNode.querySelectorAll as if against the element version it wont be in the found list 
		// (parentNode is an Element,Document or DocumentFragment all of which has a querySelectorAll method if browser supports it)
		potentialMatches = element.parentNode.querySelectorAll(selector),
		i = potentialMatches.length;

	// Loop back through each item found and match it against the element being checked
	while (--i >= 0) {
		
		if(potentialMatches.item(i) === element) {
			return true;
		}
	}

	return false;
}

// Wrapper class regardless of implementation so you can pass the element in as an argument
function matches(element, selector) {
	return _matches.call(element, selector);
}
