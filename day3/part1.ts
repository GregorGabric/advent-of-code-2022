import { priorities } from "./priorities.ts";

const data = await Deno.readTextFile("input.txt");

const foundLetters: Array<string> = [];

data.split("\n").forEach((line) => {
  const middle = line.length / 2;
  const firstCompartment = [...line.substring(0, middle)];
  const secondCompartment = line.substring(middle);

  for (const letter of firstCompartment) {
    if (secondCompartment.includes(letter)) {
      foundLetters.push(letter);
      break;
    }
  }
});

const result = foundLetters.reduce((acc, letter) => {
  return acc + priorities[letter];
}, 0);

console.log(result);
// 8105
