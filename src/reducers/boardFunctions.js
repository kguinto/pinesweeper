const createBlankBoard = (rows, columns) =>
  new Array(rows).fill(null).map(row =>
    new Array(columns).fill(null).map(cell => ({
      value: 0,
      visible: false,
      flag: false,
    }))
  );

const random = max => Math.floor(Math.random() * max);

const placeMines = (state, mineCount) => {
  const rows = state.length;
  const columns = state.length > 0 ? state[0].length : 0;
  const mines = [];

  while (mines.length < mineCount) {
    let x = random(rows);
    let y = random(columns);
    let cell = state[x][y];

    if (!cell.value) {
      cell.value = 'M';
      mines.push({ x, y });
    }
  }

  return { state, mines };
};

const updateNumbers = (state, mines) =>
  mines.reduce((state, mine) => {
    [mine.x - 1, mine.x, mine.x + 1].forEach(x => {
      [mine.y - 1, mine.y, mine.y + 1].forEach(y => {
        if (state[x] && state[x][y] && state[x][y].value !== 'M') {
          state[x][y].value += 1;
        }
      });
    });

    return state;
  }, state);

const revealCell = (state, x, y) => {
  state[x][y].visible = true;

  [x - 1, x, x + 1].forEach(adjX => {
    [y - 1, y, y + 1].forEach(adjY => {
      if (
        state[adjX] &&
        state[adjX][adjY] &&
        state[x][y].value === 0 &&
        !state[adjX][adjY].visible
      ) {
        revealCell(state, adjX, adjY);
      }
    });
  });

  return state;
};

const flagCell = (state, x, y) => {
  if (!state[x][y].visible) {
    state[x][y].flag = true;
  }

  return state;
};

export { createBlankBoard, placeMines, updateNumbers, revealCell, flagCell };
