/* Coda is fun and usefull for DOM elements dancing by their color related style attributes 
 * Author: Saeid Alidadi
 * Email : alidadisaeid@gmail.com
 * Date  : 26-Dec-2015
*/ 
+function(){

	var Coda = function(d) {
		// options for coda object
		//the element for dancing
		this.element = 'body';

		//optionation in ms for dancing
		this.optionation = d.optionation || 1000;

		//The range of for dancing;
		this.colorRange = {
			min: 0,
			Max: 255
		}
		//The step that a color(R,G,B) chages in that range
		this.colorStep = 3;
		 
		//Time step that a color(R,G,B) changes in that optionation
		this.timeStep = 10;

		// Defines that the changing action will step down after getting to its Maximum value
		this.backward = true;

		this.value = 0;

	}

	/* Coda methods */
	//
	Coda.prototype.dance = function(opt) {
		var that = this;
		var min = that.colorRange.min;
		var max = that.colorRange.Max;
		var dancing = setInterval(function(){
			//ckeck that the value is in the range
			if ( min <= that.value && that.value <= max && (that.value + that.colorStep) <= max ) {

				that.value += that.colorStep;
				
			}
		}, that.timeStep);
		setTimeout(function(){
			clearInterval(dancing);
		}, this.optionation);
	}
	Coda.prototype.setValue = function(value) {
		this.value = value;
	}

	Coda.prototype.getValue = function () {
		return this.value;
	}
	Coda.prototype.setColorRange = function() {

	}
	Coda.prototype.getColorRange = function() {
		/* 
		 */
		
	}
	//This method stop dancing of selected element
	Coda.prototype.stop = function() {
		
	}

	/* Coda color classes that inherit from Coda class
	 *
	var inheritsFrom = function(child, parent) {
		child.prototype = new parent();
	}
	//This class responsible for red color dancing
	function Red(options) {
		
	}
	inheritsFrom(Red, Coda);
	
	//This class responsible for green color dancing
	function Green(options) {
		
	}
	inheritsFrom(Green, Coda);
	
	//This class responsible for blue color dancing
	function Blue(options) {

	}
	inheritsFrom(Blue, Coda);
	*/
	//for creating and getting coda object from outeside scope
	window.coda = function (element){
		
		return {

			dance: function(option) {
				//check for an property in object
				var check = function(obj , pro) {
					return obj.hasOwnProperty(pro);
				}
				
				//options that we take from inserted option
				var redOpt = {}, greenOPt = {}, blueOpt = {};

				if(check(option, 'redDur')){
					redOpt.duration = option.redDur;
				}
				if(check(option, 'red')) {
					if (option.red == true) {
						var red = new Coda(option);
						red.dance();
					}
				} else {
					var red = new Coda(option);
					red.dance();
				}
				if(check(option, 'green')) {
					if (option.green == true)
						var green = new Coda(option);
				} else {
					var green = new Coda(option);
					green.dance();
				}
				if(check(option, 'blue')) {
					if (option.blue == true)
						var blue = new Coda(option);
				} else {
					var blue = new Coda(option);
					blue.dance();
				}

				Ocoda = new Coda(option);
				red.dance();
				blue.dance();
				green.dance();
				var dancing = setInterval(function(){
					document[element]
						    .style
							.backgroundColor = 'rgb(' 
												+ red.getValue() + ',' 
												+ green.getValue() + ',' 
												+ blue.getValue() + ')';
				},Ocoda.timeStep);

				setTimeout(function(){
					clearInterval(dancing);
				},Ocoda.optionation);

					
			},

			stop: function() {

			}
		}
	}
	
}();