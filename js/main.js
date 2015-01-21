// JavaScript Document

document.addEventListener("DOMContentLoaded", function(){
  
  if( navigator.geolocation ){ 
  
    var params = {enableHighAccuracy: false, timeout:3600, maximumAge:60000};
    navigator.geolocation.getCurrentPosition( reportPosition, gpsError, params ); 
    
  }else{
    //browser does not support geolocation api
    alert("Sorry, your browser does not support location tools.")
  }
});

function reportPosition( position ){ 

	var width = 400;
  	var height = 400;
  	var can = document.createElement("canvas");
  	can.className = "myCanvas";
  	can.setAttribute("width", width); 
  	can.setAttribute("height", height); 
  	document.getElementById('output').appendChild(can);
  
  	var canvasRef = document.querySelector('.myCanvas');
  	var context = canvasRef.getContext('2d');
  	var img = new Image;

  	img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude+ "," + position.coords.longitude + 														"&markers=color:red%7Xlabel:X%7C" + position.coords.latitude + "," + position.coords.longitude + " &size=400x400&zoom=14&key=AIzaSyB0kyumQiko8guSTwwT7rUweHYqSxXV5Vw";
  
   	img.onload = function() {
    context.drawImage(img, 0, 0);
  };
}

function gpsError( error ){   
  	var errors = {
    	1: 'Permission denied',
    	2: 'Position unavailable',
    	3: 'Request timeout'
  	};
  	alert("Error: " + errors[error.code]);
}