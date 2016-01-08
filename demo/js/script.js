//initiate the options to define dancing style
var options = {
	duration: 500,
	redDur: 200,
	greenDur: 300,
	blueDur: 1000,
	rColorStep: 30,
	gColorStep: 20,
	bColorStep: 4,
	rTimeStep: 4,
	bTimeStep: 100,
	gTimeStep: 40
};
var du = 2000;
//selecting body element and calling dancing method for it
coda('body').dance(options);
