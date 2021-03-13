import React from 'react'
import styled from "styled-components"


const Container = styled.div`
width: 50%;
height: 50%;
background-color: white;
border-radius: 20px;

display: flex;
flex-direction: column;
justify-items:flex-end;
align-items:center;
backdrop-filter: blur(20px);
` 

const ContainerInput = styled.div`
width: 95%;
height: 10%;
display: flex;
justify-content: center;
align-items:center;
margin: 2%;`

const ContainerMensagem = styled.div`
width: 95%;
height: 90%;
overflow: auto;
scroll-behavior: unset;
`

const StyledInput = styled.input`
width: 60%;
border: none;
border-bottom: 1px solid black;
padding: 1%;` 

const InputUser = styled.input`
width: 30%;
border: none;
border-bottom: 1px solid black;
padding: 1%;
margin-right: 1%;`


export default class EnvioMensagem extends React.Component {

    state = {
        mensagem: [
            {nomeUsuario: [], conteudo: [], pontos: ""}
        ],
        inputUsuarioValor: '',
        inputValorconteudo: ''   
    };

    pegarInputUsuario = (event) => {
        this.setState({ inputUsuarioValor: event.target.value })
    };

    pegarInputconteudo = (event) => {
        this.setState({ inputValorconteudo: event.target.value })
    };

    criarconteudo = () => {
        const novaMensagem = {
            nomeUsuario: this.state.inputUsuarioValor,
            conteudo: this.state.inputValorconteudo,
            pontos: ":"
        };

        const novaListaConteudo = [...this.state.mensagem, novaMensagem];
        this.setState({ mensagem: novaListaConteudo, inputValorconteudo: ''});

        console.log(this.criarconteudo)

    }

    render () {

        const componenteMensagem = this.state.mensagem.map((msg) => {
            return (
                <div>
                    <p><strong>{msg.nomeUsuario}</strong> {msg.pontos} {msg.conteudo}</p>
                </div>
            )
        })

        console.log(componenteMensagem)

        return (
            <Container>
                <ContainerMensagem>
                <div>{componenteMensagem}</div>
                </ContainerMensagem>

                <ContainerInput>
                <InputUser
                placeholder={'Usuário'} 
                onChange={this.pegarInputUsuario} 
                value={this.state.inputUsuarioValor} 
                /> 
                
                <StyledInput 
                placeholder={'Digite sua mensagem'} 
                onChange={this.pegarInputconteudo}
                value={this.state.inputValorconteudo}
                />

                <button onClick={this.criarconteudo}>Enviar</button>
                </ContainerInput>
            </Container>
        );
    };
};

