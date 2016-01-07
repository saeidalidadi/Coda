/* Coda is fun and usefull for DOM elements dancing by their color related style attributes 
 * Author: Saeid Alidadi
 * Email : alidadisaeid@gmail.com
 * Date  : 26-Dec-2015
*/ 
+function(){

	Coda = function() {
		// options for coda object
		//the element for dancing
		this.element = 'body';

		//Duration in ms for dancing
		this.duration = 10;

		//The range of for dancing;
		this.colorRange = {
			min: 0,
			Max: 255
		}
		//The step that a color(R,G,B) chages in that range
		this.colorStep = 1;
		 
		//Time step that a color(R,G,B) changes in that duration
		this.timeStep = 10;

		// Defines that the changing action will step down after getting to its Maximum value
		this.backward = true;


	}

	/* Coda methods */
	//The color of that element will dance with calling this method
	Coda.prototype.dance = function() {
		/* 1. 
		 */
		console.log('this is a dance functiom')
	}

	//This mwthod stop dancing of selected element
	Coda.prototype.stop = function() {
		
	}
	//for creating and getting coda object from outeside scope
	window.coda = function (element){
		return new Coda(element);
	}
	
}();
