var Tinder = window.Tinder || {};

Tinder.ajax = function(url, data, callback) {
		
	var xhr = new XMLHttpRequest();

	xhr.open("GET", url);  
	xhr.send(); 
	xhr.onload = callback;

}
