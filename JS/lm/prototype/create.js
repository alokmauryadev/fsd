// 1. Define the prototype object. This is our "manager".
// It holds the shared methods that all characters will have.
const characterPrototype = {
  attack: function() {
    return `${this.name} attacks with power ${this.power}!`;
  },
  introduce: function() {
    return `I am ${this.name}.`;
  },
};

// 2. Create two new character objects using the prototype.
// 'warrior' and 'mage' are new, empty objects that are *linked* to characterPrototype.
const warrior = Object.create(characterPrototype);
const mage = Object.create(characterPrototype);

// 3. Add properties specific to each instance.
// These properties live directly on the 'warrior' and 'mage' objects.
warrior.name = 'Grog';
warrior.power = 15;


mage.name = 'Vex';
mage.power = 10;
mage.spell = 'Fireball'; // 'mage' has a property that 'warrior' does not.

// 4. Use the objects.
console.log(warrior.attack()); // "Grog attacks with power 15!"
console.log(mage.attack());
console.log(mage.spell);      // "Fireball"

// Continuing from the previous example:
const warriorPrototype = Object.getPrototypeOf(warrior);

console.log(warriorPrototype === characterPrototype); // true

