const data = await Deno.readTextFile("input.txt");
const options = {
  rock: 1,
  paper: 2,
  scissors: 3,
};
const outcomeScore = {
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

// X = lose
// Y = draw
// Z = win

data.split("\n").forEach((row) => {
  const [opponent, outcome] = row.split(" ") as RowType;
  const opponentChoice = opponentShape[opponent] as Shape;

  switch (outcome) {
    // X = lose
    case "X": {
      score += outcomeScore.lose;
      const index = Object.values(options).indexOf(options[opponentChoice]);
      const nextIndex = index === 0 ? 2 : index - 1;
      const nextShape = Object.keys(options)[nextIndex] as Shape;
      score += options[nextShape];
      break;
    }
    // Y = draw
    case "Y": {
      score += outcomeScore.draw;
      score += options[opponentChoice];
      break;
    }
    // Z = win
    case "Z": {
      score += outcomeScore.win;
      const index = Object.values(options).indexOf(options[opponentChoice]);
      const nextIndex = index === 2 ? 0 : index + 1;
      const nextShape = Object.keys(options)[nextIndex] as Shape;
      score += options[nextShape];
      break;
    }
  }
});

console.log(score);
