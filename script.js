//complete this code
class Animal {
	constructor(species: string){
		this.species = species;
	}
	makeSound(){
		console.log(`The ${this.species} makes a sound`);
	}
}

class Dog extends Animal {
	constructor(species: string){
		super(species);
	}
	purr(){
		console.log('purr');
	}
}

class Cat extends Animal {
	constructor(species: string){
		super(species);
	}
	bark(){
		console.log('woof');
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
