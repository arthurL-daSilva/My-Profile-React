import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    padding-top: 200px;
    gap: 60px;
    font-family: "Jura",serif;
    color: #000;
`

export const Container_each = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
    align-items: center;
`

export const Ling_HTMLCSS = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 600px;
    border-radius: 24px;
    background-color: rgba(88, 88, 88, 0.2);
    
    img{
        width: 100px;
    }
`