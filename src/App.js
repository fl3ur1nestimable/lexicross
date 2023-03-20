import React from 'react';
import input from './input.json';
import './App.css';
import Grid from './Grid';

class AppClass extends React.Component{
    constructor(props){
        var clg = require("crossword-layout-generator");
        var layout = clg.generateLayout(input);
        var userI = [];
        var cellStates = [];
        for(var i = 0; i < layout.table.length; i++){
            userI.push([]);
            cellStates.push([]);
            for(var j = 0; j < layout.table[i].length; j++){
                userI[i].push("");
                cellStates[i].push("");
            }
        }
        super(props);
        this.state = {
            userInput: userI,
            layout: layout,
            table: layout.table,
        };

    }


    updateGrid = () => {
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
        var userI = this.state.userInput;
        var result = this.state.layout.result;
        for(var i = 0; i < result.length; i++){
            var word = "";
            var x = result[i].startx-1;
            var y = result[i].starty-1;
            if(result[i].orientation === "across"){
                for(var j = 0; j < result[i].answer.length; j++){
                    word += userI[y][x+j];
                }
            }else{
                for(var j = 0; j < result[i].answer.length; j++){
                    word += userI[y+j][x];
                }
            }
            word=word.toLowerCase();
            if(word !== result[i].answer){
                console.log("wrong for " + result[i].answer);
            }
            else{
                console.log("correct for " + result[i].answer);
            }
        }

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
                <h5>Across(A)</h5>
                { input.map((clue, i) => (
                  <div key={i}>
                    {this.state.layout.result[i].orientation === "across" ? 
                    <p><strong>({this.state.layout.result[i].startx},{this.state.layout.result[i].starty})</strong> {this.state.layout.result[i].clue}.</p> : <p></p>}
                    
                </div>
                ))}
                <h5>Down(D)</h5>
                { input.map((clue, i) => (
                  <div key={i}>
                    {this.state.layout.result[i].orientation === "down" ?
                    <p><strong>({this.state.layout.result[i].startx},{this.state.layout.result[i].starty})</strong> {this.state.layout.result[i].clue}.</p> : <p></p>}
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