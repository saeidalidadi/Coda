/* Color is fun and usefull for DOM elements dancing by their color related style attributes 
 * Author: Saeid Alidadi
 * Email : alidadisaeid@gmail.com
 * Date  : 26-Dec-2015
*/ 
+function(){
	//Coda object for setting actions
	var Coda = function(element, options) {

		this.element = element || 'body';
		
		
		/*object.defineProperty(this, 'default' ,{
			get: function() {
				return this.Color
			}
		})*/

	}
	//The dancer method 
	Coda.prototype.dance = function() {
		//Getting maximum duration
		//Getting minimum timeStep
		//Set an interval  
			//Getting values from Colors objects 
			 //Setting the element background color
		//A time out function with maximum duration
	}

	// Stop dancing immediately
	Coda.prototype.stop = function() {

	}

	//Three color objects from Color class
	var Red = new Color(options.red);
	var Green = new Color(options.green);
	var Blue = new Color(options.blue);

	//this is object for three colors - RGB -
	var Color = function(option) {

		// options for Color object

		//duration in ms for dancing
		this.duration = option.duration || 3000;

		//The range of for dancing;
		this.colorRange = option.colorRange || [0,255];

		//The step that a color(R,G,B) chages in that range
		this.colorStep = option.colorStep || 1;
		 
		//Time step that a color(R,G,B) changes in that duration
		this.timeStep = option.timeStep || 30;

		// Defines that the changing action will step down after getting to its Maximum value
		this.backward = true;

		this.value = 0;

	}

	/* Color methods */
	//changes the color value by setTimeout and setInterval functions 
	Color.prototype.changeValue = function() {

		var that = this;
		var min = this.colorRange[0];
		var max = this.colorRange[1];
		var down = false;
		this.value = this.colorRange[0];

		var dancing = setInterval(function(){
			//console.log(this.name);
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
	//Get the value of the color
	Color.prototype.getValue = function () {
		return this.value;
	}
	
	//This method stop dancing of selected element
	Color.prototype.stop = function() {
		
	}
	
	window.coda = function(){
		return new Coda(element, options);
	};
}();