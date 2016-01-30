//initiate the options to define dancing style
var options = {

	all : { duration: 30000, colorStep: 30,timeStep: 70, colorRange : [0, 255], backward: false },
	redOpt: { duration: 5000, colorStep: 1, timeStep: 10,
		backward:  true,
		colorRange: [60 , 30] },
	greenOpt: { duration: 5000, 
		colorStep: 1,
		timeStep: 10,
		backward: true,
		colorRange: [30, 150] },
	blueOpt : { duration:5000, 
		colorStep: 1, 
		timeStep: 100, 
		backward: true,
		colorRange: [30, 150] }
};

//selecting body element and calling dancing method for it
//var coda = new Coda('body', options);
coda('body', options).dance();
