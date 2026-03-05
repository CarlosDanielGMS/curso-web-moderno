import React from 'react'; // Importa a biblioteca principal do React
import ReactDOM from 'react-dom/client'; // Importa a nova biblioteca de DOM do React

// Importa o primeiro componente React
// A nomenclatura da importação de todo componente React personalizado deve começar com letra maiúscula
import Primeiro from './componentes/Primeiro';

// Cria a raiz do React apontando para o elemento do HTML com ID 'root'
const raiz = ReactDOM.createRoot(document.getElementById('root'));

// Monta e renderiza o componente React na árvore do DOM do navegador
raiz.render(<Primeiro/>);