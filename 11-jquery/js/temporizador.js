(
    function ($)
    {
        $.fn.temporizar = function (opcoes)
        {
            const opcoesFinais = $.extend
            (
                {
                    mensagem: 'Em breve!',
                    horario: '23:59:59'
                },
                opcoes
            )

            const dezenaHora = $('<span class="digito">').html('0');
            const unidadeHora = $('<span class="digito">').html('0');
            
            const separadorHora = $('<span class="separador">').html(':');

            const dezenaMinuto = $('<span class="digito">').html('0');
            const unidadeMinuto = $('<span class="digito">').html('0');
            
            const separadorMinuto = $('<span class="separador">').html(':');

            const dezenaSegundo = $('<span class="digito">').html('0');
            const unidadeSegundo = $('<span class="digito">').html('0');
            
            const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem);

            $(this).addClass('temporizador');

            $(this).append
            (
                dezenaHora, unidadeHora, separadorHora,
                dezenaMinuto, unidadeMinuto, separadorMinuto,
                dezenaSegundo, unidadeSegundo, mensagem
            );

            const expressaoRegular = new RegExp(/(\d\d):(\d\d):(\d\d)/);
            const horarioAlvo = expressaoRegular.exec(opcoesFinais.horario)

            let temporizador = setInterval
            (
                () =>
                {
                    const atual = new Date();
                    const alvo = new Date();

                    alvo.setHours(horarioAlvo[1]);
                    alvo.setMinutes(horarioAlvo[2]);
                    alvo.setSeconds(horarioAlvo[3]);

                    const tempoRestanteMilissegundos = alvo.getTime() - atual.getTime();
                    if (tempoRestanteMilissegundos >= 0)
                    {
                        const tempoRestante = expressaoRegular.exec(new Date(tempoRestanteMilissegundos).toISOString());

                        dezenaHora.html(tempoRestante[1][0]);
                        unidadeHora.html(tempoRestante[1][1]);
                        dezenaMinuto.html(tempoRestante[2][0]);
                        unidadeMinuto.html(tempoRestante[2][1]);
                        dezenaSegundo.html(tempoRestante[3][0]);
                        unidadeSegundo.html(tempoRestante[3][1]);
                    }
                    else
                    {
                        clearInterval(temporizador);
                    }
                },
                1000
            );

            return this;
        };
    }
) (jQuery);