import React from 'react';
import input from './input.json';
import './App.css';
import Grid from './Grid';

class AppClass extends React.Component{
    constructor(props){
        var clg = require("crossword-layout-generator");
        var layout = clg.generateLayout(input);
        console.clear();
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
            cellStates: cellStates
        };

    }


    updateGrid = () => {
        var userI = [];
        var cellStates = [];
        for(var i = 0; i < this.state.table.length; i++){
            userI.push([]);
            cellStates.push([]);
            for(var j = 0; j < this.state.table[i].length; j++){
                userI[i].push("");
                cellStates[i].push("");
            }
        }
        this.setState({userInput: userI, cellStates: cellStates});
        
    }

    checkAnswer = () => {
        var userI = this.state.userInput;
        var result = this.state.layout.result;
        var cellStates = this.state.cellStates;
        var wordsFinal = [];
        for(let i = 0; i < result.length; i++){
            var word = "";
            var x = result[i].startx-1;
            var y = result[i].starty-1;
            if(result[i].orientation === "across"){
                for(let j = 0; j < result[i].answer.length; j++){
                    word += userI[y][x+j];
                }
            }else{
                for(let j = 0; j < result[i].answer.length; j++){
                    word += userI[y+j][x];
                }
            }
            
            this.setState({cellStates: cellStates});
            word=word.toLowerCase();

            if(word !== result[i].answer){
                wordsFinal.unshift([result[i],"wrong"]);
            }
            else{
                wordsFinal.push([result[i],"correct"]);
            }
        }
        for(let i = 0; i < wordsFinal.length; i++){
            let x = wordsFinal[i][0].startx-1;
            let y = wordsFinal[i][0].starty-1;
            if(wordsFinal[i][1] === "wrong"){
                if(wordsFinal[i][0].orientation === "across"){
                    for(let j = 0; j < wordsFinal[i][0].answer.length; j++){
                        cellStates[y][x+j] = "wrong";
                    }
                }else{
                    for(let j = 0; j < wordsFinal[i][0].answer.length; j++){
                        cellStates[y+j][x] = "wrong";
                    }
                }
            }else{
                if(wordsFinal[i][0].orientation === "across"){
                    for(let j = 0; j < wordsFinal[i][0].answer.length; j++){
                        cellStates[y][x+j] = "correct";
                    }
                }else{
                    for(let j = 0; j < wordsFinal[i][0].answer.length; j++){
                        cellStates[y+j][x] = "correct";
                    }
                }
            }
        }
    }

    render(){
        return(
            <div className="all">
            <div className="App">
              <div className="Grid">
                <Grid userInput={this.state.userInput} table={this.state.table} updateGrid={this.updateGrid} cellStates={this.state.cellStates}/>
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