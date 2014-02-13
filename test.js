// JavaScript Document

var Return = (function(module) {
	module.DoIt = function(resultObject) {
		resultObject.prepend(Date() + '<br/>');
	};
	return module;
}(Return || {}))