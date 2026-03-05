import React from "react";

// Exporta componentes React a serem importados via desestruturação
export const BomDia = ({ nome }) => <h1>Bom dia, {nome}!</h1>
export function BoaTarde ({ nome })
{
    return <h1>Boa tarde, {nome}!</h1>
};

// Exporta os componentes React a serem importados diretamente
export default { BomDia, BoaTarde };