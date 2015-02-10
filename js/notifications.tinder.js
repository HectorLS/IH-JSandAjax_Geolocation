var Tinder = window.Tinder || {};

Tinder.notify = function(options){
	
	  // Notification is an object
	 if(!window.Notification) {
	   alert("no notification sorry");
	   return;
	 }
	  // permission is a STRING
	 if(Notification.permission !== "denied") {
	     //requestPermission is a Function
	    Notification.requestPermission(function(permission) {
	      if (permission === "granted"){
	        //Here we add value to notification variable
	        notification = new Notification("Hi bitches!", options);
	      }
	    });
	  }
	 

}