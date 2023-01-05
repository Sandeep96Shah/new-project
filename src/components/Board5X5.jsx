import React from 'react';
import Square from "./Square";
import { Reset, Status, BoardDiv, Row } from './styles';

const calculateWinner = (squares) => {
    const winningPatterns = [
        [0,1,2,3,4],
        [5,6,7,8,9],
        [10,11,12,13,14],
        [15,16,17,18,19],
        [20,21,22,23,24],
        [0,5,10,15,20],
        [1,6,11,16,21],
        [2,7,12,17,22],
        [3,8,13,18,23],
        [4,9,14,19,24],
        [0,6,12,18,24],
        [4,8,12,16,20],
    ]
    
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c, d, e] = winningPatterns[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d] && squares[a] === squares[e]) {
        return squares[a];
      }
    }
    return null;
  }

const Board = () => {
    const [squares, setSquares] = React.useState(Array(9).fill(null))
    const [isX, setIsX] = React.useState(true);
  
    const handleClick = (i) => {
      if (calculateWinner(squares) || squares[i]) {
        return
      }
      
      squares[i] = isX ? 'X' : 'O'
      setSquares(squares)
      setIsX(!isX)
    }
  
    const winner = calculateWinner(squares)
    let status
    
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = 'Next player: ' + (isX ? 'X' : 'O');
    }
    
    const handleRestart = () => {
      setIsX(true)
      setSquares(Array(9).fill(null))
    }
  
    const renderSquare = (i) => {
      return <Square value={squares[i]} onClick={() => handleClick(i)} />
    }
    
    return (
      <BoardDiv>
        <Row>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
          {renderSquare(3)}
          {renderSquare(4)}
        </Row>
        <Row>
          {renderSquare(5)}
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
          {renderSquare(9)}
        </Row>
        <Row>
          {renderSquare(10)}
          {renderSquare(11)}
          {renderSquare(12)}
          {renderSquare(13)}
          {renderSquare(14)}
        </Row>
        <Row>
          {renderSquare(15)}
          {renderSquare(16)}
          {renderSquare(17)}
          {renderSquare(18)}
          {renderSquare(19)}
        </Row>
        <Row>
          {renderSquare(20)}
          {renderSquare(21)}
          {renderSquare(22)}
          {renderSquare(23)}
          {renderSquare(24)}
        </Row>
        <Status>{status}</Status>
        <Reset onClick={handleRestart}>Reset</Reset>
      </BoardDiv>
    )
  }

  export default Board;