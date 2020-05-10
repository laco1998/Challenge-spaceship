


function accelerate() {
	var name = document.getElementById("shipName");
	name.innerHTML = 'Slow down! You are going to hit the Earth.';

	var indicator = document.getElementById("rectangle");
	indicator.style.backgroundColor = "red";

	var speedometer = document.getElementById("speedNumber");
	speedometer.innerHTML = "25 458 km/h";

	var earth = document.getElementById("windshield");
	earth.src = "images/space2.jpg";
}

function brake() {
	document.getElementById("shipName").innerHTML = 'This is too slow. Speed up!';
	document.getElementById("rectangle").style.backgroundColor = "lightgreen";
	document.getElementById("speedNumber").innerHTML = "952 km/h"
}

function info() {
	var information = {
	water: "sufficient",
	food: "sufficient",
	mood: "good",
	supplies: function() {
		return "Water: " + this.water + " | Food: " + this.food + " | Mood: " + this.mood;
	}
  }
	document.getElementById("supplies").innerHTML = information.supplies();
}

function mode() {
	var change = document.getElementById("screen"); 
	change.className = "zenMode";
}

function normal() {
	var normal = document.getElementsByClassName("zenMode")[0];
	normal.className = "";
}






