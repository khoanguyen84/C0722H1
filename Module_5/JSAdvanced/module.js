// import sum, * as libs from './myLibs.js';
import sum, { times, subtract } from './myLibs.js';

let numbers = [43, 5, 6, 4, 3, 23, 6];
console.log(sum(...numbers));
console.log(times(...numbers));
console.log(subtract(...numbers));