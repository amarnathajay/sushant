var SILLY = (function(module){

	module.DoIt = function(resultObject){
		if (typeof navigator !== "undefined" && navigator.app) {
        // Mobile device.
        navigator.app.loadUrl('http://www.google.com/', {openExternal: true});
    } else {
        // Possible web browser
        window.open("http://www.google.com/", "_blank");
    }

		// window.location.href = "http://www.google.com";
		// resultObject.prepend(Date() + '<br/>');
	};

	return module;
}(SILLY || {}));