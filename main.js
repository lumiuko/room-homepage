const nav = document.getElementById('nav')
const menuOpenBtn = document.getElementById('menu-open-btn')
const menuCloseBtn = document.getElementById('menu-close-btn')

const carousel = document.getElementById('carousel')
const previousButtons = document.querySelectorAll('[data-previous]')
const nextButtons = document.querySelectorAll('[data-next]')
const slideContentItems = document.querySelectorAll('.hero-content-item')
const slidesLength = document.querySelectorAll('.header-carousel-item').length

// Carousel

let currentSlide = 0

function goBack() {
  currentSlide--
  if (currentSlide < 0) currentSlide = slidesLength - 1
  renderCarousel()
}

function goNext() {
  currentSlide++
  if (currentSlide >= slidesLength) currentSlide = 0
  renderCarousel()
}

function renderCarousel() {
  carousel.style.setProperty('--current-item', currentSlide)
  slideContentItems.forEach(item => item.classList.remove('open'))
  slideContentItems[currentSlide].classList.add('open')
}

previousButtons.forEach(button => button.addEventListener('click', goBack))
nextButtons.forEach(button => button.addEventListener('click', goNext))

document.addEventListener('keydown', event => {
  if (event.code === 'ArrowLeft') {
    goBack()
  } else if (event.code === 'ArrowRight') {
    goNext()
  }
})

// Mobile menu

function openMenu() {
  nav.classList.add('nav-mobile-open')
}

function closeMenu() {
  nav.classList.remove('nav-mobile-open')
}

menuOpenBtn.addEventListener('click', openMenu)
menuCloseBtn.addEventListener('click', closeMenu)
