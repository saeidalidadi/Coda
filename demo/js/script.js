//initiate the options to define dancing style
var options = {

	duration: 500,
	r_duration: 10000,
	g_duration: 30,
	b_duration: 100,
	r_colorStep: 30,
	g_colorStep: 2,
	b_colorStep: 1,
	r_timeStep: 70,
	b_timeStep: 10,
	g_timeStep: 40,
	r_colorRange : {min: 0, Max: 255},
	g_colorRange : {min: 0, Max: 250},
	b_colorRange : {min: 0, Max: 240}
};

//selecting body element and calling dancing method for it
coda('body').dance(options);
