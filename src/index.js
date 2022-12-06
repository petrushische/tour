import '../pages/index.css'

const scrollElement = document.querySelector('.scroll');
document.addEventListener('scroll', () => {
  let distance = window.scrollY
  if (distance >= 450) {
    scrollElement.classList.add('scroll__visible')

  }
  else {
    scrollElement.classList.remove('scroll__visible')
  }
})



