console.log("Hello World");

import { sample, add } from "./utils";

console.log(sample([12, 3, 4]));
console.log(add(1, 2));

// Importing Types - Sharing Types netween files
// Made specifically for TS to import types
import type { Person } from "./types.js";
// OR
// import { type Person } from "./types.js";
