function verificarDia(dia)
{
    switch (dia)
    {
        case 1:
            console.log(`Dia ${dia} é fim de semana.`);
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log(`Dia ${dia} é dia útil.`);
            break;
        case 7:
            console.log(`Dia ${dia} é fim de semana.`);
            break;
        default:
            console.log(`O parâmetro "${dia}" não é um dia válido.`);
            break;
    };
};

verificarDia(1);
verificarDia(2);
verificarDia(3);
verificarDia(4);
verificarDia(5);
verificarDia(6);
verificarDia(7);
verificarDia('Daniel é um gostoso!');