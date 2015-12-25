/* Coda is fun and usefull for DOM elements dancing by their color related style attributes 
 * Author: Saeid Alidadi
 * Email : alidadisaeid@gmail.com
 * Date  : 26-Dec-2015
*/ 
var coda = {}
// options for coda object
//the element for dancing
coda.element = 'body';

//Duration in ms for dancing
coda.duration = 10;

//The range of for dancing;
coda.colorRange = {
	min: 0,
	Max: 255
}
//The step that a color(R,G,B) chages in that range
coda.colorStep = 1;
 
//Time step that a color(R,G,B) changes in that duration
coda.timeStep = 10;

// Defines that the changing action will step down after getting to its Maximum value
coda.rollBack = true;

//Coda methods:
//The color of that element will dance with calling this method
coda.dance = function() {
	
}

coda.stop = function() {
	
}