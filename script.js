const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    // if the window scrolls down position is greater than the navbr offset height + 150 px
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}