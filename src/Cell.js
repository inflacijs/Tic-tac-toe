import React from 'react'
import './App.css';
const Cell = (props) => {
    const {index, changeCells, value} = props
    return(
        
    <div className="game__cell" onClick={() => changeCells(index)}>{value}</div>
    
    )
}
export default Cell