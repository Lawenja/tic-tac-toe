import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [values, setValues] = useState(Array(9).fill(null));
  const [isNextPlayer, setIsNextPlayer] = useState(true);

  const handleValues = (data) => {
    setValues(data);
    setIsNextPlayer(!isNextPlayer);
  };
  return (
    <div className="game">
      <Board
        values={values}
        onClick={handleValues}
        isNextPlayer={isNextPlayer}
      />
    </div>
  );
};

export default Game;
