// PART ONE--------------------------------------------------
console.log("Part One --------------------------------------")

// adventurer
const adventurer = {
	name: "Robin",
	health: 10,
	inventory: ["sword", "potion", "artifact"],
	companion: {
		name: "Leo",
		type: "Cat",
		companion: {
			name: "Frank",
			type: "Flea", 
			inventory: ["hat", "sunglasses"]
		}
	},
	roll (mod = 0) {
		const result = Math.floor(Math.random() * 20) + 1 + mod;
		console.log(`${this.name} rolled a ${result}.`)
	}
}

// log each item in Robin's inventory
adventurer.inventory.forEach(listInventory);
function listInventory(item) {
	console.log("Robin's inventory includes: " + item);
}

// roll dice
adventurer.roll()

// PART TWO--------------------------------------------------
console.log("Part Two --------------------------------------")

// create Character class
class Character {
	constructor(name) {
		this.name = name;
		this.health = 100;
		this.inventory = [];
	}
	roll (mod = 0) {
		const result = Math.floor(Math.random() * 20) + 1 + mod;
		console.log(`${this.name} rolled a ${result}.`)
		return result;
	}
	static MAX_HEALTH = 100;		
}

// // re-create Robin using Character class
// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// // create myself and Shorty as adventurers
// const jaki = new Character("Jaki");
// jaki.inventory = ["knife", "mace", "potions", "crystals", "journal", "laptop", "paints"];
// jaki.companion = new Character("Shorty the Third");
// jaki.companion.type = "Long-haired Syrian Hamster";
// jaki.companion.inventory = ["sunflower seed", "bowl"];

// jaki.roll();
// jaki.companion.roll();
// robin.roll();
// robin.companion.roll();
// robin.companion.companion.roll();


// PART THREE--------------------------------------------------
console.log("Part Three --------------------------------------")

class Adventurer extends Character {
	constructor (name, role, inventory) {
		super(name);
		// give adventures a specialized role
		this.role = role;
		if (!Adventurer.ROLES.includes(role)) {
			throw new Error(`Please select one of the following roles: ${Adventurer.ROLES.join(", ")}`);
		}
		// start every adventurer off with a sleeping bag and money
		this.inventory.push("bedroll", "50 gold coins");
	}
	// give adventurers the ability to scout 
	scout() {
		console.log(`${this.name} is scouting ahead...`);
		super.roll();
	}
	static ROLES = ["Fighter", "Healer", "Wizard", "Warrior", "Musician"];
	// give adventurers the ability to duel
	duel(opponent) {
		console.log(`${this.name} is dueling ${opponent.name}!`);
		while (this.health > 50 && opponent.health > 50) {
			const rollA = this.roll();
			const rollB = opponent.roll();
			if (rollA < rollB) {
				this.health -= 1;
				console.log(`${opponent.name} has won this round! ${this.name} has lost a health point.`);
			} else if (rollA > rollB) {
				opponent.health -= 1;
				console.log(`${this.name} has won this round! ${opponent.name} has lost a health point.`)
			} else {
				console.log("It's a tie! No one loses health.");
			}
			if (this.health > opponent.health) {
				console.log(`${this.name} wins the duel!`);
			} else if (this.health < opponent.health) {
				console.log(`${opponent.name} wins the duel!`);
			} else {
				console.log("It's a tie!")
			}
		}
	}
};

// testing extended character class
//console.log(robin.inventory);

// create companion class
class Companion extends Character {
	constructor(name) {
		super(name);
		this.inventory = [];
	}
	roll (mod = 0) {
		const result = Math.floor(Math.random() * 20) + 1 + mod;
		console.log(`${this.name} rolled a ${result}.`)
	}
	scout () {
		console.log(`${this.name} is scouting ahead...`);
		super.roll();
	}
}

// change declaration of Robin and companions to use the new Adventurer and Companion classes
const robin = new Adventurer("Robin", "Warrior");
robin.inventory.push("sword", "potion", "artifact")
robin.companion = new Companion("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Companion("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

const jaki = new Adventurer("Jaki", "Wizard"); // change "Wizard" to "Witch" to test the static property for role!
jaki.inventory.push("knife", "mace", "potions", "crystals", "journal", "laptop", "paints")
jaki.companion = new Companion("Shorty the Third");
jaki.companion.type = "Long-haired Syrian Hamster";
jaki.companion.inventory = ["sunflower seed", "backpack"];

// PART FOUR--------------------------------------------------
console.log("Part Four --------------------------------------")

// I incorporatated Part 4's requirements into the code above.

console.log(robin.role);

// PART FIVE--------------------------------------------------
console.log("Part Five --------------------------------------")

// creating a factory, which is a class that generates objects according to the *factory's* instance properties

class AdventurerFactory {
	constructor (role) {
		this.role = role;
		this.adventurers = [];
	}
	generate (name) {
		const newAdventurer = new Adventurer(name, this.role);
		this.adventurers.push(newAdventurer);
		return newAdventurer;
	}
	findByIndex (index) {
		return this.adventurers[index];
	}
	findByName (name) {
		return this.adventurers.find((a) => a.name === name);
	}
}
// set up a factory for creating healers
const healers = new AdventurerFactory("Healer");

// create a healer using the factory
const janet = healers.generate("Janet");

// check it out
console.log(janet);

// create another healer using the factory
const ron = healers.generate("Ron");

// check it out
console.log(ron);

ron.duel(janet);
ron.scout();
console.log(jaki.companion)