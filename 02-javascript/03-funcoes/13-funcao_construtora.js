function Carro (velocidadeMaxima = 200, deltaVelocidade = 1)
{
    let velocidadeAtual = 0;

    this.acelerar = function ()
    {
        velocidadeAtual + deltaVelocidade <= velocidadeMaxima ? velocidadeAtual += deltaVelocidade : velocidadeAtual = velocidadeMaxima;
    };

    this.getVelocidadeAtual = () => velocidadeAtual;
}

const ka = new Carro;
ka.acelerar();
console.log(`Velocidade atual do Ka: ${ka.getVelocidadeAtual()} km/h.`);

const uno = new Carro(400, 75);
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
console.log(`Velocidade atual do Uno: ${uno.getVelocidadeAtual()} km/h.`);