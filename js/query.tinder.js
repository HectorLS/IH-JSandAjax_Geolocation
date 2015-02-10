var Tinder = window.Tinder || {};

Tinder.query = function(selector){
	return document.querySelector(selector);
}

Tinder.on = function(element, theEvent, callback) {
	element.addEventListener(theEvent, callback);
}