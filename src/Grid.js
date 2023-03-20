import React from "react";
import "./Grid.css";


class Grid extends React.Component{
    componentDidMount(){
        console.log("componentDidMount");
        this.props.updateGrid();
        
    }

    handleChange = (i, j) => (event) => {
        const value = event.target.value;
        const newUserInput = [...this.props.userInput];
        newUserInput[i][j] = value.toUpperCase();
        this.setState({ userInput: newUserInput });
        console.log(this.props.userInput)
    }

    render = () => {
        var grid = [];
        for(var i = 0; i < this.props.table.length; i++){
            grid.push([]);
            for(var j = 0; j < this.props.table[i].length; j++){
                if(this.props.table[i][j] === "-"){
                    grid[i].push(<input type="text" maxLength={1} className="cell_black" value={this.props.userInput[i][j]} onChange={this.handleChange(i,j)}/>);
                }else{
                    grid[i].push(<input type="text" maxLength={1} className="cell_white" value={this.props.userInput[i][j]} onChange={this.handleChange(i,j)}/>);
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
}

export default Grid;