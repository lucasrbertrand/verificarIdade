function verificar() {
  const ano = new Date().getFullYear()
  const fano = document.getElementById('txtano')
  const res = document.querySelector('#res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique seus dados e tente novamente')
  } else {
    const fsex = document.getElementsByName('radsex')
    const idade = ano - Number(fano.value)
    let genero = ''
    const img = document.createElement('img')
    img.setAttribute('class', 'foto')
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        // crianca
        img.setAttribute('src', './image/baby.jpg')
      } else if (idade < 21) {
        // jovem
        img.setAttribute('src', './image/lilboy.jpg')
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', './image/man.jpg')
      } else if (idade < 110) {
        // idoso
        img.setAttribute('src', './image/oldman.jpg')
      } else {
        //caveira
        img.setAttribute('src', './image/skeleton.jpg')
      }
  } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        // crianca
        img.setAttribute('src', './image/baby.jpg')
      } else if (idade < 21) {
        // jovem
        img.setAttribute('src', './image/lilgirl.jpg')
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', './image/woman.jpg')
      } else if (idade < 110) {
        // idoso
        img.setAttribute('src', './image/oldwoman.jpg')
      } else {
        //caveira
        img.setAttribute('src', './image/skeleton.jpg')
      } 
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}
const botaoVerificar = document.querySelector('.button')
botaoVerificar.addEventListener('click', verificar)
