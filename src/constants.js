//Although this file tries to comply to jslint,
//there are a few cases where it doesn't.
//The code could be re-written, but I decided not to.
//I'd rather have a file that does not break due to
//someone else's bad practices than one that does.
;(function (w, undefined) {
	"use strict";
	var define, get, defined, //exposed functions
		err, //private funcs
		constants = [],
		alert = w.alert,//shorthand for quick access.
		console = w.console;//shorthand for quick access.

	defined = function (id) {
		if (typeof constants[id] !== 'undefined') {
			return true;
		}
		return false;
	};

	define = function (id, val) {
		if (defined(id)) {
			err(id + ' is defined already.');
			return false;
		}
		constants[id] = val;
	};

	get = function (id) {
		if (defined(id)) {
			var val = constants[id];
			return val;
		}

		err(id + ' is not defined.');
		return undefined;
	};

	err = function (msg) {
		if (typeof console !== 'undefined') {
			console.error(msg);
		} else {
			alert(msg);
		}
	};

	w.define = define;
	w.get = get;
	w.defined = defined;
}(window));
