import styled from "styled-components"
import 'animate.css'

export const Fix_center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    margin-top: 80px;
    /* height: 849px; */
    height: 600px;
    font-family: "Jura",serif;
    color: #fff;
    border-radius: 24px;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    overflow: hidden;

    aside{
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        animation-duration: 1.8s;
        animation-delay: 0.6s;
        width: 400px;
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

// LEFT SIDE------------------------------------------------------------

export const Details_me = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(49, 49, 49);
    height: 600px;
    width: 600px;
    gap: 30px;
    z-index: 2;
    section{
        display: flex;
        align-items: center;
        gap: 20px;
        height: 60px;
        @keyframes logo-spin {
            from{
                transform: rotate(0deg);
            }
            to{
                transform: rotate(360deg);
            }
        }

        #React_logo{
            width: 50px;
            animation: logo-spin infinite 20s linear;
            filter: drop-shadow(0 0 6px #61dafbaa);
        }

        #Js_logo{
            width: 50px;
            border-radius: 8px;
            filter: drop-shadow(0 0 7px #fae900);
        }
        
        #Node_logo{
            width: 50px;
            filter: drop-shadow( 0 0 6px #43B52B);
        }
    }

`

export const Me_img = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 200px;
    overflow: hidden;
    height: 350px;
    width: 280px;
    img{
        height: 430px;
        padding-top: 20px;
    }
`

// RIGHT SIDE------------------------------------------------------------

export const Itens = styled.ul`
    list-style-type: none;
    padding: 0;
    li{
        display: flex;
        gap: 5px;
        img{
            width: 18px;
            padding-top: 3px;
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

    button:hover{
        transition: all 0.3s linear;
        background-color: #fff;
    }

    /* -------------------LINKEDIN------------------- */

    #lk{
        width: 30px;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    #lk2{
        width: 30px;
        transition: opacity 0.3s ease-in-out;
    }

    button:hover #lk{
        transition: opacity 0.3s ease-in-out;
        opacity: 1;
    }

    button:hover #lk2{
        transition: opacity 0.3s ease-in-out;
        opacity: 0;
    }

    /* -------------------TWITTER------------------- */

    #tt{
        width: 22px;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    #tt2{
        width: 30px;
        transition: opacity 0.3s ease-in-out;
    }

    button:hover #tt{
        transition: opacity 0.3s ease-in-out;
        opacity: 1;
    }

    button:hover #tt2{
        transition: opacity 0.3s ease-in-out;
        opacity: 0;
    }

    /* -------------------FACEBOOK------------------- */

    #fb{
        width: 27.5px;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    #fb2{
        width: 30px;
        transition: opacity 0.3s ease-in-out;
    }

    button:hover #fb{
        transition: opacity 0.3s ease-in-out;
        opacity: 1;
    }

    button:hover #fb2{
        transition: opacity 0.3s ease-in-out;
        opacity: 0;
    }

    /* -------------------INSTAGRAM------------------- */

    #ig2{
        width: 30px;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    #ig{
        width: 30px;
        transition: opacity 0.3s ease-in-out;
    }

    button:hover #ig2{
        transition: opacity 0.3s ease-in-out;
        opacity: 1;
    }

    button:hover #ig{
        transition: opacity 0.3s ease-in-out;
        opacity: 0;
    }
`