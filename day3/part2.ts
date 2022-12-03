import { priorities } from "./priorities.ts";
const data = Deno.readTextFileSync("input.txt").split("\n");

const groups: Array<Array<string>> = [];

while (data.length > 0) {
  const group = data.splice(0, 3);
  groups.push(group);
}

const groupLetters: Array<string> = [];

groups.forEach((group) => {
  const [first, second, third] = group;

  const letters = [...first];

  for (const letter of letters) {
    if (second.includes(letter) && third.includes(letter)) {
      groupLetters.push(letter);
      break;
    }
  }
});

const result = groupLetters.reduce((acc, letter) => {
  return acc + priorities[letter];
}, 0);

console.log(result);
