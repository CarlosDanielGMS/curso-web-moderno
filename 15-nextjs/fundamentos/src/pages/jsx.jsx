export default function Jsx ()
{
    const titulo = <h1>JSX é um conceito central</h1>;

    function gerarSubtitulo ()
    {
        return <h2>{"muito legal".toUpperCase()}</h2>;
    };

    const pessoa = { nome: "João", idade: 17 };

    return (
        <div>
            {titulo}
            {gerarSubtitulo()}

            <p>{JSON.stringify(pessoa)}</p>
        </div>
    );
};