import Layout from "@/components/Layout";
import Cabecalho from "@/components/Cabecalho";

export default function Exemplo ()
{
    return (
        <Layout titulo="Usando componentes">
            <Cabecalho titulo="Next.js e React" />
            <Cabecalho titulo="Aprendendo Next.js na prática" />
        </Layout>
    );
};