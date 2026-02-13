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