import { useState } from "react";

export default function Board() {
  const [square, setSquare] = useState< null[] | string[] >(Array(9).fill(null));

  function handleClick(){
    const nextSquares = square.slice();
    nextSquares[0] = "X";
    setSquare(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={square[0]} onSquareClick={handleClick}/>
        <Square value={square[1]}/>
        <Square value={square[2]}/>
      </div>
      <div className="board-row">
        <Square value={square[3]}/>
        <Square value={square[4]}/>
        <Square value={square[5]}/>
      </div>
      <div className="board-row">
        <Square value={square[6]}/>
        <Square value={square[7]}/>
        <Square value={square[8]}/>
      </div>
    </>
  );
}

interface MyButtonProps {
  value : null | string,
  onSquareClick : string
}

function Square({ value, onSquareClick } : MyButtonProps){

  return (
    <button className="square" onClick={onSquareClick}>{value}</button>
  )
}