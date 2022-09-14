const cursos = [
    {   
        img: 'images/img-curso-devweb.webp',
        nome: 'Desenvolvimento Web',
        info: `
        HTML, CSS e JavaScript`,
        link: `https://go.hotmart.com/S74778753M?dp=1`
    },

    {
        img: 'images/img-curso-php.jpg',
        nome: 'Curso PHP',
        info: `
        Do básico ao avançado em PHP`,
        link: `https://go.hotmart.com/U74787224L`
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
            <p class="btn-comprar-curso">
                <a href="${val.link}">Comprar</a>
            </p>
        </div>
        `

    })
}

iniciarBitCode()