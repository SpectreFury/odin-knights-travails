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

function cleanMoves() {
  const iterator = gameBoard.keys();

  for (let key of iterator) {
    let values = gameBoard.get(key);

    const filteredValues = values.filter(
      (value) =>
        value[0] >= 0 && value[1] >= 0 && value[0] <= 7 && value[1] <= 7
    );

    gameBoard.set(key, filteredValues);
  }
}

function hasPath(gameBoard, src, dest) {
  if (src.toString() === dest.toString()) return 0;

  const queue = [[src, 0, []]];

  while (queue.length > 0) {
    const [current, distance, pathArr] = queue.shift();

    if (current.toString() === dest.toString()) {
      pathArr.forEach((path) => {
        console.log(`[${path.toString()}]`);
      });
      return distance;
    }

    for (let keypairs of gameBoard) {
      if (current.toString() === keypairs[0].toString()) {
        for (let value of gameBoard.get(keypairs[0])) {
          queue.push([value, distance + 1, [...pathArr, value]]);
        }
      }
    }
  }

  return false;
}

cleanMoves();
