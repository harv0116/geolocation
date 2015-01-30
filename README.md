# Geolocation Assignment

###Author: Paul Harvey (harv0116)

**Description:** Build a webpage that will check to see if the current browser supports 
the navigator.geolocation object. If the browser does not support geolocation then have 
the page display an appropriately styled feedback message to the user.

If geolocation is supported then try to fetch the user's current location and then load 
a google STATIC map that includes a marker at the center of the map. The map image should 
be loaded at zoom level 14. The map image should be 400px by 400px. 

**To Use the App:** 
- Go to the website  [Geolocation: harv0116.github.io/geolocation](http://harv0116.github.io/geolocation "Geolocation")
- Allow the Application to access your location

**NOTE:** Sometimes the app needs more than one try to get your location depending on where 
you are located.

**The important code behind the App:**

The following function checks to see if it can find a GPS coordinate.  If YES then great,
if NO then an error message is displayed.

> document.addEventListener("DOMContentLoaded", function(){

>    if( navigator.geolocation ){ 

>        var params = {enableHighAccuracy: false, timeout:3600, maximumAge:60000};

>        navigator.geolocation.getCurrentPosition( reportPosition, gpsError, params ); 

>    }else{

>        alert("Sorry, your browser does not support location tools.")

>    }

> });


The following code sets up the canvas to display the map of the current location.
The function name is reportPosition.

> var width = 400;

> var height = 400;

> var can = document.createElement("canvas");

> can.className = "myCanvas";

> can.setAttribute("width", width); 

> can.setAttribute("height", height); 

> document.getElementById('output').appendChild(can);
  
> var canvasRef = document.querySelector('.myCanvas');

> var context = canvasRef.getContext('2d');

This part sets up and draws the img (map) that is to be displayed within canvas.
The map comes from google.

>  	var img = new Image;

>  	img.src = &quot;https://maps.googleapis.com/maps/api/staticmap?center=&quot; + 
>  	position.coords.latitude+ "," + position.coords.longitude + 
>  	"&markers=color:red%7Xlabel:X%7C" + position.coords.latitude + "," + 
>  	position.coords.longitude + " &size=400x400&zoom=14&key=AIzaSyB0kyumQiko8guSTwwT7rUweHYqSxXV5Vw";
  
>   img.onload = function() {
>   context.drawImage(img, 0, 0); };


Lastly there is a function that is there to display a message if the locator is broken.

> function gpsError( error ){   

>  	var errors = {

>    	1: 'Permission denied',

>    	2: 'Position unavailable',

>    	3: 'Request timeout'

>  	};
>  	alert("Error: " + errors[error.code]);
> }
