import { useState } from "react";
export default function GameBoard({ onSelectSquare, board }) {
 
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li
                onClick={() => onSelectSquare(rowIndex, colIndex)}
                key={colIndex}
                disabled={playerSymbol !== null}
              >
                <button>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
