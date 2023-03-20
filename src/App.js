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
    </>

  )

}

function App() {
  var clg = require("crossword-layout-generator");
  var layout = clg.generateLayout(input);
  var table = layout.table;

  const checkAnswer = () => {
    console.log("Checking answer");
  };

  const [userInput, setUserInput] = useState(Array(table.length).fill("").map(() => Array(table[0].length).fill("")));
  console.log("userInput: ", userInput);
  console.log("layout: ", layout.result);
  return(
    <div className="App">
      <div className="Grid">
        {grid(table, userInput, setUserInput)}
      </div>
      <div className="Clues">
        <h4>Clues</h4>
        <h5>Across</h5>
        { input.map((clue, i) => (
          <div key={i}>
            {layout.result[i].orientation === "across" ? <p>{layout.result[i].clue}.</p> : <p></p>}
            
        </div>
        ))}
        <h5>Down</h5>
        { input.map((clue, i) => (
          <div key={i}>
            {layout.result[i].orientation === "down" ? <p>{layout.result[i].clue}.</p> : <p></p>}
            </div>
        ))}

      </div>
      <div className="Buttons">
        <button onClick={checkAnswer}>Check!</button>
      </div>
    </div>
  )
}

export default App;
