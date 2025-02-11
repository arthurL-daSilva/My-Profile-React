import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    font-family: "Jura",serif;
    color: #fff;
    background-color: rgb(0, 0, 0, 1);
`

export const Tranjetoria = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
    align-items: center;
    img{
        width: 400px;
        height: 300px;
    }

    div p{
        font-size: 10px;
    }
`

export const General_text = styled.section`
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

export const Linguagem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
    align-items: center;
`