import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 849px;
    font-family: "Jura",serif;
    img{
        
    }

    aside{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    aside > p{
        background-color: #1a88f0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 160px;
        height: 30px;
        border-radius: 10px 10px 10px 0;
        color: #fff;
        font-weight: 700;
        font-size: 14px;
    }

    h1{
        font-size: 40px;
        margin: 0;
        font-weight: 700;
    }

    h3{
        font-size: 22px;
        margin: 10px 0;
    }

    h6{
        font-size: 8px;
        font-style: italic;
        margin: 0;
    }
`

export const Itens = styled.ul`
    list-style-type: none;
    padding: 0;
    li{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
        img{
            width: 15px;
        }
    }
`
export const Buttons = styled.section`

    display: flex;
    gap: 20px;
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 65px;
        height: 65px;
        border-radius: 50%;
        cursor: pointer;
        background-color: transparent;
        border: 1px #fff solid;
        transition: all 0.2s linear;
    }

    a{
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }

    img{
        position: absolute;
    }

    #lk{
        width: 30px;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    #lk2{
        width: 27px;
        transition: opacity 0.3s ease-in-out;
    }

    button:hover{
        transition: all 0.3s linear;
        background-color: #fff;
    }

    button:hover #lk{
        transition: opacity 0.3s ease-in-out;
        opacity: 1;
    }

    button:hover #lk2{
        transition: opacity 0.3s ease-in-out;
        opacity: 0;
    }

`