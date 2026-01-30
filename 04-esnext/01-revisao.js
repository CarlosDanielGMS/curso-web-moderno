function exibir (...mensagens)
{
    let texto = '';

    for (let mensagem of mensagens)
    {
        texto = texto.concat(mensagem, ' ');
    };

    console.log(texto);
};

// O tipo 'var' possui escopo de função e global, equanto o tipo 'let' possui escopo de bloco
{
    var nome = 'Produto';
    let tamanho = 10;
}

exibir(nome); // Exibido normalmente
// exibir(tamanho); // Não exibido

// Template String permite concatenar textos e variáveis usando crases e cifras
const produto = 'Mac';
exibir(`${produto} custa muito caro!`);

// Destructuring permite extrair informações
// De Strings
const [l, e, t, ...ras] = 'Processador';
exibir(l, e, t, ras);

// De vetores
const [x, , y] = [9, 8, 7];
exibir(x, y);

// De objetos
const { quantidade: q, peso: p } = { quantidade: 5, peso: 10 };
exibir(q, p);