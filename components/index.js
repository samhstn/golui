import React, { Component } from 'react';
import { generateCoordsFromGrid, generateGridFromCoords, newGeneration } from '../helpers/index.js';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      array: generateArr(9),
      cells: []
    }
  }

  handleCellClick(x, y) {
    this.setState(previousState => {
      const newArr = previousState.array.map((row, ri) => {
        return row.map((cell, ci) => {
          return ci === x && ri === y ? (cell + 1) % 2 : cell
        })
      })
      return {array: newArr}
    })
  }

  handleSaveClick() {
    this.setState(previousState => {
      return {cells: generateCoordsFromGrid(previousState.array)}
    })
  }

  handleStartClick() {
    const start = () => {
      this.setState(previousState => {
        return {cells: newGeneration(previousState.cells), array: generateGridFromCoords(newGeneration(previousState.cells), 9)}
      })  
    }
    setInterval(start, 500);
  }

  render() {
    return(
      <div>
        <h1>Game of Life</h1>
        {
          this.state.array.map((row, rindex) => {
            return (
              <div key={rindex} style={rowStyles}>
                {
                  row.map((cell, cindex) => {
                    const color = cell ? 'grey' : 'white'
                    return (
                      <div
                        key={rindex + ',' + cindex}
                        style={{
                          ...styles,
                          backgroundColor: color
                        }}
                        onClick={this.handleCellClick.bind(this, cindex, rindex)}
                      ></div>
                    )
                  })
                }
              </div>
            )
          })
        }
        <button onClick={this.handleSaveClick.bind(this)}>Save</button>
        <button onClick={this.handleStartClick.bind(this)}>Start</button>
      </div>
    )
  }
}

const generateArr = (size) => {
  var row = [];
  var grid = [];
  while(row.length < size) {
    row.push(0);
  }
  while(grid.length < size) {
    grid.push(row);
  }
  return grid
}

const styles = {
  height: '30px',
  width: '30px',
  border: '1px solid black',
  float: 'left'
}

const rowStyles = {
  clear: 'left'
}
