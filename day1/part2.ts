const decode = new TextDecoder("utf-8");
const file = Deno.readFileSync("input.txt");
const data = decode.decode(file);

const arrayOfElves = data.split("\n\n").map((elf) => {
  const calories = elf.split("\n").reduce((prev, curr) => {
    return prev + Number(curr);
  }, 0);
  return calories;
});

const sortedElves = arrayOfElves.sort((a, b) => b - a);
const sumOfTopThree = sortedElves.slice(0, 3).reduce((prev, curr) => {
  return prev + curr;
}, 0);

console.log(sumOfTopThree);
// 198551
