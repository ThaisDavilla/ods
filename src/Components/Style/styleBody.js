import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url ('https://fonts.googleapis.com/css2? família=Lato:ital,wght@0.300;0.400;1.100&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Lato', sans-serif;
  }`;

export const Body = styled.body`
  background-color:#8ecae6;
  `
export const Header = styled.header`
width:90vw;
height:30vh;
margin:0 auto;
display:flex;
flex-direction:column;
align-items:center;
justify-content: space-evenly;
color:#1d3557;
font-weight:400;
`
export const HTwo = styled.h2`
width:90vw;
height:8vh;
margin:5vh auto;
text-align:center;
color:#1d3557;
`
export const Section = styled.section`
width:95vw;
height:100vh;
margin:0 auto;
display:flex;
flex-direction:column;
flex-wrap:wrap;
justify-content: space-between;
`
export const Figure = styled.figure`
`
export const Img = styled.img`
width:10vw;
height:25vh;
transition: 1s ease-out;
&:hover{
   cursor: pointer;
    transform: scale(1.2);
   }
`

export const Paragraph = styled.p`
margin:5px;
font-size:1.3em;
`

export const SectionMogi = styled.section`
width:90vw;
height:60vh;
margin:0 auto;
display:flex;
flex-direction:column;
justify-content: space-evenly;
`
export const Footer = styled.footer`
width:90vw;
height:30vh;
margin:5vh auto;
display:flex;
flex-direction:column;
justify-content:space-evenly;
font-weight:100;
border:;
`
export const Div = styled.div`
width:80vw;
height:10vh;
margin: 0 auto;
display:flex;
justify-content:space-around;
border:;
`