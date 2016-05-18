const tape = require('tape');

const generateCoordsFromGrid = require('../helpers/index.js').generateCoordsFromGrid;
const generateGridFromCoords = require('../helpers/index.js').generateGridFromCoords;
const cellsToConsider = require('../helpers/index.js').cellsToConsider;
const cellsToConsiderWithState = require('../helpers/index.js').cellsToConsiderWithState;
const getNeighbours = require('../helpers/index.js').getNeighbours;
const newGeneration = require('../helpers/index.js').newGeneration;

const compareFunc = (a, b) => a.coord > b.coord ? -1 : 1

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

tape('cells to consider', t => {
  const input = ['1,1'];
  const actual = cellsToConsider(input);
  const expected = [
    '0,0', '0,1', '0,2',
    '1,0', '1,1', '1,2',
    '2,0', '2,1', '2,2'
  ];
  t.deepEqual(actual.sort(), expected.sort());
  t.end();
});

tape('cells to consider with state', t => {
  const input = ['1,1'];
  const actual = cellsToConsiderWithState(input);
  const expected = [
    {coord: '0,0', state: 0}, {coord: '0,1', state: 0}, {coord: '0,2', state: 0},
    {coord: '1,0', state: 0}, {coord: '1,1', state: 1}, {coord: '1,2', state: 0},
    {coord: '2,0', state: 0}, {coord: '2,1', state: 0}, {coord: '2,2', state: 0}
  ];
  t.deepEqual(actual.sort(compareFunc), expected.sort(compareFunc));
  t.end();
});

tape('get neighbours', t => {
  const input = ['1,1'];
  const actual = getNeighbours(input);
  const expected = [
    {coord: '0,0', state: 0, neighbours: 1}, {coord: '0,1', state: 0, neighbours: 1}, {coord: '0,2', state: 0, neighbours: 1},
    {coord: '1,0', state: 0, neighbours: 1}, {coord: '1,1', state: 1, neighbours: 0}, {coord: '1,2', state: 0, neighbours: 1},
    {coord: '2,0', state: 0, neighbours: 1}, {coord: '2,1', state: 0, neighbours: 1}, {coord: '2,2', state: 0, neighbours: 1}
  ];
  t.deepEqual(actual.sort(compareFunc), expected.sort(compareFunc));
  t.end();
});

tape('new generation', t => {
  const input1 = ['1,1'];
  const actual1 = newGeneration(input1);
  const expected1 = [];
  t.deepEqual(actual1, expected1);

  const input2 = ['1,0', '1,1', '1,2'];
  const actual2 = newGeneration(input2);
  const expected2 = ['0,1', '1,1', '2,1'];
  t.deepEqual(actual2, expected2);
  t.end();
});

