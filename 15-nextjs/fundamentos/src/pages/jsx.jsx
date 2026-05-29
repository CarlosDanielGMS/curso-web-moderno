import Layout from "@/components/Layout";

export default function Jsx ()
{
    const titulo = <h1>JSX é um conceito central</h1>;

    function gerarSubtitulo ()
    {
        return <h2>{"muito legal".toUpperCase()}</h2>;
    };

    const pessoa = { nome: "João", idade: 17 };

    return (
        <Layout titulo="Entendendo o JSX">
            <div>
                {titulo}
                {gerarSubtitulo()}

                <p>{JSON.stringify(pessoa)}</p>
            </div>
        </Layout>
    );
};