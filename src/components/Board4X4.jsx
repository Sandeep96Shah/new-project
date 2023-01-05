import React from 'react';
import Square from "./Square";
import { Reset, Status, BoardDiv, Row } from './styles';

const calculateWinner = (squares) => {
    const winningPatterns = [
     [0,1,2,3],
     [4,5,6,7],
     [8,9,10,11],
     [12,13,14,15],
     [0,4,8,12],
     [1,5,9,13],
     [2,6,10,14],
     [3,7,11,15],
     [0,5,10,15],
    [3,6,9,12],
    ]
    
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c, d] = winningPatterns[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
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
        </Row>
        <Row>
          {renderSquare(4)}
          {renderSquare(5)}
          {renderSquare(6)}
          {renderSquare(7)}
        </Row>
        <Row>
          {renderSquare(8)}
          {renderSquare(9)}
          {renderSquare(10)}
          {renderSquare(11)}
        </Row>
        <Row>
          {renderSquare(12)}
          {renderSquare(13)}
          {renderSquare(14)}
          {renderSquare(15)}
        </Row>
        <Status>{status}</Status>
        <Reset onClick={handleRestart}>Reset</Reset>
      </BoardDiv>
    )
  }

  export default Board;