const gameBoard = new Map();

const knightMoves = [
  [2, 1],
  [1, 2],
  [-2, 1],
  [-1, 2],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
];

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    gameBoard.set([i, j], []);
  }
}

const iterator = gameBoard.keys();

for (let key of iterator) {
  let i = key[0];
  let j = key[1];

  const value = gameBoard.get(key);

  knightMoves.forEach((move) => {
    const x = move[0];
    const y = move[1];

    const finalValue = [i + x, j + y];

    value.push(finalValue);
  });
}

function isCorner(i, j) {
  if (
    (i === 0 && j === 0) ||
    (i === 0 && j === 7) ||
    (i === 7 && j === 0) ||
    (i === 7 && j === 7)
  ) {
    return true;
  } else {
    return false;
  }
}

function cleanMoves() {
  const iterator = gameBoard.keys();

  for (let key of iterator) {
    let values = gameBoard.get(key);

    values.forEach((value, i) => {
      let firstValue = value[0];
      let secondValue = value[1];

      if (firstValue < 0 || secondValue < 0) {
        values.splice(i, 1);
      }

      if (firstValue > 7 || secondValue > 7) {
        values.splice(i, 1);
      }
    });
  }
}

cleanMoves();
