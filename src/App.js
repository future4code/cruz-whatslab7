import React from 'react'
import './App.css';
import EnvioMensagem from './components/EnvioMensagem.js'
import styled from "styled-components"


export const Titulo = styled.h2`
color: #FF0078;
padding: 0;`

const Body = styled.body`
background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%);
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
` 

function App() {


    return (
      <Body>
        
        <Titulo>MSN mensseger</Titulo>
        
        <EnvioMensagem />
       
        

  
      </Body>
    );
    }
  
 

export default App;
