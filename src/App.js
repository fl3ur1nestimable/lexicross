import React from 'react';
import input from './input.json';
import './App.css';
import Grid from './Grid';

class AppClass extends React.Component{
    constructor(props){
        var clg = require("crossword-layout-generator");
        var layout = clg.generateLayout(input);
        var userI = [];
        for(var i = 0; i < layout.table.length; i++){
            userI.push([]);
            for(var j = 0; j < layout.table[i].length; j++){
                userI[i].push("");
            }
        }
        super(props);
        this.state = {
            userInput: userI,
            layout: layout,
            table: layout.table,
        };
        console.log("constructor");
        console.log("user input",this.state.userInput);

    }


    updateGrid = () => {
        console.log("updateGrid");
        var userI = [];
        for(var i = 0; i < this.state.table.length; i++){
            userI.push([]);
            for(var j = 0; j < this.state.table[i].length; j++){
                userI[i].push("");
            }
        }
        this.setState({userInput: userI});
        
    }

    checkAnswer = () => {
        console.log("Checking answer");
    }

    render(){
        return(
            <div className="all">
            <div className="App">
              <div className="Grid">
                <Grid userInput={this.state.userInput} table={this.state.table} updateGrid={this.updateGrid}/>
              </div>
              <div className="Clues">
                <h4>Clues</h4>
                <h5>Across</h5>
                { input.map((clue, i) => (
                  <div key={i}>
                    {this.state.layout.result[i].orientation === "across" ? <p>{this.state.layout.result[i].clue}.</p> : <p></p>}
                    
                </div>
                ))}
                <h5>Down</h5>
                { input.map((clue, i) => (
                  <div key={i}>
                    {this.state.layout.result[i].orientation === "down" ? <p>{this.state.layout.result[i].clue}.</p> : <p></p>}
                    </div>
                ))}
      
              </div>
            </div>
            <div className="Buttons">
              <button onClick={this.checkAnswer}>Check!</button>
            </div>
          </div>
        )
    }
}

export default AppClass;