import React from 'react'; // Importa a biblioteca principal do React
import ReactDOM from 'react-dom/client'; // Importa a nova biblioteca de DOM do React

// Cria o elemento H1 do React usando a sintaxe JSX (que será convertido em 'React.createElement('h1', null, 'React');')
const elementoH1 = <h1>React</h1>;

// Cria a raiz do React apontando para o elemento do HTML com ID 'root'
const raiz = ReactDOM.createRoot(document.getElementById('root'));

// Monta e renderiza o elemento H1 na árvore do DOM do navegador
raiz.render(elementoH1);