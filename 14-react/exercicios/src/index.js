import React from 'react'; // Importa a biblioteca principal do React
import ReactDOM from 'react-dom/client'; // Importa a nova biblioteca de DOM do React

// Importa o primeiro componente React
// A nomenclatura da importação de todo componente React personalizado deve começar com letra maiúscula
// import Primeiro from './componentes/Primeiro';

// Importa o componente React de saudação
// import Saudacao from './componentes/Saudacao';

// Importa os componentes React de bom dia diretamente e boa tarde via desestruturação
// import Multiplos, { BoaTarde } from './componentes/Multiplos';

// Importa o componente de classe React 'Cumprimento'
// import Cumprimento from './componentes/Cumprimento';

// Importa os componentes pai e filho React
import Pai from './componentes/Pai';
import Filho from './componentes/Filho';

// Cria a raiz do React apontando para o elemento do HTML com ID 'root'
const raiz = ReactDOM.createRoot(document.getElementById('root'));

// Monta e renderiza o componente React na árvore do DOM do navegador
// raiz.render(<Primeiro/>);

// Monta e renderiza o componente React com os parâmetros na árvore do DOM do navegador
// raiz.render(<Saudacao nome="Daniel" idade={25}/>);

// Monta e renderiza os componentes React com os parâmetros na árvore do DOM do navegador
// raiz.render
// (
//     <div>
//         <Multiplos.BomDia nome="Daniel"/>
//         <BoaTarde nome="Neta"/>
//     </div>
// );

// Monta e renderiza o componente React com os parâmetros na árvore do DOM do navegador
// raiz.render
// (
//     <div>
//         <Cumprimento tipo="Bom dia" nome="Daniel"/>
//     </div>
// );

// Monta e renderiza os componentes React com os parâmetros na árvore do DOM do navegador
raiz.render
(
    <div>
        <Pai nome="Daniel" sobrenome="Galvão">
            <Filho nome="Ícaro"/>
            <Filho nome="Daniel"/>
            <Filho nome="Ágata"/>
        </Pai>
    </div>
);