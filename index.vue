<template>
  <div :style="parentStyle" class="wo-static-to-fixed">
    <div :style="needToFixed ? fixedStyle : {}" class="box">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WoStaticToFixed',
  props: {
    keyPos: {
      type: Number,
      default: 0
    },
    fixedByUp: {
      type: Boolean,
      default: false
    },
    keepOffset: {
      type: Boolean,
      default: false
    },
    needHoldOn: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      needToFixed: false,
      domProperty: {},
      isUp: true
    }
  },
  computed: {
    keyScrollPos () {
      return this.keepOffset ? this.keyPos : this.domProperty.top - this.keyPos
    },
    fixedStyle () {
      return {
        position: 'fixed',
        width: `${this.domProperty.width}px`,
        height: `${this.domProperty.height}px`,
        top: this.keepOffset ? `${this.domProperty.top + this.keyPos}px` : `${this.keyPos}px`,
        left: `${this.domProperty.left}px`,
        zIndex: 1
      }
    },
    parentStyle () {
      return {
        width: `${this.domProperty.width}px`,
        height: `${this.domProperty.height}px`
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.getDomProperty()
    }, 0)
    window.addEventListener('resize', () => {
      this.needToFixed = false
      setTimeout(this.getDomProperty, 100)
    })
    window.addEventListener('scroll', this.checkNeedToFixed)
  },
  destroyed () {
    window.removeEventListener('resize', this.getDomProperty)
    window.removeEventListener('scroll', this.checkNeedToFixed)
  },
  methods: {
    checkNeedToFixed () {
      if (this.needHoldOn) {
        this.needToFixed = false
      } else if (this.fixedByUp) {
        this.isUp = (window.scrollY - (this.tempScrollY || 0)) < 0
        this.tempScrollY = window.scrollY
        this.needToFixed = this.isUp && window.scrollY > this.keyScrollPos
      } else {
        this.needToFixed = window.scrollY > this.keyScrollPos
      }
    },
    getDomProperty () {
      const boundingClientRect = this.$el.children[0].getBoundingClientRect()
      this.domProperty = {
        width: this.$el.children[0].offsetWidth,
        height: this.$el.children[0].offsetHeight,
        top: this.domProperty.top || boundingClientRect.top,
        left: boundingClientRect.left
      }
      setTimeout(this.checkNeedToFixed, 0)
    }
  }
}
</script>
<style lang="less">
.wo-static-to-fixed {
  .box {
    position: relative;
    z-index: 1;
  }
}
</style>
