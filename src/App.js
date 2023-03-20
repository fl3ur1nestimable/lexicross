import React, { useState } from 'react';
import input from './input.json';
import './App.css';
import Cell from './Cell';

function grid(table, userInput, setUserInput){
  var grid = [];
  for(var i = 0; i < table.length; i++){
    grid.push([]);
    for(var j = 0; j < table[i].length; j++){
      if(table[i][j] === "-"){
        grid[i].push(<Cell 
                      isBlack="1" 
                      value={userInput[i][j]}
                      onChange={(e) => {
                        var newInput = [...userInput];
                        console.log("newInput before update: ", newInput);
                        console.log("i: ", i);
                        console.log("j: ", j);
                        newInput[i][j] = e.target.value;
                        setUserInput(newInput);
                      }}/>);
      }else{
        grid[i].push(<Cell 
                      isBlack="0" 
                      value={userInput[i][j]}
                      onChange={(e) => {
                        var newInput = [...userInput];
                        console.log("newInput before update: ", newInput);
                        console.log("i: ", i);
                        console.log("j: ", j);
                        newInput[i][j] = e.target.value;
                        setUserInput(newInput);
                      }}/>);
      }
    }
  }

  const checkAnswer = () => {
    console.log("Checking answer");
  };

  return(
    <>
      <table>
        <tbody>
          {grid.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={checkAnswer}>Check!</button>
    </>

  )

}

function App() {
  var clg = require("crossword-layout-generator");
  var layout = clg.generateLayout(input);
  var table = layout.table;
  const [userInput, setUserInput] = useState(Array(table.length).fill("").map(() => Array(table[0].length).fill("")));
  console.log("userInput: ", userInput);
  return(
    <div className="App">
      {grid(table, userInput, setUserInput)}
    </div>
  )
}

export default App;
