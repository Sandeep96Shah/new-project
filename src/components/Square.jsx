import React from 'react';
import { SquareDiv } from './styles';

const Square = ({ onClick, value }) => {
    return (
      <SquareDiv onClick={onClick}>
        {value}
      </SquareDiv>
    );
  }

  export default Square;