// Getters e Setters são usados para encapsular (proteger) atributos de objetos
const sequencia =
{
    _valor: 1, // Por convenção, atributos privados iniciam com underline
    get valor() { return this._valor++; }, // Retorna o valor privado
    set valor(valor) { if (valor > this._valor) this._valor = valor; } // Filtra o valor antes de atribuir
};

console.log(sequencia.valor, sequencia._valor); // Incrementa normalmente a partir da atribuição interna
sequencia.valor = 10; // Atribui um valor maior que o da variável interna (aceito)
console.log(sequencia.valor, sequencia.valor); // Incrementa normalmente a partir da nova atribuição
sequencia.valor = 5; // Tenta atribuir um valor menor que o da variável interna (rejeitado/ignorado)
console.log(sequencia.valor, sequencia.valor); // Incrementa a partir da última atribuição aceita