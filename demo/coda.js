/* Color is fun and usefull for DOM elements dancing by their color related style attributes 
 * Author: Saeid Alidadi
 * Email : alidadisaeid@gmail.com
 * Date  : 26-Dec-2015
*/

+function() {
	//Coda object for setting main dancing actions
	var Coda = function(element, options) {

		var def = {
				duration: 8000,
				colorStep: 2,
				timeStep: 30,
				colorRange : [0, 255],
				backward: true
		}

		var isOption = options !== undefined;
		this.element = typeof element !== undefined ? element : 'body';
		this.all = isOption && options.hasOwnProperty("all") ? options.all : def;
		this.red = isOption && options.hasOwnProperty("red") ? options.red : def;
		this.green = isOption && options.hasOwnProperty("green") ? options.green : def;
		this.blue = isOption && options.hasOwnProperty("blue") ? options.blue : def;
		this.has_red = isOption && options.hasOwnProperty("has_red") ? options.has_red : true;
		this.has_green = isOption && options.hasOwnProperty("has_green") ? options.has_green : true;
		this.has_blue = isOption && options.hasOwnProperty("has_blue") ? options.has_blue : true;
		this.red_val = 0;
		this.green_val = 0;
		this.blue_val = 0;

		Object.defineProperty(this, 'default' ,{
			get: function() {
				return def;
			}
		});
	}

	//The dancer method that is the main dancer  
	Coda.prototype.dance = function() {
		//Getting maximum duration
		if(this.hasOwnProperty('red') || this.hasOwnProperty('green') || this.hasOwnProperty('blue')) {
			if(this.hasOwnProperty('red')) {
				if(this.hasOwnProperty('blue')) {

				}
			}
			if(this.hasOwnProperty('green')) {
				if(this.hasOwnProperty('blue')) {

				}
			}
			if(this.hasOwnProperty('blue')){

			}
		}
		//dancing the colors 
		var red =  false, green = false, blue = false;
		if(this.has_red) {
			this.changeValue("red");
			red = true;
		}
		if(this.has_green) {
			this.changeValue("green");
			green = true;
		}
		if(this.has_blue) {
			this.changeValue("blue");
			blue = true;
		}
		//Getting minimum timeStep
		var minTimeStep = this.default.timeStep;
		//Set an interval
		var that = this; 
		var redValue = 0, greenValue = 0, blueValue = 0;
		var interval = setInterval(function() {
			
			//Getting values of colors
			redValue = that.getValue("red");
			
			greenValue = that.getValue("green");
			
			blueValue = that.getValue("blue");
			
			//Setting the element background color
			document[that.element]
				.style
				.backgroundColor = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
		}, minTimeStep); 
			 
			 
		//A time out function with maximum duration
		setTimeout(function(){
			clearInterval(interval);
		}, this.default.duration);
	}

	//Get the value of the color
	Coda.prototype.getValue = function (color) {
		return this[color + "_val"];
	}

	// Stop dancing immediately
	Coda.prototype.stop = function() {

	}



	/* Color methods */
	//changes the color value by setTimeout and setInterval functions 
	Coda.prototype.changeValue = function(color) {

		var min = this[color].colorRange[0];
		var max = this[color].colorRange[1];
		var down = false;
		this[color + "_val"] = this[color].colorRange[0];
		var that = this;
		var colorVal = this[color + "_val"];

		var dancing = setInterval(function(){
			//ckeck that the value is in the range if true then changes the value
			if ( min <= colorVal && colorVal <= max )  {

				if ( (that[color + "_val"] + that[color].colorStep) >= max && that[color].backward ) {
					down = true;
				};

				if ((that[color + "_val"] - that[color].colorStep) <= min && that[color].backward ) {
					down = false;
				};

				if( down ) {
					that[color + "_val"] -= that[color].colorStep;
				} else {
					that[color + "_val"] += that[color].colorStep;
				}	
			} 

		}, this[color].timeStep);

		//clears the steInterval after exeeding to end of duration time
		setTimeout(function(){
			clearInterval(dancing);
		}, this[color].duration);
	}
	 
	//Access to this dancing component from glbal scope
	window.coda = function(element, options) {
		var co = new Coda(element, options);
		return co;

	};
}();