//initiate the options to define dancing style
var options = {

	all : { duration: 30000, colorStep: 30,timeStep: 70, colorRange : [0, 255], backward: false },
	red: { duration: 10000, colorStep: 30,timeStep: 70, colorRange : [0, 255], backward: false },
	green: { duration: 10000, colorStep: 30,timeStep: 70, colorRange : [0, 255], backward: false },
	blue : { duration: 10000, colorStep: 30,timeStep: 70, colorRange : [0, 255], backward: false }

};

//selecting body element and calling dancing method for it
var coda = new Coda('body', options);
coda.dance();
