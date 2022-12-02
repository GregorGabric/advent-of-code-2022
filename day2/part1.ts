const data = await Deno.readTextFile("input.txt");
const options = {
  rock: 1,
  paper: 2,
  scissors: 3,
};
const outcome = {
  lose: 0,
  draw: 3,
  win: 6,
};
const opponentShape = {
  A: "rock",
  B: "paper",
  C: "scissors",
};
const playerShape = {
  X: "rock",
  Y: "paper",
  Z: "scissors",
};

let score = 0;

type OpponentShapeKeys = keyof typeof opponentShape;
type PlayerShapeKeys = keyof typeof playerShape;
type RowType = [OpponentShapeKeys, PlayerShapeKeys];
type Shape = keyof typeof options;

data.split("\n").forEach((row) => {
  const [opponent, player] = row.split(" ") as RowType;
  const opponentChoice = opponentShape[opponent] as Shape;
  const playerChoice = playerShape[player] as Shape;
  const result = options[opponentChoice] - options[playerChoice];

  if (result === 0) {
    score += outcome.draw;
  } else if (result === 1 || result === -2) {
    score += outcome.lose;
  } else {
    score += outcome.win;
  }

  score += options[playerChoice];
});

console.log(score);
// 12156
