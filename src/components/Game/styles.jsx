import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: rgb(15, 22, 36);
`;

export const Header = styled.div`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.5);
    font-weight: 500;
    font-size: 65px;
    line-height: 72px;
    box-shadow: 15px 0 5px -2px #e9e3e3;
    padding 10px 0px;
    margin-bottom: 20px;
    @media screen and (max-width: 425px){
        font-size: 50px;
    }
`;

export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
    color: rgba(255, 255, 255, 0.5);
    .active {
        background-color: #abafb3;
        color: white;
      }
`;

export const Option = styled.div`
    font-size: 20px;
    line-height: 25px;
    border: 1px solid grey;
    padding: 5px 10px;
    border-radius: 10px;
    cursor: pointer;
`;

export const Board = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 65vh;
`;