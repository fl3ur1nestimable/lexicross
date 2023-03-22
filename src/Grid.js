import React from "react";
import "./Grid.css";


class Grid extends React.Component{
    componentDidMount(){
        this.props.updateGrid();
        
    }

    handleChange = (i, j) => (event) => {
        const value = event.target.value;
        const newUserInput = [...this.props.userInput];
        newUserInput[i][j] = value.toUpperCase();
        this.setState({ userInput: newUserInput });
    }

    render = () => {
        var grid = [];
        var row = this.props.table.length;
        var col = this.props.table[0].length;
        
        // Add row and column headers to grid
        for(var i = 0; i < row+1; i++){
            grid.push([]);
            for(var j = 0; j < col+1; j++){
                if (i === 0 && j === 0) {
                    grid[i].push(<th key={j}>A/D</th>);
                } else if (i === 0) {
                    grid[i].push(<th key={j}>{j}</th>);
                } else if (j === 0) {
                    grid[i].push(<th key={j}>{i}</th>);
                } else if(this.props.table[i-1][j-1] === "-"){
                    grid[i].push(<td key={j}><input type="text" maxLength={1} className="cell_black_" value={this.props.userInput[i-1][j-1]} onChange={this.handleChange(i-1,j-1)}/></td>);
                }else{
                    if(this.props.cellStates[i-1][j-1] === "correct"){
                        grid[i].push(<td key={j}><input type="text" maxLength={1} className="cell_white_correct" value={this.props.userInput[i-1][j-1]} onChange={this.handleChange(i-1,j-1)} readOnly /></td>);
                    }
                    else if(this.props.cellStates[i-1][j-1] === "wrong"){
                        grid[i].push(<td key={j}><input type="text" maxLength={1} className="cell_white_wrong" value={this.props.userInput[i-1][j-1]} onChange={this.handleChange(i-1,j-1)}/></td>);
                    }
                    else{
                        grid[i].push(<td key={j}><input type="text" maxLength={1} className="cell_white_" value={this.props.userInput[i-1][j-1]} onChange={this.handleChange(i-1,j-1)}/></td>);
                    }
                }
            }
        }

        return(
            <>
                <table>
                    <tbody>
                        {grid.map((row, i) => (
                            <tr key={i}>
                                {row}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )
    }
}

export default Grid;