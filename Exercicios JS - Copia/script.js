function carregar () {

var msg = window.document.getElementById('msg')

var img = window.document.getElementById('imagem')

var data = new Date()

var hora = 22

msg.innerHTML = `Agora são ${hora} horas`

if (hora >= 0 && hora < 12){
    // Bom dia!
    img.src = 'pexels-torsten-kellermann-349167-955656.jpg'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora <= 18){
    // Boa tarde!
    img.src = 'pexels-andersonmartins-retratos-2386144.jpg'
    document.body.style.background = '#b9846f'
} else {
    // Boa noite!
    img.src = 'pexels-pixabay-414144.jpg'
    document.body.style.background = '#515154'
}

}