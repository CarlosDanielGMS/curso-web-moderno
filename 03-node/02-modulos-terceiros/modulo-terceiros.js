// A instalação de módulos de terceiros é feita usando o comando "npm i [nome-do-modulo]"
// Ex: "npm i lodash"

// A utilização de módulos de terceiros é feita usando a função 'require'
const _ = require('lodash');
setInterval(() => console.log(_.random(1, 1000)), 1000);

// A instalação de módulos de terceiros para uso global é feita usando o comando "npm i -g [nome-do-modulo]"
// Ex: "npm i -g nodemon"