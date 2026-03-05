// Importa a biblioteca principal do React
import React from "react";

// Exporta o componente que recebe as propriedades como parâmetro e retorna o elemento React com a saudação
export default ({ nome, idade }) =>
    // Cada componente deve retornar um único elemento pai
    // Se for preciso retornar mais de um elemento, eles devem ser envolvidos por outro
    // O React possibilita o uso do compomente 'Fragment' curto
    <>
        <h1>A paz de Deus, {nome}!</h1>
        <p>Como você é novo, hein? Só tem {idade} anos?</p>
    </>

// export default ({ nome, idade }) =>
//     // O React possibilita também o uso do componente 'Fragment' padrão
//     <React.Fragment>
//         <h1>A paz de Deus, {nome}!</h1>
//         <p>Como você é novo, hein? Só tem {idade} anos?</p>
//     </React.Fragment>

// export default ({ nome, idade }) =>
//     // O React possibilita também o uso de lista com o parâmetro 'key'
//     [
//         <h1 key="h1">A paz de Deus, {nome}!</h1>,
//         <p key="p">Como você é novo, hein? Só tem {idade} anos?</p>
//     ]

// export default ({ nome, idade }) =>
//     // O React possibilita também o uso do elemento 'div'
//     <div>
//         <h1>A paz de Deus, {nome}!</h1>
//         <p>Como você é novo, hein? Só tem {idade} anos?</p>
//     </div>