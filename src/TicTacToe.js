import React from "react"
import './App.css';
import {calculateWinner} from './helpers'
import Cell from './Cell'

class TicTacToe extends React.Component {
    
    constructor(){
        super()
        this.state = {
            cells: new Array([null, null, null], [null, null, null], [null, null, null]),
            turn: "X",
            winnerIs: null,
            message: ""
        }    
    }

    
  
       


    checkWinner = () => {
        let winner = calculateWinner(this.state.cells);
        winner !== null && ( 
        this.setState({
            winnerIs: winner,
            turn: ""
        })) 
    }

    checkForTie(){
        let cellsFull = 0
        this.state.cells.forEach(cell => {cell !== null && cellsFull++})
        if(cellsFull === 9 && this.state.winnerIs === null) {
            this.setState({
                winnerIs: "Tie",
            })
        } 
    }
     
    
    
    
    changeCells = (i) => {
        
        let prevState = this.state.cells
        let row = i[0]
        let column = i[1]
        let nextTurn = ""
        if(prevState[row][column] === null) {
            let currentRow = prevState[row]
            currentRow[column] = this.state.turn
            nextTurn = this.state.turn === "X" ? "O" : "X"
        } else{
            nextTurn = this.state.turn
        }
        this.setState({
            cells: prevState,
            turn: nextTurn
        })

        this.checkWinner()
        this.checkForTie()
    
     
    }

    clearState = () => {
        this.setState({
            cells: new Array([null, null, null], [null, null, null], [null, null, null]),
            winnerIs: null
        })
    }

    message = () => {
        let message = this.state.message
        if(this.state.winnerIs === "X" || this.state.winnerIs === "O"){
            message = this.state.winnerIs + " is a winner!"
        }else if(this.state.winnerIs === "Tie"){
            message = "Game is Tie!"
        } else {
            message = ""
        }
    }
    
    
    render(){
        
        
        return(
            <section className="game">
                <h1 className="game__title">Tic Tac Toe</h1>
                <div className="game__container">

                    {this.state.cells.map((line, i) => line.map((cell, j) => <Cell key={i,j} index={[i,j]} 
                                changeCells={this.changeCells} 
                                value={cell}/>))}
                   
                </div>
                <h2 className="game__status">{this.state.message}</h2>
                <button className="game__restart" onClick={this.clearState}>Restart Game</button>
            </section>
        )
    }
    
}

export default TicTacToe