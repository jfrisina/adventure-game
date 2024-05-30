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
		console.log(`${this.name} rolled a ${result}.`)}
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
		// start every adventurer off with a sleeping bag and money
		this.inventory.push("bedroll", "50 gold coins");
	}
	// give adventurers the ability to scout 
	scout() {
		console.log(`${this.name} is scouting ahead...`);
		super.roll();
	}
}

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

const jaki = new Adventurer("Jaki", "Witch");
jaki.inventory.push("knife", "mace", "potions", "crystals", "journal", "laptop", "paints")
jaki.companion = new Companion("Shorty the Third");
jaki.companion.type = "Long-haired Syrian Hamster";
jaki.companion.inventory = ["sunflower seed", "bowl"];

// PART FOUR--------------------------------------------------
console.log("Part Four --------------------------------------")

