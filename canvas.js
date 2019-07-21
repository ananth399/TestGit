let canvas = document.querySelector('canvas');
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');
c.fillRect(100, 100, 100, 100);
c.fillRect(400, 100, 100, 100);
c.fillRect(300, 300, 100, 100);
c.fillRect(200, 200, 100, 100);

//object factory pattern 
let peoplefactory = function(age, name, state)
{
	let temp ={};
	temp.age = age;
	temp.name  = name;
	temp.state = state;

	temp.printPerson = function () {
		console.log(this.age+","+this.name+","+this.state);
	};

   return temp;
};

let person1 = new peoplefactory(25, "Ananth", "Ap");
let person2 =  new peoplefactory(25, "Reddy", "Bennguluru");
person1.printPerson();
person2.printPerson();


//object constructor pattern 

let peoplefactorys = function(age, name, state)
{
	this.age = age;
	this.name  = name;
	this.state = state;

	this.printPerson = function () {
		console.log(this.age+","+this.name+","+this.state);
	};
};

let person3 = new peoplefactorys(21, "Bhupal", "Assam");
let person4 =  new peoplefactorys(25, "ram", "Ben");
person3.printPerson();
person4.printPerson();

// Object Prototype pattern

let peoplefactoryy = function ()
{

};

peoplefactoryy.prototype.age = 0;
peoplefactoryy.prototype.name = "no name";
peoplefactoryy.prototype.state = "no state";

peoplefactoryy.prototype.printPerson = function()
{
	console.log(this.age + "," + this.name + ", " + this.state);
}

let person5 = new peoplefactoryy();

person5.age = 26;
person5.name = "sumanth";
person5.state =  "Chenni";

person5.printPerson();
console.log("age" in person5);
console.log(person5.hasOwnProperty("name"));

//dynamic prototype pattern
let peopledynamicfactory = function(age, name, state)
{
	this.age = age;
	this.name  = name;
	this.state = state;

	if(typeof this.printPerson1 !== 'function') {
		peopledynamicfactory.prototype.printPerson1 = function()
       {
	     console.log(this.age + "," + this.name + ", " + this.state);
       };
	};
};
let person6 = new peopledynamicfactory("27", "Ramesh", "Kerala");
person6.printPerson1();
console.log("age" in person5);
console.log(person5.hasOwnProperty("name"));