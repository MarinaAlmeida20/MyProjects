function load() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 12
    msg.innerHTML = `Now is ${hora} hours in Brazil(Brasilia).`
    if (hora <= 4) {

        img.src = 'brasil.png'
        document.body.style.background = '#e2cd9f'
    }
 
   
    

}

