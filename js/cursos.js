const cursos = [
    {   
        img: '../images/img-curso-devweb.webp',
        imgAvaliacao: `../images/img-5-estrelas.png`,
        nome: 'Desenvolvimento Web',
        info: `
        Curso HTML, CSS e JavaScript.`,
        link: `https://go.hotmart.com/S74778753M?dp=1`
    },

    {
        img: '../images/img-curso-php.jpg',
        imgAvaliacao: `../images/img-5-estrelas.png`,
        nome: 'Curso PHP',
        info: `
        Do básico ao avançado em PHP.`,
        link: `https://go.hotmart.com/U74787224L`
    },

    {
        img: '../images/img-bancodedados.png',
        imgAvaliacao: `../images/img-5-estrelas.png`,
        nome: 'Curso Banco de Dados',
        info: `Aprenda Banco de Dados curso completo.`,
        link: `https://go.hotmart.com/C74818226Y`
    },

    {
        img: '../images/img-java.png',
        imgAvaliacao: `../images/img-5-estrelas.png`,
        nome: 'Curso JAVA',
        info: `Curso completo de JAVA Vitalício.`,
        link: `https://go.hotmart.com/M74819032Q?dp=1`
    },

    {
        img: '../images/img-python.png',
        imgAvaliacao: `../images/img-5-estrelas.png`,
        nome: 'Curso de Python',
        info: `Programe em Python do Básico ao Avançado.`,
        link: `https://go.hotmart.com/U74819699C`
    },

    {
        img: '../images/dropshipping-img.webp',
        imgAvaliacao: `../images/img-5-estrelas.png`,
        nome: 'Curso de Dropshipping',
        info: `Aprenda tudo sobre Dropshipping.`,
        link: `https://go.hotmart.com/P75079780U`
    },

    {
        img: '../images/mkt-programadores-img.png',
        imgAvaliacao: `../images/img-5-estrelas.png`,
        nome: 'Marketing Digital',
        info: 'Marketing para programadores.',
        link:  `https://go.hotmart.com/N75132320R`
    },

    {
        img: '../images/img-logica-programacao.png',
        imgAvaliacao: `../images/img-5-estrelas.png`,
        nome: 'Lógica De Programação',
        info: `Aprenda Lógica de Programação.`,
        link: `https://p.eduzz.com/1578509?a=90931666`
    },

    {
        img: '../images/img-afiliado-milionario.png',
        imgAvaliacao: `../images/img-5-estrelas.png`,
        nome: 'Afiliado Milionario',
        info: `Comece a ganhar dinheiro como afiliado.`,
        link: `https://p.eduzz.com/1125468?a=90931666`
    }
]


iniciarBitCode = () => {
    let containerCursos = document.querySelector('main')
    cursos.map((val) =>{
        containerCursos.innerHTML += `
        <div class="container-cursos">
            <img src="${val.img}" alt="Curso">
            <p class="nome-curso">
                ${val.nome}
            </p>
            <p class="info-curso">
                ${val.info}
            </p>
            <img class="img-avaliacao" src="${val.imgAvaliacao}" alt="Curso">
            <div class="bloco-btn">
                <p class="btn-comprar-curso">
                    <a href="${val.link}">Ver curso</a>
                </p>
            </div>
        </div>
        `

    })
}

iniciarBitCode()