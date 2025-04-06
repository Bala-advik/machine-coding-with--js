import { useState } from "react";
import "./tictactoe.css";

const TicTacToe = () => {
  const boardTiles = Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () => " ")
  );
  const [board, setBoard] = useState(boardTiles);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [gameDrawn, setGameDrawn] = useState(false);
  const [player, setPlayer] = useState("X");

  const handleClick = async (rowIndex: number, colIndex: number) => {
    if (board[rowIndex][colIndex] === " " && !gameCompleted) {
      let copy = [...board];
      copy[rowIndex][colIndex] = player;
      setBoard(copy);
      checkWin();
    }
  };

  const handleReset = () => {
    setBoard(boardTiles);
    setGameCompleted(false);
    setGameDrawn(false);
  };

  const checkWin = () => {
    let checkComplete = false;
    const allBoxChecked = board.flat().find((item: any) => item === " ");
    if (!allBoxChecked) {
      checkComplete = true;
      setGameDrawn(true);
    } else {
      for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
        if (
          board[rowIndex][0] === player &&
          board[rowIndex][1] === player &&
          board[rowIndex][2] === player
        ) {
          checkComplete = true;
        }
      }
      for (let colIndex = 0; colIndex < board.length; colIndex++) {
        if (
          board[0][colIndex] === player &&
          board[1][colIndex] === player &&
          board[2][colIndex] === player
        ) {
          checkComplete = true;
        }
      }
      if (
        board[0][0] === player &&
        board[1][1] === player &&
        board[2][2] === player
      ) {
        checkComplete = true;
      }
      if (
        board[0][2] === player &&
        board[1][1] === player &&
        board[2][0] === player
      ) {
        checkComplete = true;
      }
    }
    if (checkComplete) {
      setGameCompleted(true);
    } else {
      if (player === "X") {
        setPlayer("O");
      } else {
        setPlayer("X");
      }
    }
  };

  return (
    <div className="board-page">
      <div className="board-container">
        {board.map((tile, rowIndex) =>
          tile.map((element: any, colIndex: number) => (
            <div
              className="tiles"
              onClick={() => !gameCompleted && handleClick(rowIndex, colIndex)}
            >
              {element}
            </div>
          ))
        )}
      </div>

      {gameCompleted ? (
        <div className="game-result">
          <p>{gameDrawn ? "Match Drawn" : `Player ${player} Wins`}</p>
          <button className="reset-button" onClick={handleReset}>
            Reset
          </button>
        </div>
      ) : (
        <div className="player-info">Player Turn - {player}</div>
      )}
    </div>
  );
};

export default TicTacToe;
