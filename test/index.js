const tape = require('tape');

const generateCoordsFromGrid = require('../helpers/index.js').generateCoordsFromGrid;
const generateGridFromCoords = require('../helpers/index.js').generateGridFromCoords;
const gameoflife = require('../helpers/index.js').gameoflife;

tape('generateCoordsFromGrid', t => {
  const input = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  const actual = generateCoordsFromGrid(input);
  const expected = ['1,1', '3,1'];
  t.deepEqual(actual, expected);
  t.end();
});

tape('generateGridFromCoords', t => {
  const input = ['1,1', '3,1'];
  const actual = generateGridFromCoords(input, 9);
  const expected = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  t.deepEqual(actual, expected);
  t.end();
});



// tape('gameoflife', t => {
//   const input = ['0,1', '1,1', '2,1'];
//   const actual = gameoflife(input);
//   const expected = ['1,0', '1,1', '1,2'];
//   t.deepEqual(actual, expected);
//   t.end();
// });

