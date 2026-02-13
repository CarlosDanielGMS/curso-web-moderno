function criarElemento (nomeTag, nomeClasse)
{
    const elemento = document.createElement(nomeTag);
    elemento.className = nomeClasse;
    return elemento;
};

function Barreira (reversa = false)
{
    this.elemento = criarElemento('div', 'barreira');
    const corpo = criarElemento('div', 'corpo');
    const borda = criarElemento('div', 'borda');

    this.elemento.appendChild(reversa ? corpo : borda);
    this.elemento.appendChild(reversa ? borda : corpo);

    this.setAltura = altura => corpo.style.height = `${altura}px`;
};

function ParBarreiras (alturaInterface, abertura, posicaoX)
{
    this.elemento = criarElemento('div', 'par-de-barreiras');
    this.barreiraSuperior = new Barreira(true);
    this.barreiraInferior = new Barreira(false);

    this.elemento.appendChild(this.barreiraSuperior.elemento);
    this.elemento.appendChild(this.barreiraInferior.elemento);

    this.gerarAbertura = () =>
    {
        const alturaBarreiraSuperior = Math.random() * (alturaInterface - abertura);
        const alturaBarreiraInferior = alturaInterface - alturaBarreiraSuperior - abertura;

        this.barreiraSuperior.setAltura(alturaBarreiraSuperior);
        this.barreiraInferior.setAltura(alturaBarreiraInferior);
    };

    this.getPosicaoX = () => parseInt(this.elemento.style.left.split('px')[0]);
    this.setPosicaoX = posicaoX => this.elemento.style.left = `${posicaoX}px`;
    
    this.getLargura = () => this.elemento.clientWidth;

    this.gerarAbertura();
    this.setPosicaoX(posicaoX);
};

function Barreiras (alturaInterface, larguraInterface, aberturaParBarreiras, distancia, notificarCruzamento)
{
    this.pares =
    [
        new ParBarreiras(alturaInterface, aberturaParBarreiras, larguraInterface),
        new ParBarreiras(alturaInterface, aberturaParBarreiras, larguraInterface + distancia),
        new ParBarreiras(alturaInterface, aberturaParBarreiras, larguraInterface + distancia * 2),
        new ParBarreiras(alturaInterface, aberturaParBarreiras, larguraInterface + distancia * 3)
    ];

    const deslocamento = 3;

    this.animar = () =>
    {
        this.pares.forEach
        (
            parBarreiras =>
            {
                parBarreiras.setPosicaoX(parBarreiras.getPosicaoX() - deslocamento);

                if (parBarreiras.getPosicaoX() < -parBarreiras.getLargura())
                {
                    parBarreiras.setPosicaoX(parBarreiras.getPosicaoX() + distancia * this.pares.length);
                    parBarreiras.gerarAbertura();
                };

                const meioInterface = larguraInterface / 2;
                const cruzouMeio = parBarreiras.getPosicaoX() + deslocamento >= meioInterface && parBarreiras.getPosicaoX() < meioInterface;
                if (cruzouMeio) notificarCruzamento();
            }
        );
    };
};