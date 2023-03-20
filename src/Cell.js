import React from "react";
import "./Cell.css";

function Cell(props) {
    const isBlack = props.isBlack;
    const onChange = props.onChange;
    var classN = "cell_" + (isBlack==="1" ? "black" : "white");
    return (
        <input type="text" maxLength={1} className={classN} onChange={onChange}/>
    )
}

export default Cell;