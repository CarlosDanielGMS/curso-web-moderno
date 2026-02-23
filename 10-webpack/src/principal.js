// const Pessoa = require('./pessoa'); // Importa uma classe usando o sistema de módulos do CommonJS
import Pessoa from "./pessoa";  // Importa uma classe usando o sistema de módulos do EcmaScript
import './modulos/moduloA'; // Importa um módulo usando o sistema de módulos do EcmaScript

const irmao = new Pessoa();

console.log(irmao.saudar());