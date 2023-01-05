import styled from "styled-components";

export const Reset = styled.button`
  padding: 5px 10px;
  color: #fff;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  background-color: rgba(255, 255, 255, 0.5);
  border-color: grey;
  margin-top: 10px;
  cursor: pointer;
`;

export const Status = styled.div`
  margin-top: 10px;
`;

export const BoardDiv = styled.div`
  color: rgba(255, 255, 255, 0.5);
`;

export const SquareDiv = styled.button`
  border: 1px solid #3c6c83;
  float: left;
  font-size: 40px;
  height: 65px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 65px;
  background-color: #abafb3;
  color: white;
  &:hover{
    cursor: pointer;
  }
  @media screen and (max-width: 768px){
    height: 50px;
    width: 50px;
  }
`;

export const Row = styled.div`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`;
