import styled from 'styled-components'

export const ButtonLightBlue = styled.button`
    cursor:pointer;
    display:flex;
    justify-content: center;
    align-items: center;
    width:154px;
    height:42px;
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 0.8750em;
    background-color: #2293F5;
    color:white;
    border: solid;
    border-radius: 3px;
    transition: transform 400ms;

    :hover {
    transform: translateY(-10px);
    }
`

export const ButtonBorderRectangle = styled.button`
cursor:pointer;
    display:flex;
    justify-content: center;
    align-items: center;
    width:210px;
    height:48px;
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 1.125em;
    background-color: #1A6DB6;
    color:white;
    border: none;
    transition: transform 400ms;

    :hover {
    transform: translateY(-10px);
    }
`

export const ButtonBorder = styled.div`
cursor:pointer;
        background-color: #86A9C3;
        display:table;
        content: '';
        width:210px;
        height:64px;
        transition: transform 400ms;

        :hover {
        transform: translateY(-10px);
        }
        `

export const ButtonLightBlueRounded = styled.button`
cursor:pointer;
    display:flex;
    justify-content: center;
    align-items: center;
    width:210px;
    height:48px;
    font-family: 'Roboto';
    font-weight: bold;
    font-size:1.0000em;
    background-color: #2293F5;
    color:white;
    border: solid #2293F5;
    border-radius: 64px;
    transition: transform 400ms;

    :hover {
    transform: translateY(-10px);
    }
`

export const Separator = styled.div`
    background-color: #1A6DB6;
    display:table;
    content:'';
    width:100px;
    height:1px;
`

export const SeparatorTwo = styled.div`
    background-color: #2293F5;
    opacity: 20%;
    display:table;
    content:'';
    width:7px;
    height:275px;
`


export const Title = styled.h1`
    font-family: 'Roboto';
    font-size: 3em;
`

export const ParagraphBold = styled.p`
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 1.125em;
    color: #2293F5;
`

export const Paragraph = styled.p`
    font-family: 'Roboto';
    font-size: 1.125em;
    color: #2A2A2A;
`

export const Description = styled.p`
    font-family: 'Noto Sans';
    font-style: italic;
    font-size: 1.125em;
    color: #345A7B;
    opacity: 80%;
`

export const Box = styled.div`
width:100%;
height: 647px;

`

export const BoxFullWidth = styled.div`
width:100%;
height: 647px;
`