function exibir(valor)
{
    console.log('Valor: ' + valor);
};

const a = 3;
let b = 7;

// Equivalente à expressão "b = b + a"
b += a;
exibir(b);

// Equivalente à expressão "b = b - a"
b -= a;
exibir(b);

// Equivalente à expressão "b = b * a"
b *= a;
exibir(b);

// Equivalente à expressão "b = b / a"
b /= a;
exibir(b);

// Equivalente à expressão "b = b % a"
b %= a;
exibir(b);