export default function Cabecalho (props)
{
    // Propriedades são somente leitura
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    );
};