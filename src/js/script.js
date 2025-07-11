const localBtn = document.querySelector('.Local')
const hiddenModal = document.querySelector('#hidden-modal')
const modal = document.querySelector('#modal')
const hamburguerBtn = document.querySelector('.hamburguer-btn')
const navbar = document.querySelector('.navbar')
const sobre = document.querySelector('.Sobre')
const services = document.querySelector('.Service')
const avaliation = document.querySelector('.Avaliation')

/* EVENTOS DE INTERAÇÃO DO USUÁRIO*/
// links para enviar paras seções
sobre.addEventListener('click', (e) => {
    const sobreBox = document.querySelector('#sobre')
    e.preventDefault()
    sobreBox.scrollIntoView({
        behavior: "smooth"
    })
})
services.addEventListener('click', (e) => {
    const serviceBox = document.querySelector('#service')
    e.preventDefault()
    serviceBox.scrollIntoView({
        behavior: "smooth"
    })
})
avaliation.addEventListener('click', (e) => {
    const avaliationBox = document.querySelector('#avaliation')
    e.preventDefault()
    avaliationBox.scrollIntoView({
        behavior: "smooth"
    })
})

// Eventos do mapa e do menu hmmburguer
hamburguerBtn.addEventListener('click', () => {
    navbar.classList.toggle('active')
})
localBtn.addEventListener('click', () => {
    modal.style.left = '50%'
    hiddenModal.style.display = 'block'
})
hiddenModal.addEventListener('click', () => {
    modal.style.left = '-100%'
    hiddenModal.style.display = 'none'
})