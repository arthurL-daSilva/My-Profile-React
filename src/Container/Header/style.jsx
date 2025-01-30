import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 60px;
    border-bottom: 0.4px solid #777777;
`

export const About = styled.h5`
    font-family: "Roboto Condensed", serif;
    font-weight: 700;
    font-size: 30px;
    min-width: 129px;
`

export const Itens = styled.ul`
    display: flex;
    flex-direction: row;
    font-family: "Jura", serif;
    font-weight: 400;
    list-style-type: none;
    padding: 16px 20px 0;

    li{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 118px;
    }

    a{
        text-decoration: none; 
        color: #000; 
        transition: 0.3s all;
    }

    hr{
        width: 50px;
        border: 0.8px #000 solid;
        background-color: #000;
        transition: 0.2s all linear;
        opacity: 0;
        transform: translateY(5px);
    }

    a:hover{
        font-weight: 500;
        transition: 0.4s all linear;
    }

    a:hover + hr{
        transition: 0.4s all linear;
        transform: translateY(0px);
        opacity: 1;
    }
`