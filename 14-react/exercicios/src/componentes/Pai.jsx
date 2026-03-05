import React from "react";

// Importa o componente filho
import Filho from "./Filho";

// Exporta o componente pai
export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            <Filho nome="Ícaro" sobrenome={props.sobrenome}/>
            <Filho {...props}/>
            <Filho {...props} nome="Ágata"/>
        </ul>
    </div>;