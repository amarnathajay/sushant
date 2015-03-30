var SILLY = (function(module){

	module.DoIt = function(resultObject){
		window.location.href = "http://www.google.com";
		// resultObject.prepend(Date() + '<br/>');
	};

	return module;
}(SILLY || {}));