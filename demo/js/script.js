//initiate the options to define dancing style
var options = {

	duration: 500,
	red : {
		duration: 1000,
		colorStep: 1,
		timeStep: 10,
		backward:  true,
		colorRange: {min: 0, Max: 30}
	},
	green: {
		duration: 3000, 
		colorStep: 1,
		timeStep: 10,
		backward: true,
		colorRange: {min: 30, Max: 150}
	},
	blue: {
		duration:1000, 
		colorStep: 1, 
		timeStep: 100, 
		backward: true,
		colorRange: {min: 30, Max: 150}
	}
};

//selecting body element and calling dancing method for it
coda('body').dance(options);
