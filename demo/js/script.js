//initiate the options to define dancing style
var options = {

	duration: 500,
	red : {
		duration: 10000,
		colorStep: 1,
		timeStep: 10,
		backward:  true,
		colorRange: {min: 0, Max: 30}
	},
	green: {
		duration: 30000, 
		colorStep: 1,
		timeStep: 10,
		backward: true,
		colorRange: {min: 30, Max: 150}
	},
	blue: {
		duration:100000, 
		colorStep: 1, 
		timeStep: 10, 
		backward: true,
		colorRange: {min: 30, Max: 50}
	}
};

//selecting body element and calling dancing method for it
coda('body').dance(options);
