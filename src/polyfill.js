/* global _proto,_matchesSelector */
(function() {
	
	"use strict";
	
	/* inject:content */
	
	// Check to see if needs polyfilling 
	if(!_proto.matches) {
		_proto.matches = _matchesSelector;
	}
	
})();