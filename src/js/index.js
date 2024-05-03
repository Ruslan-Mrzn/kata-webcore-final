import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/swiper.scss'
import 'swiper/modules/pagination.scss'
import '../scss/style.scss'

import { toggleActiveLink, showMore } from './utils'

console.log(window.screen.width)
if (window.screen.width < 500) {
  new Swiper('.brands', {
    spaceBetween: 16,
    slidesPerView: 'auto',
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
  new Swiper('.appliances', {
    spaceBetween: 16,
    slidesPerView: 'auto',
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
  new Swiper('.prices', {
    spaceBetween: 16,
    slidesPerView: 'auto',
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}

toggleActiveLink('nav-list', 'hero__header')
toggleActiveLink('menu__lang')
toggleActiveLink('services')
showMore('hero__text-block', 'hero__overflow')

const menuButton = document.querySelector('.nav-button')
const menu = document.querySelector('.menu')
const screen = document.querySelector('.screen')
const burger = document.querySelector('.burger')
menuButton.addEventListener('click', (evt) => {
  evt.preventDefault()
  menuButton.classList.toggle('nav-button--state--menu-opened')
  menu.classList.toggle('menu--state--opened')
  screen.classList.toggle('screen--state--menu-opened')
  burger.classList.toggle('burger--state--menu-opened')
})
