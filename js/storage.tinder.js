var Tinder = window.Tinder || {};

Tinder.store = function(data){

	    var dataObj = {lat: data.lat, lon: data.lon, street: data.street}
	    // We need JSON.stringify to serialize the object into a string
	    window.localStorage.setItem("myLocation", JSON.stringify(dataObj));

}
