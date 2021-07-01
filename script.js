const menuHamb = document.querySelector('.menu-hamb')
const menuResponsivo = document.querySelector('.menu-js')

let aberto = false

menuHamb.addEventListener('click', () => {
    if (!aberto) {
        aberto = true
        menuResponsivo.classList.add('aberto')
    } else {
        aberto = false
        menuResponsivo.classList.remove('aberto')
    }
})