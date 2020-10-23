const DIRECTIVE_NAME = 'regular-input'
const regularInput = {}

let timer
regularInput.install = Vue => {
  Vue.directive(DIRECTIVE_NAME, {
    update: function(el, { value }, vnode) {
      const _selfDirective = vnode.data.directives.find((directive) => directive.name === DIRECTIVE_NAME)
      if (!_selfDirective) return
      if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
        el = el.getElementsByTagName('input')[0]
      }
      clearTimeout(timer)
      timer = setTimeout(() => {
        try {
          if (el.value) {
            if (_selfDirective.value) {
              const matchArray = el.value.match(new RegExp(`^(${_selfDirective.value}).*$`))
              el.value = matchArray ? matchArray[1] : ''
            }
            el.dispatchEvent(new Event('input'))
          }
        } catch (e) {
          console.log(e)
        }
      }, 200)
    }
  })
}
export default regularInput
