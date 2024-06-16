import { useState, useEffect } from "react"
import { WINNER_COMBOS, TURNS, CELLS_OF_BOARD } from "./constanst"

const Column = ({children, index, handleCell, isSelected}) => {

  const className = `square ${isSelected === "X" ? "selected-player" : "selected-playerTwo"}`

  return(
    <div onClick={() => {handleCell(index)}} className={isSelected === null ? "square" : className}>{children}</div>
  )
}

const Cell = ({children, isSelected}) => {
  const className = `cell ${isSelected ? 'is-selected' : ''}`
  return(
      <div className={className}>{children === "X" ? "Player 1" : "Player 2"}</div>
  )
}


function App(){

  const [board, setBoard] = useState(Array(16).fill(null));
  const [turn, setTurn] = useState(TURNS.X); 


  useEffect(() => {
    console.log(board)
  }, [board])

  const checkWinner = () => {

  }

  const resetGame = () => {
    setBoard(Array(16).fill(null))
    setTurn(TURNS.X)
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
          <Cell isSelected={turn === TURNS.X}>{TURNS.X}</Cell>
          <Cell isSelected={turn === TURNS.O}>{TURNS.O}</Cell>
        </section>
    </main>
  )
}

export default App