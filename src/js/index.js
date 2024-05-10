import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/swiper.scss'
import 'swiper/modules/pagination.scss'
import '../scss/style.scss'

import { toggleActiveLink, showMore, closeForm, closeMenu } from './utils'

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
showMore('repair-brands', 'brands')
showMore('repair-appliances', 'appliances')

const menuButton = document.querySelector('.nav-button')
const menu = document.querySelector('.menu')
const screen = document.querySelector('.screen')
const burger = document.querySelector('.burger')
const callFormButtons = document.querySelectorAll(
  '.service-button--type--phone'
)
const feedbackFormButtons = document.querySelectorAll(
  '.service-button--type--chat'
)
const callForm = document.querySelector('.call-form')
const feedbackForm = document.querySelector('.feedback-form')
const closeFormButtons = document.querySelectorAll('.close-button')

menuButton.addEventListener('click', (evt) => {
  evt.preventDefault()
  menuButton.classList.toggle('nav-button--state--menu-opened')
  menu.classList.toggle('menu--state--opened')
  screen.classList.toggle('screen--state--menu-opened')
  burger.classList.toggle('burger--state--menu-opened')
})

callFormButtons.forEach((button) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault()
    callForm.classList.add('screen__form--state--opened')
    menu.classList.remove('menu--state--opened')
    burger.classList.remove('burger--state--menu-opened')
    screen.classList.add('screen--state--menu-opened')
  })
})

feedbackFormButtons.forEach((button) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault()
    feedbackForm.classList.add('screen__form--state--opened')
    menu.classList.remove('menu--state--opened')
    burger.classList.remove('burger--state--menu-opened')
    screen.classList.add('screen--state--menu-opened')
  })
})

closeFormButtons.forEach((button) => {
  button.addEventListener('click', closeForm)
  screen.classList.remove('screen--state--menu-opened')
})

screen.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('screen--state--menu-opened')) {
    closeMenu()
    evt.target.classList.remove('screen--state--menu-opened')
  }
})
