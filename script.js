

// ============= //
// Time function //
// ============= //


const html_basic_time = '1 ano'
const html_intermed_time = '2 meses'
const css_basic_time = html_intermed_time
const js_basic_time = html_intermed_time
const python_basic_time = html_intermed_time
const cpp_basic_time = '6 meses'
const dataInicial = '2022-11-13' // Data inicial no formato 'yyyy/mm/dd'
const dataInicialDF = new Date (dataInicial) // Data inicial no formato 'yyyy/mm/dd'

const html_basic_timeF = formataDiferença (dataInicialDF, html_basic_time)
const html_intermed_timeF = formataDiferença (dataInicialDF, html_intermed_time)
const css_basic_timeF = formataDiferença (dataInicialDF, html_intermed_time)
const js_basic_timeF = formataDiferença (dataInicialDF, html_intermed_time)
const python_basic_timeF = formataDiferença (dataInicialDF, html_intermed_time)
const cpp_basic_timeF = formataDiferença (dataInicialDF, cpp_basic_time)


function calcularMesesDecorridos(data) {
    const dataAtual = new Date()
    
    // Calcula a diferença entre as duas datas em milissegundos
    const diferenca = Math.abs(dataAtual - data)
  
    // Calcula a estimativa de meses decorridos dividindo a diferença em milissegundos
    // pelo número aproximado de milissegundos em um mês (1000 * 60 * 60 * 24 * 30)
    const meses = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 30)) // Estimativa de meses
  
    // Calcula o número de anos e meses com base na estimativa de meses
    const anos = Math.floor(meses / 12)
    const mesesRestantes = meses % 12
  
    // Cria as strings para anos e meses, com a forma singular ou plural, conforme necessário
    const anosString = anos === 1 ? 'ano' : 'anos'
    const mesesString = mesesRestantes === 1 ? 'mês' : 'meses'
  
    // Retorna uma string que descreve o tempo decorrido em anos e meses
    if (anos > 0 && mesesRestantes > 0) {
        return `${anos} ${anosString} e ${mesesRestantes} ${mesesString}`
    } else if (anos > 0) {
        return `${anos} ${anosString}`
    } else if (mesesRestantes > 0) {
        return `${mesesRestantes} ${mesesString}`
    } else {
        return 'Menos de um mês'
    }
}

function formataDiferença (dataInit, dataEnd){
    return calcularMesesDecorridos( calculaDiferençaMeses(dataInit,  converterTempoParaMeses(dataEnd)))
}

function calculaDiferençaMeses (dataInicial, dataSub){
    return dataInicial - Math.floor(dataSub * (1000 * 60 * 60 * 24 * 30));
}

function converterTempoParaMeses(tempo) {
    const [quantidade, unidade] = tempo.split(' ');
    if (unidade === 'ano' || unidade === 'anos') {
        return parseInt(quantidade) * 12;
    } else if (unidade === 'mês' || unidade === 'meses') {
        return parseInt(quantidade);
    }

    return 0; // Caso a unidade não seja reconhecida, retorna 0
}


// ==================== //
// Injeção de Variáveis //
// ==================== //


const variaveisHtml = {
    html_basic_timeF: 'tempoDecorridoHtmlBasic',
    html_intermed_timeF: 'tempoDecorridoHtmlIntermed',
    css_basic_timeF: 'tempoDecorridoCssBasic',
    js_basic_timeF: 'tempoDecorridoJsBasic',
    python_basic_timeF: 'tempoDecorridoPythonBasic',
    cpp_basic_timeF: 'tempoDecorridoCppBasic',
};

const valoresVariaveis = {
    html_basic_timeF,
    html_intermed_timeF,
    css_basic_timeF,
    js_basic_timeF,
    python_basic_timeF,
    cpp_basic_timeF,
};

document.addEventListener('DOMContentLoaded', function() {
    for (const [variavel, elementoId] of Object.entries(variaveisHtml)) {
        const elemento = document.getElementById(elementoId);

        if (elemento) {
            elemento.textContent = valoresVariaveis[variavel]; // Atualiza o conteúdo do elemento com o valor da variável
        }
    }
});


// ============ //
// Particles.js //
// ============ //

window.onload = function () {
    Particles.init({
        selector: '.background'
    });
};

// ================ //
// Search Bar Slide //
// ================ //


const resultsList = {
    item1: {
        title: 'Django Ecommerce',
        description: 'Ecommerce feito utilizando Python e o framework Django\n \
            (Redireciona para o site onde está hospedado o projeto)',
        href: 'https://danielmellodev.pythonanywhere.com'
    },
    item2: {
        title: 'Instagram',
        description: 'Meu instagram para projetos\n \
            (Redireciona direto para instagram)',
        href: 'https://www.instagram.com/engenheiro_nao_dorme/'
    },
    item3: {
        title: 'GitHub',
        description: 'Meu GitHub com os repositórios de projetos que fiz\n \
            (Redireciona direto para github)',
        href: 'https://github.com/DanielMelloo'
    },
    item4: {
        title: 'Linkedin',
        description: 'Meu Linkedin\n \
            (Redireciona direto para linkedin)',
        href: 'https://www.linkedin.com/in/daniel-melloo-/'
    },
};

