//initiate the options to define dancing style
var options = {

	duration: 500,
	red : {
		duration: 1000,
		colorStep: 20
	},
	green: {},
	blue: {}
};

//selecting body element and calling dancing method for it
coda('body').dance(options);
