const cores =
{
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get (tag)
    {
        // Retorna a cor da tag passada como parâmetro
        return this[tag] ? this[tag] : this.padrao;
    }
};

function exibirRotulo (elemento)
{
    // Atribui à variável o nome da tag do elemento passado como parâmetro
    const nomeTag = elemento.tagName.toLowerCase();
    
    // Atribui a cor da borda de acordo com o nome da tag passado como parâmetro
    elemento.style.borderColor = cores.get(nomeTag);
    
    // Verifica se o elemento passado como parâmetro possui a classe semrotulo
    if (!elemento.classList.contains('semrotulo'))
    {
        // Atribui à variável o elemento rotulo criado
        const rotulo = document.createElement('rotulo');
        // Atribui a cor de fundo do rótulo de acordo com o nome da tag passado como parâmetro
        rotulo.style.backgroundColor = cores.get(nomeTag);
        // Adiciona o nome da tag à página HTML
        rotulo.innerHTML = nomeTag;
        // Insere o elemento com o rótulo na página
        elemento.insertBefore(rotulo, elemento.childNodes[0]);
    };
};

// Exibe o rótulo de cada elemento associado à classe tag
document.querySelectorAll('.tag').forEach(exibirRotulo);