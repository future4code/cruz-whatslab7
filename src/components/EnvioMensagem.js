import React from 'react'


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
        this.setState({ mensagem: novaListaConteudo});

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
            <div>
                <div>{componenteMensagem}</div>
                <input
                placeholder={'Usuário'} 
                onChange={this.pegarInputUsuario} 
                value={this.state.inputUsuarioValor} 
                /> 
                
                <input 
                placeholder={'Digite sua mensagem'} 
                onChange={this.pegarInputconteudo}
                value={this.state.inputValorconteudo}
                />

                <button onClick={this.criarconteudo}>Enviar</button>
            </div>
        );
    };
};

