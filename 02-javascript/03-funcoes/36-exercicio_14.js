function comprar (fruta)
{
    switch (fruta)
    {
        case 'maçã':
            console.log('Não vendemos esta fruta aqui.');
            break;
        case 'kiwi':
            console.log('Estamos com escassez de kiwis.');
            break;
        case 'melancia':
            console.log('Aqui está, são R$ 3,00 o quilo.');
            break;
        default:
            console.log('Erro no sistema.');
            break;
    };
};

comprar('kiwi');
comprar('pera');
comprar('melancia');
comprar('maçã');