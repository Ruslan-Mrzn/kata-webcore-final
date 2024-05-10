const closeMenu = () => {
  const menuButton = document.querySelector('.nav-button')
  const menu = document.querySelector('.menu')
  const screen = document.querySelector('.screen')
  const burger = document.querySelector('.burger')
  menuButton.classList.remove('nav-button--state--menu-opened')
  menu.classList.remove('menu--state--opened')
  screen.classList.remove('screen--state--menu-opened')
  burger.classList.remove('burger--state--menu-opened')
}

const closeForm = (evt) => {
  document.querySelector('.screen')
  evt.preventDefault()
  evt.target
    .closest('.screen__form')
    .classList.remove('screen__form--state--opened')
  const screen = document.querySelector('.screen')
  screen.classList.remove('screen--state--menu-opened')
}

const toggleActiveLink = (blockClassName, headerClassName) => {
  if (headerClassName) {
    const header = document.querySelector(`.${headerClassName}`)
    header.textContent = document
      .querySelector(`.${blockClassName}`)
      .querySelector('.nav-link--state--active').textContent
  }
  const listOfLinks = document
    .querySelector(`.${blockClassName}`)
    .querySelectorAll('.nav-link')
  listOfLinks.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault()
      if (!evt.target.classList.contains('.nav-link--state--active')) {
        const currentActiveLink = document
          .querySelector(`.${blockClassName}`)
          .querySelector('.nav-link--state--active')
        currentActiveLink.classList.remove('nav-link--state--active')
        evt.target.classList.add('nav-link--state--active')
        if (headerClassName) {
          document.querySelector(`.${headerClassName}`).textContent =
            evt.target.textContent
          closeMenu()
        }
      }
    })
  })
}

const showMore = (blockClassName, overflowBlockClassName) => {
  const block = document.querySelector(`.${blockClassName}`)
  const overflowBlock = block.querySelector(`.${overflowBlockClassName}`)
  const button = block.querySelector('.show-more-button')
  const textShow = button.querySelector('.text-show')
  const textHide = button.querySelector('.text-hide')
  button.addEventListener('click', (evt) => {
    evt.preventDefault()
    overflowBlock.classList.toggle(`${overflowBlockClassName}--state--opened`)
    button.classList.toggle('show-more-button--state--show')
    textShow.classList.toggle('text-show--state--hidden')
    textHide.classList.toggle('text-hide--state--hidden')
  })
}

export { toggleActiveLink, showMore, closeForm, closeMenu }
