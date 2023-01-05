import React, { useState } from "react";
import Board3X3 from "../Board3X3";
import Board4X4 from "../Board4X4";
import Board5X5 from "../Board5X5";
import { Container, Header, Options, Option, Board } from "./styles";

const Game = () => {
  const [board, setBoard] = useState(3);
  return (
    <Container>
      <Header>Tic-Tac-Toe</Header>
      <Options>
        <Option onClick={() => setBoard(3)} className={board === 3 ? 'active': ''}>3X3</Option>
        <Option onClick={() => setBoard(4)} className={board === 4 ? 'active': ''}>4X4</Option>
        <Option onClick={() => setBoard(5)} className={board === 5 ? 'active': ''}>5X5</Option>
      </Options>
      <Board>
        {board === 3 ? <Board3X3 /> : board === 4 ? <Board4X4 /> : <Board5X5 />}
      </Board>
    </Container>
  );
};

export default Game;
