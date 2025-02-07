import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    
    font-family: "Jura",serif;
    color: #fff;
    background-color: rgb(0, 0, 0, 1);
    img{
        
    }
`

export const Trajetoria = styled.div`
    margin: 0 15px;
    width: 500px;
    border-radius: 16px;
    text-align: justify;
    P, h1{
        padding: 0 15px;
    }

    hr{
        border-color:#777777;
        width: 300px;
    }

    p{
        line-height: 1.5;
    }

    h1{
        text-align: center;
    }
`