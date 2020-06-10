import React from "react"
import './App.css';

class TicTacToe extends React.Component {
    
    constructor(){
        super()
        this.state = {
            cells: Array(9).fill(null),
            turn: "X",
            winnerIs: null
        }    
    }

    getWinner = () => {
       if(this.state.cells[0] === this.state.cells[1] && this.state.cells[1] === this.state.cells[2]){
            return this.state.cells[0]
       }else if(this.state.cells[3] === this.state.cells[4] && this.state.cells[4] === this.state.cells[5]){
            return this.state.cells[3]
       }else if(this.state.cells[6] === this.state.cells[7] && this.state.cells[7] === this.state.cells[8]){
            return this.state.cells[6]
       }else if(this.state.cells[0] === this.state.cells[3] && this.state.cells[3] === this.state.cells[6]){
            return this.state.cells[0]
       }else if(this.state.cells[1] === this.state.cells[4] && this.state.cells[4] === this.state.cells[7]){
            return this.state.cells[1]
       }else if(this.state.cells[2] === this.state.cells[5] && this.state.cells[5] === this.state.cells[8]){
            return this.state.cells[2]
       }else if(this.state.cells[0] === this.state.cells[4] && this.state.cells[4] === this.state.cells[8]){
            return this.state.cells[0]
       }else if(this.state.cells[2] === this.state.cells[4] && this.state.cells[4] === this.state.cells[6]){
            return this.state.cells[2]
       }else {
           return null
       }
    }

    checkWinner = () => {
        let winner = this.getWinner();
        this.setState({
            winnerIs: winner
        })
    }

     changeCells = (e) => {
        let cellIndex = e.target.dataset.cellIndex
        let prevState = this.state.cells
        let nextTurn = ""
        if(prevState[cellIndex] === null) {
            prevState[cellIndex] = this.state.turn
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
            cells: Array(9).fill(null),
            turn: "X",
            winnerIs: null
        })
    }

    checkForTie(){
        let cellsFull = 0
        this.state.cells.forEach(cell => {cell !== null && cellsFull++})
        if(cellsFull === 9 && this.state.winnerIs === null) {
            this.setState({
                winnerIs: "Tie"
            })
        } 
    }
    
    render(){
        let message = ""
        if(this.state.winnerIs === "X" || this.state.winnerIs === "O"){
            this.setState({turn: ""})
            message = this.state.winnerIs + " is a winner!"
        }else if(this.state.winnerIs === "Tie"){
            message = "Game is Tie!"
        } else {
            message = ""
        }
        
        return(
            <section>
                <h1 className="game--title">Tic Tac Toe</h1>
                <div className="game--container">
                    <div data-cell-index="0" class="cell" onClick={this.changeCells}>{this.state.cells[0]}</div>
                    <div data-cell-index="1" class="cell" onClick={this.changeCells}>{this.state.cells[1]}</div>
                    <div data-cell-index="2" class="cell" onClick={this.changeCells}>{this.state.cells[2]}</div>
                    <div data-cell-index="3" class="cell" onClick={this.changeCells}>{this.state.cells[3]}</div>
                    <div data-cell-index="4" class="cell" onClick={this.changeCells}>{this.state.cells[4]}</div>
                    <div data-cell-index="5" class="cell" onClick={this.changeCells}>{this.state.cells[5]}</div>
                    <div data-cell-index="6" class="cell" onClick={this.changeCells}>{this.state.cells[6]}</div>
                    <div data-cell-index="7" class="cell" onClick={this.changeCells}>{this.state.cells[7]}</div>
                    <div data-cell-index="8" class="cell" onClick={this.changeCells}>{this.state.cells[8]}</div>
                </div>
                <h2 className="game--status">{message}</h2>
                <button className="game--restart" onClick={this.clearState}>Restart Game</button>
            </section>
        )
    }
    
}

export default TicTacToe