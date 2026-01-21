function comprar(automovel)
{
    switch (automovel)
    {
        case 'hatch': console.log('Compra efetuada com sucesso!');
            break;
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete': console.log('Tem certeza que não prefere este modelo?');
            break;
        default: console.log('Não trabalhamos com este tipo de automóvel aqui.');
            break;
    };
};

comprar('hatch');
comprar('sedan');
comprar('motocicleta');
comprar('caminhonete');
comprar('avião');