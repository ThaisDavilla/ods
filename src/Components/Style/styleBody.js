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
height:75vh;
margin:0 auto;
display:flex;
flex-direction:column;
justify-content: space-evenly;
`
export const DivBrasao = styled.div`
width:70vw;
margin:2vh auto;
display:flex;
flex-direction:column;
align-items:center;
justify-content: space-evenly;

`

export const Brasao = styled.img`
height:12vh;
`
export const AncoraBrasao = styled.a`
margin:5px;
font-size:1.3em;
text-decoration:none;
color:#22223b;
`
export const Footer = styled.footer`
width:70vw;
margin:8vh auto;
display:flex;
font-weight:100;
text-transform: uppercase;

color:#03071e;

`
export const SectionOne = styled.section`
width:20vw;
height:12vh;
font-size:1em;
text-decoration:none;
display:flex;
flex-direction:column;
justify-content:space-evenly;


`
export const Ancora = styled.a`
text-decoration:none;
color:#03071e;

`
export const SectionTwo = styled.section`
width:50vw;
height:12vh;
font-size:1em;
text-decoration:none;
display:flex;
align-items:center;
flex-direction:;
justify-content:space-evenly;

`