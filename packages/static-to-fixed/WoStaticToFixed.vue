<template>
  <div class="wo-static-to-fixed" :style="needToFixed ? fixedStyle : {}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "WoStaticToFixed",
  props: {   
    keyPos: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      needToFixed: false,
      domProperty: {},
      fixedStyle: {}
    }
  },
  computed: {
    keyScrollPos () {
      return this.domProperty.top - this.keyPos
    }
  },
  mounted () {
    setTimeout(() => {
      const boundingClientRect = this.$el.children[0].getBoundingClientRect()
      this.domProperty = {
        width: this.$el.children[0].offsetWidth,
        height: this.$el.children[0].offsetHeight,
        top: boundingClientRect.top,
        left: boundingClientRect.left
      }
      this.fixedStyle = {
        position: 'fixed',
        width: `${this.domProperty.width}px`,
        height: `${this.domProperty.height}px`,
        top: `${this.keyPos}px`,
        left: `${this.domProperty.left}px`
      }
      this.checkNeedToFixed()
      window.addEventListener('scroll', this.checkNeedToFixed)
    }, 0)
  },
  destroyed () {
    window.removeEventListener('scroll', this.checkNeedToFixed)
  },
  methods: {
    checkNeedToFixed () {
      this.needToFixed = window.scrollY  > this.keyScrollPos
    }
  }
};
</script>

<style lang="css" scoped>
</style>
