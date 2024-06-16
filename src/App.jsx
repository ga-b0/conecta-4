import { useState, useEffect } from "react"
import { WINNER_COMBOS, TURNS, CELLS_OF_BOARD } from "./constanst"
import confetti from 'canvas-confetti'
import { Cell } from "./components/Cell"
import { Column } from "./components/Column"
import { Winner } from "./components/Winner"


function App(){

  const [board, setBoard] = useState(Array(16).fill(null));
  const [turn, setTurn] = useState(TURNS.X); 
  const [winner, setWinner] = useState(null)

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null);
  };

  const checkWinner = (boardToCheck) => {
    for(const combo of WINNER_COMBOS){
      const [a, b, c, d] = combo
      if(boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c] && boardToCheck[a] === boardToCheck[d]){
        return boardToCheck[a]
      }
    }
    return null
  }

  const resetGame = () => {
    setBoard(Array(16).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const handleCell = (index) => {
    let celda = 0;
    const newBoard = [...board]
    for(const cell of CELLS_OF_BOARD){
      if(cell.includes(index) && celda < 1){
        celda = cell[cell.length - 1]
        if(board[celda] === null){
          newBoard[celda] = turn
          setBoard(newBoard)
          const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
          setTurn(newTurn)
        }
        else if(board[celda - 4] === null) {
          newBoard[celda - 4] = turn
          setBoard(newBoard)

          const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
          setTurn(newTurn)
        }
        else if(board[celda - 8] === null) {
          newBoard[celda - 8] = turn
          setBoard(newBoard)

          const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
          setTurn(newTurn)
        }
        else if(board[celda - 12] === null) {
          newBoard[celda - 12] = turn
          setBoard(newBoard)

          const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
          setTurn(newTurn)
        }
      }
      const newWinner = checkWinner(newBoard)
      if(newWinner){
        confetti()
        setWinner(newWinner)
      } else if(checkEndGame(newBoard)){
        setWinner(false)
      }
    }
  }

  return (
    <main className="main">
      <h1>Conecta 4</h1>
      <button className="button" onClick={resetGame}>Reiniciar el juego</button>
      <section className="board">
        {board.map((element, index) => {
          return(
            <Column key={index} index={index} handleCell={handleCell} isSelected={element}></Column>
          )
        })}
      </section>
      <section className="turn">
          <Cell isSelected={turn === TURNS.X} turn={turn}>{TURNS.X}</Cell>
          <Cell isSelected={turn === TURNS.O} turn={turn}>{TURNS.O}</Cell>
        </section>
        <Winner resetGame={resetGame} winner={winner}></Winner>
    </main>
  )
}

export default App