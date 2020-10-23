import { storiesOf } from '@storybook/vue'
import regularInput from '../src/packages/directive/regular-input'
import Vue from 'vue'

regularInput.install(Vue)

storiesOf('regularInput', module)
  .add('只能输入数字', () => ({
    template: `
      <input v-regular-input="'[0-9]*'" v-model="value" />`,
    data() {
      return {
        value: ''
      }
    }
  }))
  .add('只能输入合法手机号', () => ({
    template: `
      <input v-regular-input="'1([3456789][0-9]{0,9})?'" v-model="value" />`,
    data() {
      return {
        value: ''
      }
    }
  }))
