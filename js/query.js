let navbar = document.querySelector('div.menu-nav')
clickMenu = () => {
    if(navbar.style.display == 'block') {
        navbar.style.display = 'none'
    }else {
        navbar.style.display = 'block'
    }
}

mudouTamanho = () => {
    if(window.innerWidth >= 768) {
        navbar.style.display = 'flex'
    }else {
        navbar.style.display = 'none'
    }
}

mudouTamanho()
clickMenu()