import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url ('https://fonts.googleapis.com/css2? família=Lato:ital,wght@0.300;0.400;1.100&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Lato', sans-serif;
  background-color:#457b9d;
 }`

export const Body = styled.body`
background-color:#bee3db;
border:solid 1px #bee3db;
  
  `
export const Header = styled.header`

width:90vw;
height:40vh;
margin:0 auto;
display:flex;
flex-direction:column;
align-items:center;
justify-content: space-evenly;
color:#1d3557;
font-weight:400;
@media screen and (min-width: 360px) and (max-width: 800px){
  width:90%;
height:100%;
margin:0 auto;
}
`
export const HTwo = styled.h2`

width:90vw;
height:10vh;
margin:3vh auto;
text-align:center;
color:#1d3557;
@media screen and (min-width: 360px) and (max-width: 800px){
  width:90%;
height:100%;
margin:2vh auto;
}
`
export const Section = styled.section`

width:95vw;
height:100vh;
margin:0 auto;
display:flex;
flex-direction:column;
flex-wrap:wrap;
justify-content: space-between;
@media screen and (min-width: 360px) and (max-width: 800px){
  width:95%;
height:;
margin:0 auto;
justify-content: space-evenly;

}
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
   @media screen and (min-width: 360px) and (max-width: 800px){
    height:100%;
    transition: 1s ease-out;
  &:hover{
   cursor: pointer;
    transform: scale(1.5);
  }
`

export const Paragraph = styled.p`
margin:5px;
font-size:1.3em;
@media screen and (min-width: 360px) and (max-width: 800px)
margin:5px;
font-size:1.3em;
line-height:30px;
`

export const SectionMogi = styled.section`
width:90vw;
height:100%;
margin:0 auto;
display:flex;
flex-direction:column;
justify-content: space-evenly;
@media screen and (min-width: 360px) and (max-width: 800px){
width:90%;
height:100%;
}
`
export const DivBrasao = styled.div`
width:70vw;
margin:2vh auto;
display:flex;
flex-direction:column;
align-items:center;
justify-content: space-evenly;
@media screen and (min-width: 360px) and (max-width: 800px){
  width:99%;
  height:15vh;
 margin:2vh auto;
  }
`

export const Brasao = styled.img`
height:8vh;
margin: -1vh;
@media screen and (min-width: 360px) and (max-width: 800px){
  height:3.5vh;
}
`
export const AncoraBrasao = styled.a`
margin:5px;
font-size:1.3em;
text-decoration:none;
color:#22223b;
  }
`
export const Footer = styled.footer`
width:70vw;
margin:8vh auto;
display:flex;
font-weight:100;
text-transform: uppercase;
color:#03071e;
@media screen and (min-width: 360px) and (max-width: 800px){
  width:97%;
  height:100%;
margin:0 auto;
flex-direction:column;
}
`
export const SectionOne = styled.section`
width:20vw;
height:12vh;
font-size:1em;
text-decoration:none;
display:flex;
flex-direction:column;
justify-content:space-evenly;
@media screen and (min-width: 360px) and (max-width: 800px){
  width:100%;
height:10vh;
font-size:1em;
align-items:center;
}
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
justify-content:space-evenly;
@media screen and (min-width: 360px) and (max-width: 800px){
  width:100%;
height:100%;
flex-direction:column;
}

`