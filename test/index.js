/*global matches, _matchesSelector, describe, expect, it */

(function() {

	/**
	 * States whether log outputs to the console or not
	 */
	var outputLog = false;
	
	describe('matches', function() {
    
		var eventNo = 0;
 
		var s1 = it(++eventNo + ': fallback method should match', function() {

			var el = document.getElementById('block-1');
			var result = _matchesSelector.call(el, '.parent');
			
			_log(s1.getFullName(), result);
			
			expect(result).toBe(true);
		});

		var s2 = it(++eventNo + ': fallback method should NOT match', function() {

			var el = document.getElementById('block-1');
			var result = _matchesSelector.call(el, '.parent-fake');
			
			_log(s2.getFullName(), result);
			
			expect(result).toBe(false);
		});
		
		var s3 = it(++eventNo + ': Element.matches should work', function() {

			var el = document.getElementById('block-1');
			var result = el.matches('.parent');
			
			_log(s3.getFullName(), result);
			
			expect(result).toBe(true);
		});
		
		var s4 = it(++eventNo + ': module function with fallback should work', function() {

			var el = document.getElementById('block-1');
			var result = matches(el, '.parent');
			
			_log(s4.getFullName(), result);
			
			expect(result).toBe(true);
		});
	});
		
	function _log() {
		
		if (outputLog) {
			
			try {
				console.log.apply(console, arguments);	
			} 
			catch (e) {
				
				// IE8 Hack
				var i = arguments.length, args = [];
				while (--i >= -1 && args.push('args[' + i + ']'));
				new Function('args', 'console.log(' + args.join(',') + ')')(arguments);
			}
		}
	}

})();
