const cursos = [
    {   
        img: '../images/img-curso-devweb.webp',
        nome: 'Desenvolvimento Web',
        info: `
        Curso HTML, CSS e JavaScript.`,
        link: `https://go.hotmart.com/S74778753M?dp=1`
    },

    {
        img: '../images/img-curso-php.jpg',
        nome: 'Curso PHP',
        info: `
        Do básico ao avançado em PHP.`,
        link: `https://go.hotmart.com/U74787224L`
    },

    {
        img: '../images/img-bancodedados.png',
        nome: 'Curso Banco de Dados',
        info: `Aprenda Banco de Dados curso completo.`,
        link: `https://go.hotmart.com/C74818226Y`
    },

    {
        img: '../images/img-java.png',
        nome: 'Curso JAVA',
        info: `Curso completo de JAVA Vitalício.`,
        link: `https://go.hotmart.com/M74819032Q?dp=1`
    },

    {
        img: '../images/img-python.png',
        nome: 'Curso de Python',
        info: `Programe em Python do Básico ao Avançado.`,
        link: `https://go.hotmart.com/U74819699C`
    },

    {
        img: '../images/dropshipping-img.webp',
        nome: 'Curso de Dropshipping',
        info: `Aprenda tudo sobre Dropshipping.`,
        link: `https://go.hotmart.com/P75079780U`
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