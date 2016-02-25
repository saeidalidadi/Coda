/* Color is fun and usefull for DOM elements dancing by their color related style attributes 
 * Author: Saeid Alidadi
 * Email : alidadisaeid@gmail.com
 * Date  : 26-Dec-2015
*/

+function() {
	//Coda object for setting actions
	var Coda = function(element, options) {

		this.element = typeof element !== undefined ? element : 'body';
		this.options = typeof options !== undefined ? options : this.default;
		this.redOpt = typeof options.redOpt !== undefined ? options.redOpt : this.default;
		this.greenOpt = typeof options.greenOpt !== undefined ? options.greenOpt : this.default;
		this.blueOpt = typeof options.blueOpt !== undefined ? options.blueOpt : this.default;
		this.hasRed = true;
		this.hasGreen = true;
		this.hasBlue = true;

		object.defineProperty(this, 'default' ,{
			get: function() {
				return {
					duration: 3000,
					colorStep: 1,
					timeStep: 10,
					colorRange : [0, 255],
					backward: true
				}
			}
		});

	}

	//Arranging the given options from this module user
	Coda.prototype.arrangeOptions = function() {
		for(var key in this.options) {
			var opt;
			switch (key) {
				case 'all' : 
					opt = options.all;
					break;
				case 'redOpt':
					this.redOpt = options.redOpt;
					break;
				case 'greenOpt':
					this.greenOpt = options.greenOpt;
					break;
				case'blueOpt': 
					this.blueOpt = options.blueOpt;
					break;
				case 'hasRed':
					this.hasRed = options.hasRed;
					break;
				case 'hasGreen':
					this.hasGreen = options.hasGreen;
				case 'hasBlue':
					tis.hasBlue = options.hasBlue;
				default:
					break;
			}
		}
	}

	//The dancer method 
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
		if(this.hasRed) {
			this.red.changeValue();
			red = true;
		}
		if(this.hasGreen) {
			this.green.changeValue();
			green = true;
		}
		if(this.hasBlue) {
			this.blue.changeValue();
			blue = true;
		}
		//Getting minimum timeStep
		var minTimeStep = 10;
		//Set an interval
		var that = this; 
		var redDancer = this.red;
		var greenDancer = this.green;
		var blueDancer = this.blue;
		var redValue = 0, greenValue = 0, blueValue = 0;
		var interval = setInterval(function() {
			//Getting values from Colors objects

			if(red){
				redValue = redDancer.getValue()
			}
			if(green) {
				greenValue = greenDancer.getValue();
			}
			if(blue){
				blueValue = blueDancer.getValue();
			}
			//Setting the element background color
			document[that.element]
				.style
				.backgroundColor = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
		}, minTimeStep); 
			 
			 
		//A time out function with maximum duration
	}

	Coda.prototype.setColors = function() {
		if(this.hasRed){
			this.red = new ColorDancer('red', this.redOpt);
		}
		if(this.hasGreen){
			this.green = new ColorDancer('green', this.greenOpt);
		}
		if(this.hasBlue){
			this.blue = new ColorDancer('blue', this.blueOpt);
		}
	}
	// Stop dancing immediately
	Coda.prototype.stop = function() {

	}


	//this is object for three colors - RGB -
	var ColorDancer = function(name, opt) {

		// options for Color object

		//duration in ms for dancing
		this.duration = opt.duration || 3000;

		//The range of for dancing;
		this.colorRange = opt.colorRange || [0,255];

		//The step that a color(R,G,B) chages in that range
		this.colorStep = opt.colorStep || 1;
		 
		//Time step that a color(R,G,B) changes in that duration
		this.timeStep = opt.timeStep || 30;

		// Defines that the changing action will step down after getting to its Maximum value
		this.backward = opt.backward || true;

		this.value = 0;

		this.name = name;

	}

	/* Color methods */
	//changes the color value by setTimeout and setInterval functions 
	ColorDancer.prototype.changeValue = function() {

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
	ColorDancer.prototype.getValue = function () {
		return this.value;
	}
	
	//This method stop dancing of selected element
	ColorDancer.prototype.stop = function() {
		
	}
	
	//Three color set (r,g,b) objects that every color 

	window.coda = function(element, options) {
		var co = new Coda(element, options);
		co.arrangeOptions();
		co.setColors();
		return co;

	};
}();