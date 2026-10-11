import { Cat } from './nul_un';

const cat = new Cat();
console.log(`Cat has ${cat.numberOfLegs} legs and is ${cat.color}`);

// Let's also change the color and see
cat.color = "black";
console.log(`After repainting, cat is now ${cat.color}`);