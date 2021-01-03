import styled from 'styled-components';

export const Title = styled.h3`
    color: white;
`;

export const Container = styled.div`
    text-align: center;
    position: relative;
    min-height: 100vh;
    min-width: 100vw;
    width: 100%;
    height: 100%;
    background-color: #4169E1;

`;
export const Form = styled.form`
    background-color: #120A8F;
    border-radius: 2%;
    text-align: center;
    width: 30rem;
    height: 15rem;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
`;

export const Input = styled.input`
    display: block;
    width: 18rem;
    border-radius: 5%;
    margin: 10px auto auto auto;
    padding: 5px;
    display: flexbox;

`;

export const Button = styled.button`
    margin: 2em;
`;
