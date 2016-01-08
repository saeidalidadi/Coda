/* Coda is fun and usefull for DOM elements dancing by their color related style attributes 
 * Author: Saeid Alidadi
 * Email : alidadisaeid@gmail.com
 * Date  : 26-Dec-2015
*/ 
+function(){

	var Coda = {
		// options for coda object
		elements : [],
		//optionation in ms for dancing
		duration : 100000,

		//The range of for dancing;
		colorRange : {min:0, Max:255},
		//The step that a color(R,G,B) chages in that range
		colorStep : 1, 
		 
		//Time step that a color(R,G,B) changes in that optionation
		timeStep : 10,

		// Defines that the changing action will step down after getting to its Maximum value
		backward : true,

		//chanes duration of dancing
		value : 0

	}

	/* Coda methods */
	//
	Coda.dance = function() {

		var that = this;
		var min = this.colorRange.min;
		var max = this.colorRange.Max;
		var down = false;
		this.value = this.colorRange.min;

		var dancing = setInterval(function(){

			//ckeck that the value is in the range if true then changes the value
			if ( min <= that.value && that.value <= max )  {

				if ( (that.value + that.colorStep) >= max && that.backward ) {
					down = true;
				};

				if ((that.value - that.colorStep) <= min && that.backward ) {
					down = false;
				};

				if( down ) {
					that.value -= that.colorStep;
				} else {
					that.value += that.colorStep;
				}
				
				
			} 

		}, this.timeStep);

		//clears the steInterval after exeeding to end of duration time
		setTimeout(function(){
			clearInterval(dancing);
		}, this.duration);
	}

	Coda.setValue = function(value) {
		this.value = value;
	}

	Coda.getValue = function () {
		return this.value;
	}
	Coda.setOptions = function(opt) {
		if (typeof opt === 'Object' )
			console.log('ddd');
	}
	//This method stop dancing of selected element
	Coda.stop = function() {
		
	}

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

				if(option.hasOwnProperty('red')){

					var red = Object.create(Coda);
					red.setOptions(option);
					red.dance();
				}
				if(option.hasOwnProperty('green')){

					var green = Object.create(Coda);
					green.setOptions(option);
					green.dance();
				}
				if(option.hasOwnProperty('blue')){

					var blue = Object.create(Coda);
					blue.setOptions(option);
					blue.dance();
				}
				
				
				var dancing = setInterval(function(){
					document[element]
						    .style
							.backgroundColor = 'rgb(' 
												+ red.getValue() + ',' 
												+ green.getValue() + ',' 
												+ blue.getValue() + ')';
				},Coda.timeStep);

				setTimeout(function(){
					clearInterval(dancing);
				},Coda.duration);

					
			},

			stop: function() {

			}
		}
	}
	
}();