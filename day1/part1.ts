const decode = new TextDecoder("utf-8");
const file = Deno.readFileSync("input.txt");
const data = decode.decode(file);
let max = 0;
data.split("\n\n").map((elf) => {
  const calories = elf.split("\n").reduce((prev, curr) => {
    return prev + Number(curr);
  }, 0);

  if (calories > max) max = calories;
});

console.log(max);
// 66719