document.addEventListener('DOMContentLoaded', function() {
    const projectList = document.getElementById('projects-list');
    const searchBarInput = document.getElementById('search-bar-input');
    const noResultsMessage = document.getElementById('no-results-message');
    let header = document.querySelector('.header');

    if (searchBarInput && header) {
        searchBarInput.addEventListener('focus', function() {
            header.classList.add('wide');
        });

        searchBarInput.addEventListener('blur', function() {
            header.classList.remove('wide');
        });
    }

    searchBarInput.addEventListener('input', function(event) {
        const searchValue = event.target.value.toLowerCase();

        // Remove todos os elementos da lista de projetos
        while (projectList.firstChild) {
            projectList.removeChild(projectList.firstChild);
        }

        let hasVisibleItems = false;

        if (searchValue === '.') {
            // Exibe todos os elementos da lista de projetos
            for (const key in resultsList) {
                const item = resultsList[key];
                const title = item.title;
                const description = item.description;
                const href = item.href;

                const li = document.createElement('li');
                const h2 = document.createElement('h2');
                const a = document.createElement('a');
                const div = document.createElement('div');

                h2.classList.add('project-title');

                h2.textContent = title;
                // a.textContent = 'Ver mais';
                a.href = href;
                li.appendChild(a);
                a.appendChild(div)

                div.appendChild(h2);

                if (description.includes('\n')) {
                    let count = description.split('\n').length;

                    for (let i = 0; i < count; i++) {
                        const p = document.createElement('p');
                        p.textContent = description.split('\n')[i];
                        p.classList.add('project-description');
                        div.appendChild(p);
                    }
                } else {
                    const p = document.createElement('p');
                    p.textContent = description;
                    p.classList.add('project-description');
                    div.appendChild(p);
                }

                

                projectList.appendChild(li);
                hasVisibleItems = true;
            }
        } else {
            for (const key in resultsList) {
                const item = resultsList[key];
                const title = item.title;
                const description = item.description;
                const href = item.href;

                if (title.toLowerCase().includes(searchValue) || description.toLowerCase().includes(searchValue)) {
                    const li = document.createElement('li');
                    const h2 = document.createElement('h2');
                    const a = document.createElement('a');
                    const div = document.createElement('div');

                    h2.classList.add('project-title');

                    h2.textContent = title;
                    // a.textContent = 'Ver mais';
                    a.href = href;

                    div.appendChild(h2);

                    if (description.includes('\n')) {
                        let count = description.split('\n').length;

                        for (let i = 0; i < count; i++) {
                            const p = document.createElement('p');
                            p.textContent = description.split('\n')[i];
                            p.classList.add('project-description');
                            div.appendChild(p);
                        }
                    } else {
                        const p = document.createElement('p');
                        p.textContent = description;
                        p.classList.add('project-description');
                        div.appendChild(p);
                    }
                    a.appendChild(div)
                    li.appendChild(a);

                    projectList.appendChild(li);
                    hasVisibleItems = true;
                }
            }
        }

        // Atualiza a exibição da lista de projetos e da mensagem de "nenhum resultado encontrado"
        if (searchValue !== '') {
            projectList.style.display = hasVisibleItems ? 'block' : 'none';
            noResultsMessage.style.display = hasVisibleItems ? 'none' : 'block';
        } else {
            projectList.style.display = 'none';
            noResultsMessage.style.display = 'none';
        }
    });

    // Oculta todos os itens ao carregar a página inicialmente
    projectList.style.display = 'none';
    noResultsMessage.style.display = 'none';

    // Verifica se a barra de pesquisa está vazia ao carregar a página
    if (searchBarInput.value === '') {
        projectList.style.display = 'none';
        noResultsMessage.style.display = 'none';
    }
});


  
  

// =============== //
// Light-Dark Mode //
// =============== //


const toggleButton = document.querySelector('.dark-light');
const body = document.body;
const storageKey = 'theme';

// Verificar o estado armazenado ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem(storageKey);
    if (theme === 'light') {
        body.classList.add('light-mode');
    }
});

// Alternar o tema ao clicar no botão
toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    // Armazenar o estado do tema
    if (body.classList.contains('light-mode')) {
        localStorage.setItem(storageKey, 'light');
    } else {
        localStorage.removeItem(storageKey);
    }
});


// ============ //
// Show section //
// ============ //


let headerMenu = document.getElementById('header-menu');

const hiddenSection = document.querySelectorAll('.hidden');

const sections = [
    { name: 'intro', class: 'introSec' },
    { name: 'aboutme', class: 'aboutmeSec' },
    { name: 'habilities', class: 'habilitiesSec' }
];

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
  
            const sectionClass = sections.find(section => entry.target.classList.contains(section.class));
  
            if (sectionClass) {
                const activeSectionName = sectionClass.name;
    
                for (let child of headerMenu.children) {
                    const href = child.getAttribute('href').substring(1);
    
                    if (href === activeSectionName) {
                        child.classList.add('is-active');
                    } else {
                        child.classList.remove('is-active');
                    }
                }
            }
        } else {
            entry.target.classList.remove('show');
        }
    });
});


hiddenSection.forEach((el) => observer.observe(el));


// ================== //
// Hover to View Text //
// ================== //

let description0 = document.getElementById('description0');

function showText(elementHover) {
    let id = parseInt(elementHover.id.slice(7), 10);
    let elementToDisplay = document.getElementById('description' + id);

    elementToDisplay.setAttribute('style', 'display: block');
    description0.setAttribute('style', 'display: none');
}

function resetText(elementHoverOff) {
    let id = parseInt(elementHoverOff.id.slice(7), 10);
    let elementToDisplayOff = document.getElementById('description' + id);

    elementToDisplayOff.setAttribute('style', 'display: none');
    description0.setAttribute('style', 'display: block');
}