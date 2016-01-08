/* Coda is fun and usefull for DOM elements dancing by their color related style attributes 
 * Author: Saeid Alidadi
 * Email : alidadisaeid@gmail.com
 * Date  : 26-Dec-2015
*/ 
+function(){

	var Coda = function() {
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
	}

	//This method stop dancing of selected element
	Coda.prototype.stop = function() {
		
	}

	/* Coda color classes that inherit from Coda class
	 */
	var inheritsFrom = function(child, parent) {
		child.prototype = new parent();
	}
	//This class responsible for red color dancing
	function Red() {
		this.name = "red";
	}
	inheritsFrom(Red, Coda);
	
	//This class responsible for green color dancing
	function Green() {

	}
	inheritsFrom(Green, Coda);
	
	//This class responsible for blue color dancing
	function Blue() {

	}
	inheritsFrom(Blue, Coda);

	//for creating and getting coda object from outeside scope
	window.coda = function (element){
		
		return {

			dance: function(options) {
				if (options.red === undefined )
					console.log('unnnn');
			},

			stop: function() {

			}
		}
	}
	
}();