'use strict'

// start here
const background = document.querySelector('.background')
const pwd = document.querySelector('#password')

let blur = 20 //background.style.filter.value

pwd.addEventListener('keydown', e => {
  setBlurValue(e)
})

function setBlurValue(event) {
  const input = event.target.value
  const length = input.length

  if (blur < 0) {
    blur = 0
  }

  background.style.filter = `blur(${20 - length}px)`
}
