/* Coda is fun and usefull for DOM elements dancing by their color related style attributes 
 * Author: Saeid Alidadi
 * Email : alidadisaeid@gmail.com
 * Date  : 26-Dec-2015
*/ 
+function(){

	var Coda = function(sets) {
		// options for coda object
		//the element for dancing
		this.element = 'body';

		//optionation in ms for dancing
		this.duration = sets.duration;

		//The range of for dancing;
		this.colorRange = sets.colorRange;
		//The step that a color(R,G,B) chages in that range
		this.colorStep = sets.colorStep;
		 
		//Time step that a color(R,G,B) changes in that optionation
		this.timeStep = sets.timeStep;

		// Defines that the changing action will step down after getting to its Maximum value
		this.backward = true;

		this.value = 0;

	}

	/* Coda methods */
	//
	Coda.prototype.dance = function() {

		var that = this;
		var min = this.colorRange.min;
		var max = this.colorRange.Max;

		var dancing = setInterval(function(){

			//ckeck that the value is in the range
			if ( min <= that.value && that.value <= max && (that.value + that.colorStep) <= max ) {

				that.value += that.colorStep;
				
			}

		}, this.timeStep);
		setTimeout(function(){
			clearInterval(dancing);
		}, this.duration);
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

				//suffixes that come after a color option like r_suffix
				var suffixes = ['duration', 'colorStep', 'colorRange', 'timeStep'];
				
				for(var suffix in suffixes) {

					suffix = suffixes[suffix];

					//Mining red color options
					if (typeof option['r_' + suffix])
						redOpt[suffix] = option['r_' + suffix];

					//Mining green color options
					if (typeof option['g_' + suffix]) 
						greenOPt[suffix] = option['g_' + suffix];

					//Mining blue color options
					if (typeof option['b_' + suffix])
						blueOpt[suffix] = option['b_' + suffix];
				
				}
				var all = {

					duration: 10000,
					colorStep: 1,
					colorRange : { min : 0, Max: 255},
					timeStep: 10
				}
				Ocoda = new Coda(all);
				var red = new Coda(redOpt);
				var green = new Coda(greenOPt);
				var blue = new Coda(blueOpt);
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
				},Ocoda.duration);

					
			},

			stop: function() {

			}
		}
	}
	
}();