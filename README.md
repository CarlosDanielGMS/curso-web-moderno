# 🚀 Curso Web Moderno - Diário de Estudos

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Course](https://img.shields.io/badge/Course-Cod3r-blue)](https://www.udemy.com/course/curso-web/)
[![Author](https://img.shields.io/badge/Author-CarlosDanielGMS-lightgrey)](https://www.linkedin.com/in/CarlosDanielGMS)

Este repositório atua como uma **documentação de estudos** envolvendo a minha jornada de aprendizado no curso "Web Moderno", da Cod3r. Aqui, concentro os exercícios práticos e desafios propostos ao longo dos estudos.

> **Nota:** Projetos maiores e mais complexos serão movidos para repositórios dedicados, visando a melhor organização e simulação de um ambiente de produto real. Para mais detalhes, veja a seção [Projetos em Destaque](#-projetos-em-destaque) abaixo.

---

## 📂 Estrutura do Repositório

Para facilitar a navegação, o código está organizado por tema:

* **`/01-fundamentos`**: Sentenças, blocos, comentários e dados.
* **`/02-javascript`**: Condicionais, laços de repetição, controles de fluxo, funções, objetos e vetores.
* **`/03-node`**: Módulos, package, instâncias, dependências, leitura e escrita de arquivos, frameworks, padrões e tarefas.
* **`/04-esnext`**: Operador Rest/Spread, Tagged Template, Map, Set, For Of, Promises, Callbacks e Async/Await.
* *(Outros módulos serão adicionados conforme o progresso)*

---

## 📊 Progresso de Aprendizado

Logo abaixo é possível visualizar o andamento do curso, com detalhes acerca de cada módulo disponibilizado e as descrições dos tópicos tratados.

| Módulo | Status | Principais Tópicos |
| :----- | :----: | :----------------- |
| **Introdução do Curso** | ✅ Concluído | Visão geral, repositório, boas práticas e terminais |
| **Configuração do Ambiente** | ✅ Concluído | Instalação das ferramentas e uso dos terminais |
| **Iniciando com Programação** | ✅ Concluído | Conceitos base do desenvolvimento de software |
| **JavaScript: Fundamentos** | ✅ Concluído | Fundamentos essenciais da linguagem JavaScript |
| **JavaScript: Estruturas de Controle** | ✅ Concluído | Comandos que determinam o fluxo de execução do código |
| **JavaScript: Função** | ✅ Concluído | Funções, parâmetros e retornos |
| **JavaScript: Objeto** | ✅ Concluído | Orientação a Objetos (OO), notações, getters/setters e herança |
| **JavaScript: Array** | ✅ Concluído | Foreach, map, filter, reduce, concat, flatmap etc |
| **Lista de Exercícios de JavaScript** | ✅ Concluído | Funções, objetos e vetores |
| **Node** | ✅ Concluído | Módulos, package, instâncias, dependências, leitura e escrita de arquivos, frameworks, padrões e tarefas |
| **ESNext** | ✅ Concluído | Operador Rest/Spread, Tagged Template, Map, Set, For Of, Promises, Callbacks e Async/Await |
| **Conceitos sobre Web** | 🔄 Em Progresso | Protocolos HTTP/HTTPS, Servidor Web, Client Side vs Server Side, Conteúdo Estático vs Conteúdo Dinânimo, DNS etc |
| **HTML** | ⏳ Pendente | TAG, página, CSS, Live Server, listas, links, tabelas, formulários, imagens, vídeos etc |
| **---** | --- | --- |

---

## ⭐ Projetos em Destaque

Por questões de organização, os projetos finais de cada grande módulo possuirão seus próprios repositórios. Quando disponíveis, os links para ver as aplicações completas rodando poderão ser acessados abaixo.

### [Ordem]. 🧮 [Nome]

[Descrição].

* **Repositório:** [Link]
* **Tecnologias:** [Descrição].

---

## 📝 Notas de Engenharia & Insights

Este tópico agrega as principais anotações de engenharia e as ideias mais disruptivas observadas ao longo do curso, contribuindo para a fixação e a expansão do conhecimento.

* **Sentenças e Blocos de Código:** a primeira aula de sentença de código utilizou uma analogia interessante que relaciona a estrutura de um livro com a de um código. Sendo assim, da mesma forma como um livro é organizado em letras que formam palavras, que formam frases, que formam parágrafos, que formam seções, que formam capítulos, que, finalmente, formam livros, os códigos também são organizados com sentenças de código que formam blocos, que formam arquivos, que formam pastas, que, finalmente, formam programas. Ainda utilizando a mesma analogia, da mesma forma que o ponto final encerra uma frase, um ponto e vírgula encerra uma sentença de código (dependendo da linguagem de programação).

* **Ordem de Execução em Algoritmos:** o conceito de algoritmo, apresentado na primeira aula do módulo de fundamentos do JavaScript, utilizou uma analogia que facilita a compreensão acerca da importância da ordem que os códigos são executados. O ato de vestir uma roupa, por exemplo, pode gerar uma falha (equivalente a um bug, em programação) se a calça for vestida antes da cueca. O visual do Super-Homem foi utilizado para ilustrar o "erro".

* **Tipos de Atribuição:** a aula "Entendendo o Null & Undefined", do módulo de fundamentos do JavaScript, apresentou um conceito disruptivo pra mim até então: atribuição por valor e atribuição por referência. Quando atribuímos tipos primitivos a uma variável, chamamos de atribuição por valor, uma vez que o valor é copiado para ela e se torna independente. Na atribuição por referência (quando atribuímos objetos, por exemplo), no entanto, a variável recebe o endereço de memória, resultando em alterações síncronas (onde todas as variáveis mudam o valor ao alterar apenas uma delas).

* **Bibliotecas vs Frameworks:** a diferença entre esses dois conceitos pode ser confusa em um certo nível de conhecimento. Por isso, na aula "Frameworks Web", do módulo de Node.js, foi abordado exatamente este tema. As bibliotecas são como ferramentas utilizadas para diferentes propósitos, normalmente quando e como quiser. Os frameworks, por sua vez, ditam as regras da estrutura do negócio, pré-modelando o sistema a que se aplica (seja no backend, seja no frontend).

---

## 🚀 Como Executar Localmente

Para rodar os exercícios deste repositório na sua máquina:

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/CarlosDanielGMS/estudos-web-moderno.git
    ```

2. **Acesse a pasta do projeto:**

    ```bash
    cd estudos-web-moderno
    ```

3. **Instale as dependências (se houver `package.json` na raiz ou na subpasta):**

    ```bash
    npm install
    ```

4. **Execute os arquivos (a maioria também pode ser executada com o plugin *Code Runner* do *Visual Studio Code*):**

    ```bash
    node [diretório]/[arquivo]
    ```

---

## ⚖️ Licença e Créditos

Este projeto está sob a licença **MIT**. Sinta-se livre para usar os códigos para estudo.

* **Curso:** [Web Moderno Completo com JavaScript 2022 + Projetos](https://www.udemy.com/course/curso-web/)
* **Instrutor:** [Leonardo Leitão](https://www.linkedin.com/in/leonardo-leit%C3%A3o-8a5813186)
* **Desenvolvedor:** [Carlos Daniel](https://www.linkedin.com/in/CarlosDanielGMS)

---

*Feito com 💻 e café por Carlos Daniel.*
