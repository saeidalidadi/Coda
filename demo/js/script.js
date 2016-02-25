//initiate the options to define dancing style
var red_opt = document.getElementById("red-duration-val");
var options = {

	all : { 
		duration: document.getElementById("duration-val"),
		colorStep: document.getElementById("colorstep"),
		timeStep: document.getElementById("timestep"),
		colorRange : [document.getElementById("range-min"), document.getElementById("range-max")],
		backward: document.getElementById("red-backward-state")
	},
	redOpt: { 
		duration: document.getElementById("red-duration-val"),
		colorStep: document.getElementById("red-colorstep"),
		timeStep: document.getElementById("red-timestep"),
		colorRange : [document.getElementById("red-range-min"), document.getElementById("red-range-max")],
		backward: document.getElementById("red-backward-state") 
	},
	greenOpt: { 
		duration: document.getElementById("green-duration-val"),
		colorStep: document.getElementById("green-colorstep"),
		timeStep: document.getElementById("green-timestep"),
		colorRange : [document.getElementById("green-range-min"), document.getElementById("green-range-max")],
		backward: document.getElementById("green-backward-state") 
	},
	blueOpt : { 
		duration: document.getElementById("blue-duration-val"),
		colorStep: document.getElementById("blue-colorstep"),
		timeStep: document.getElementById("blue-timestep"),
		colorRange : [document.getElementById("blue-range-min"), document.getElementById("blue-range-max")],
		backward: document.getElementById("blue-backward-state")
	}
};

//selecting body element and calling dancing method for it
window.onload = function() {

	document.getElementById("btn-common").onclick = function() {
		coda('body', options).dance();
	}

	document.getElementById("btn-red").onclick = function() {
		var opt = {
			redOpt: { 
				duration: document.getElementById("red-duration-val"),
				colorStep: document.getElementById("red-colorstep"),
				timeStep: document.getElementById("red-timestep"),
				colorRange : [document.getElementById("red-range-min"), document.getElementById("red-range-max")],
				backward: document.getElementById("red-backward-state") 
			},
		}

		coda('body', opt).dance();
	}

	document.getElementById("btn-green").onclick = function() {
		coda('body', options).dance();
	}

	document.getElementById("btn-blue").onclick = function() {
		coda('body', options).dance();
	}
}
	
