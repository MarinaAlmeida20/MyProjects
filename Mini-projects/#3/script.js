function load() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var country = Date.getTimezoneOffset()       ########  Preciso configurar
    //var hora = data.getHours()
    var hora = 12
    msg.innerHTML = `Now is ${hora} hours in Brazil(Brasilia).`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'brasil.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'brasil.png'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE!
        img.src = 'brasil.png'
        document.body.style.background = '#515154'
    }
    

}

