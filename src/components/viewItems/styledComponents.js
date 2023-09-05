import styled from 'styled-components'

export const ViewItemContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

height: 40px;
width: 80vw;

margin-left: 40px;
color: black;

margin-top: 5px;
margin-bottom: 5px;
padding-left: 10px;
padding-right: 10px;
border-radius: 2px;
border: 2px solid black;
line-height: 1px;
`

export const Button = styled.button`
    outline: none;
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff; 
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
   
`