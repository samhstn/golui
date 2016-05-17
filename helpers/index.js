const generateCoordsFromGrid = grid => {
  const mapLiveCellsToCoordinates = grid => {
    return grid.map((row, ri) => {
      return row.map((cell, ci) => {
          return cell ? ci + ',' + (row.length - 1 - ri) : 0
        });
    });
  }
  const liveCellCoordinates = grid => {
  return grid.reduce((prev, curr) => {
      return prev.concat(curr.filter(el => el));
    }, []);
  }
  return liveCellCoordinates(mapLiveCellsToCoordinates(grid))
}

const generateGridFromCoords = (arr, size) => {
  var row = [];
  var grid = [];
  while(row.length < size) {
    row.push(0);
  }
  while(grid.length < size) {
    grid.push(row);
  }
  return grid.map((row, ri) => {
    return row.map((cell, ci) => {
      return arr.indexOf(ci + ',' + (size - 1 - ri)) > -1 ? 1 : 0
    });
  });
}

module.exports = {
  generateCoordsFromGrid,
  generateGridFromCoords
}
