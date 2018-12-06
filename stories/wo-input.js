import { storiesOf } from "@storybook/vue";
import WoInput from "../packages/button/WoInput.vue";
const icon = require('./assets/images/boy.png')

storiesOf("WoInput", module)
  .add("value", () => ({
    components: { WoInput },
    template: `
        <div>
            <wo-input v-model="value" />
            <div class="result">result: {{value}}</div>
        </div>`,
    data () {
        return {
            value: '一拳超人'
        }
    }
  }))
  .add("value + readonly", () => ({
    components: { WoInput },
    template: '<wo-input value="我是只读" readonly/>'
  }))
  .add("label + value", () => ({
    components: { WoInput },
    template: `
        <div>
            <wo-input label="用户名" v-model="value"/>
            <div class="result">result: {{value}}</div>
        </div>`,
    data () {
        return {
            value: '一拳超人'
        }
    }
  }))
  .add("icon + label + value", () => ({
    components: { WoInput },
    template: `
        <div>
            <wo-input icon="${icon}" label="用户名" v-model="value"/>
            <div class="result">result: {{value}}</div>
        </div>`,
    data () {
        return {
            value: '一拳超人'
        }
    }
  }))
  .add("icon + value", () => ({
    components: { WoInput },
    template: `
        <div>
            <wo-input icon="${icon}" v-model="value"/>
            <div class="result">result: {{value}}</div>
        </div>`,
    data () {
        return {
            value: '一拳超人'
        }
    }
  }))
  .add("label + value + unit", () => ({
    components: { WoInput },
    template: `
        <div>
            <wo-input label="金额" type="number" v-model="value" unit="RMB"/>
            <div class="result">result: {{value}}</div>
        </div>`,
    data () {
        return {
            value: 2000
        }
    }
  }))
  .add("label + radio", () => ({
    components: { WoInput },
    template: `
        <div>
            <wo-input label="请选择性别" :radioItems="radioItems" type="radio" v-model="value"/>
            <div class="result">result: {{value}}</div>
        </div>`,
    data () {
        return {
            radioItems: [{
                value: '1',
                label: '男'
            }, {
                value: '2',
                label: '女'
            }],
            value: '1'
        }
    }
  }))
  .add("label + checkbox (单选)", () => ({
    components: { WoInput },
    template: `
            <div>
                <wo-input label="其他添加" type="checkbox" v-model="value">
                    <label>
                        <input type="checkbox" v-model="check1" />加糖
                    </label>
                    <label>
                        <input type="checkbox" v-model="check2" />加牛奶
                    </label>
                </wo-input>
                <div class="result">
                    其他添加
                    <br/>加糖: {{check1}}
                    <br/>加牛奶: {{check2}}
                </div>
            </div>`,
    data () {
        return {
            check1: false,
            check2: true
        }
    }
  }))
  .add("label + checkbox (复选)", () => ({
    components: { WoInput },
    template: `
            <div>
                <wo-input label="其他添加" type="checkbox" v-model="value">
                    <label>
                        <input type="checkbox" value="加糖" v-model="checkAll" />加糖
                    </label>
                    <label>
                        <input type="checkbox" value="加牛奶" v-model="checkAll" />加牛奶
                    </label>
                </wo-input>
                <div class="result">
                    其他添加: {{checkAll}}
                </div>
            </div>`,
    data () {
        return {
            checkAll: ['加牛奶']
        }
    }
  }))
