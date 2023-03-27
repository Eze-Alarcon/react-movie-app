/* eslint-disable space-before-function-paren */

function debounceFunction(cb, delay) {
  let timer
  return function () {
    const self = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      cb.apply(self, args)
    }, delay)
  }
}

export { debounceFunction }
