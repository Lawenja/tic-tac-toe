import React from "react";
import Box from "./Box";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Board = ({ onClick, values, isNextPlayer }) => {
  //

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };
  const winner = calculateWinner(values);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isNextPlayer ? "X" : "O");
  }

  const handleBoxClick = (i) => {
    if (calculateWinner(values) || values[i]) {
      return;
    }
    const nextBox = values.slice();
    if (isNextPlayer) {
      nextBox[i] = "X";
    } else {
      nextBox[i] = "O";
    }
    onClick(nextBox);
    };
    
  return (
    <>
      <h1>{status}</h1>
      <div className="board">
        {arr.map((val, i) => (
          <div key={val}>
            <Box value={values[i]} handleClick={() => handleBoxClick(i)} />
          </div>
        ))}
      </div>

    </>
  );
};

export default Board;
