// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
	// obj will be empty for chat widget
	// this will fire only once when the widget loads
});
document.addEventListener('onEventReceived', function(obj) {
  	// obj will contain information about the event
		var image = document.getElementById("img");
    image.src = "http://pa1.narvii.com/7264/41d2cfa4e361dc78b2fd76cf4b4b5bdfbb19e091r1-200-200_00.gif" 
});