let navbar = document.querySelector('nav.btn-nav')
clickMenu = () => {
    if(navbar.style.display == 'none') {
        navbar.style.display = 'block'
    }else {
        navbar.style.display = 'none'
    }
}



mudouTamanho()
clickMenu()