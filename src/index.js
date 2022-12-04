import '../pages/index.css'

const scrollElement = document.querySelector('.scroll');
document.addEventListener('scroll', () => {
  let distance = window.scrollY
  if (distance >= 450) {
    scrollElement.setAttribute('style', 'display:flex')

  }
  else {
    scrollElement.removeAttribute('style')
  }
})