/* eslint-disable space-before-function-paren */

function debounceFunction(callback, delay) {
  let timer

  return function () {
    const self = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      callback.apply(self, args)
    }, delay)
  }
}

export { debounceFunction }
