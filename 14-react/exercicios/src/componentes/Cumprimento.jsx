// Importa a biblioteca principal e o componente do React que possibilita a criação de componentes classe
import React, { Component } from "react";

// Exporta, por padrão, o componente de classe 'Cumprimento'
export default class Cumprimento extends Component
{
    // Em React, o fluxo de dados é unidirecional
    // Isso significa que um componente é renderizado novamente quando ocorre uma mudança de estado, mas nunca o contrário
    // Os valores recebidos como propriedade são sempre constantes e, para alterá-los, deve ser usado o objeto 'state'

    // Define o estado local com base nas propriedades recebidas
    state =
    {
        tipo: this.props.tipo,
        nome: this.props.nome
    };
    
    // Atualiza o estado 'tipo' com base no valor do destino do evento (passado por parâmetro quando o valor do elemento 'input' é alterado)
    setTipo = evento => { this.setState({ tipo: evento.target.value }); };

    // Atualiza o estado 'nome' com base no valor do destino do evento (passado por parâmetro quando o valor do elemento 'input' é alterado)
    setNome = evento => { this.setState({ nome: evento.target.value }); };

    // Define o que será renderizado
    render ()
    {
        // Desestrutura as variáveis de estado
        const { tipo, nome } = this.state;
        
        // Retorna os componentes React
        return (
            <div>
                <h1>{tipo}, {nome}!</h1>
                <hr/>
                <input
                    type="text"
                    placeholder="Digite o tipo do cumprimento..."
                    value={tipo}
                    onChange={this.setTipo}
                />
                <input
                    type="text"
                    placeholder="Digite o nome da pessoa a ser cumprimentada..."
                    value={nome}
                    onChange={this.setNome}
                />
            </div>
        )
    };
};