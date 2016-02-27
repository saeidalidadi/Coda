//initiate the options to define dancing style
function getOptions() {
	return options = {

		all : { 
			duration: +document.getElementById("duration-val").value,
			colorStep: +document.getElementById("colorstep").value,
			timeStep: +document.getElementById("timestep").value,
			colorRange : [+document.getElementById("range-min").value, +document.getElementById("range-max").value],
			backward: document.getElementById("red-backward-state").value
		},
		red: { 
			duration: +document.getElementById("red-duration-val").value,
			colorStep: +document.getElementById("red-colorstep").value,
			timeStep: +document.getElementById("red-timestep").value,
			colorRange : [+document.getElementById("red-range-min").value, +document.getElementById("red-range-max").value],
			backward: document.getElementById("red-backward-state").value 
		},
		green: { 
			duration: +document.getElementById("green-duration-val").value,
			colorStep: +document.getElementById("green-colorstep").value,
			timeStep: +document.getElementById("green-timestep").value,
			colorRange : [+document.getElementById("green-range-min"), +document.getElementById("green-range-max").value],
			backward: document.getElementById("green-backward-state").value 
		},
		blue : { 
			duration: +document.getElementById("blue-duration-val").value,
			colorStep: +document.getElementById("blue-colorstep").value,
			timeStep: +document.getElementById("blue-timestep").value,
			colorRange : [+document.getElementById("blue-range-min").value, +document.getElementById("blue-range-max").value],
			backward: document.getElementById("blue-backward-state").value
		},
		has_red : false
	};
}

//selecting body element and calling dancing method for it
window.onload = function() {

	document.getElementById("btn-common").onclick = function() {

		coda('body').dance();
	}

	document.getElementById("btn-red").onclick = function() {
		var opt = {
			redOpt: { 
				duration: +document.getElementById("red-duration-val").value,
				colorStep: +document.getElementById("red-colorstep").value,
				timeStep: +document.getElementById("red-timestep").value,
				colorRange : [+document.getElementById("red-range-min").value, +document.getElementById("red-range-max").value],
				backward: document.getElementById("red-backward-state").value 
			},
		}

		coda('body', opt).dance();
	}

	document.getElementById("btn-green").onclick = function() {
		coda('body').dance();
	}

	document.getElementById("btn-blue").onclick = function() {
		coda('body', options).dance();
	}
}
	
