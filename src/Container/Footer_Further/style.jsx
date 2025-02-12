import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    font-family: "Jura",serif;
    color: #fff;
    background-color: rgb(0, 0, 0, 1);
`

export const General_img = styled.img`
    width: 400px;
    height: 300px;
`

export const Container_Each = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
    align-items: center;

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

export const GPU_img = styled.img`
    height: 300px;
    width: 300px;
`

export const Discord_img = styled.img`
    width: 900px;
`