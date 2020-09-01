// Soal 1
/// Release 0
class Animal {
	// Code class di sini
	constructor(name, legs=4, cold_blooded=false) {
		this._name = name;
		this._legs = legs;
		this._cold_blooded = cold_blooded;
	}

	// setter dan getter
	/// get animal name property
	get name() {
		return this._name;
	}
	/// set animal name property
	set name(x) {
		this._name = x;
	}
	/// get animal legs property
	get legs() {
		return this._legs;
	}
	/// set animal legs property
	set legs(x) {
		this._legs = x;
	}
	/// get animal cold_blooded property
	get cold_blooded() {
		return this._cold_blooded;
	}
	/// set animal cold_blooded property
	set cold_blooded(x) {
		this._cold_blooded = x;
	}
}
 
var sheep = new Animal("shaun");

console.log("--- Soal 1 (Release 0) ---");
console.log(sheep.name); // "shaun"
console.log(sheep.legs); // 4
console.log(sheep.cold_blooded); // false
console.log();

/// Release 1
// Code class Ape dan class Frog di sini
class Ape extends Animal {
	constructor(name, legs=2, cold_blooded) {
		super(name, cold_blooded);
		this._legs = legs; 
	}
	yell() {
		console.log("Auooo");
	}
}

class Frog extends Animal {
	constructor(name, legs, cold_blooded) {
		super(name, legs, cold_blooded);
	}
	jump() {
		console.log("hop hop");
	}
}

console.log("--- Soal 1 (Release 1) ---");
var sungokong = new Ape("kera sakti");
sungokong.yell(); // "Auooo"
 
var kodok = new Frog("buduk");
kodok.jump(); // "hop hop"
console.log()

// Soal 2
// function Clock({ template }) {
  
// 	var timer;

// 	function render() {
// 		var date = new Date();

// 		var hours = date.getHours();
// 		if (hours < 10) hours = '0' + hours;

// 		var mins = date.getMinutes();
// 		if (mins < 10) mins = '0' + mins;

// 		var secs = date.getSeconds();
// 		if (secs < 10) secs = '0' + secs;

// 		var output = template
// 			.replace('h', hours)
// 			.replace('m', mins)
// 			.replace('s', secs);

// 		console.log(output);
// 	}

// 	this.stop = function() {
// 		clearInterval(timer);
// 	};

// 	this.start = function() {
// 		render();
// 		timer = setInterval(render, 1000);
// 	};

// }

// var clock = new Clock({template: 'h:m:s'});
// clock.start();

// Convert function Clock to class Clock
class Clock {
	// Code di sini
	constructor({ template }) {
		this._template = template;
	}
	
	render() {
		var date = new Date();

		var hours = date.getHours();
		if (hours < 10) hours = '0' + hours;

		var mins = date.getMinutes();
		if (mins < 10) mins = '0' + mins;

		var secs = date.getSeconds();
		if (secs < 10) secs = '0' + secs;

		var output = this._template.replace('h', hours).replace('m', mins).replace('s', secs);
		console.log(output);
	}

	stop() {
		clearInterval(this._timer);
	}

	start() {
		this.render();
		this._timer = setInterval(() => this.render(), 1000);
	}

}

console.log("--- Soal 2 ---");
var clock = new Clock({template: 'h:m:s'});
clock.start();