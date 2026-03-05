import React from "react";

// Exporta a função que retorna os elementos filho com as propriedades do elemento pai
export function obterFilhosPropriedades (propriedadesPai)
{
    // Percorre, processa e retorna todos os elementos filho
    return React.Children.map
    (
        // Define as propriedades do elemento pai onde devem ser buscados os elementos filho
        propriedadesPai.children,
        // Executa uma função para cada elemento filho encontrado
        child =>
        {
            // Retorna um clona do elemento filho com as propriedades do elemento pai sobrescritas pelas propriedades do elemento filho
            return React.cloneElement(child, {...propriedadesPai, ...child.props});
        }
    )
};