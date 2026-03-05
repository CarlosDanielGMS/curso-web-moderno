import React from "react";

import { obterFilhosPropriedades } from "../utils/utils";

// Exporta o componente pai
export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/* Adiciona os elementos filhos e suas propriedades */}
            { obterFilhosPropriedades(props) }
        </ul>
    </div>;