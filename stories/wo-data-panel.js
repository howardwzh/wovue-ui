import { storiesOf } from '@storybook/vue'
import WoDataPanel from '../src/packages/data-panel'

const DATA = [{
  label: '姓',
  value: 'Wang'
}, {
  label: '名',
  value: 'Howard'
}, {
  label: '性别',
  value: '男'
}, {
  label: '年龄',
  value: '22',
  unit: '岁'
}, {
  label: '学校',
  value: '爱学不学大学'
}, {
  label: '兴趣',
  value: '吃饭，唱歌，跳舞，电影'
}, {
  label: '电话',
  value: '020-33336666'
}]

storiesOf('WoDataPanel', module)
  .add('数据2列展示', () => ({
    components: { WoDataPanel },
    template: `
      <div class="high-box">
          <wo-data-panel :data="data" :cols="2" />
      </div>`,
    data() {
      return {
        data: DATA
      }
    }
  }))
  .add('数据4列展示', () => ({
    components: { WoDataPanel },
    template: `
      <div class="high-box">
          <wo-data-panel :data="data" :cols="4" />
      </div>`,
    data() {
      return {
        data: DATA
      }
    }
  }))
  .add('固定label宽度', () => ({
    components: { WoDataPanel },
    template: `
      <div class="high-box">
          <wo-data-panel :data="data" :cols="4" label-width="60px" />
      </div>`,
    data() {
      return {
        data: DATA
      }
    }
  }))
  .add('label右对齐', () => ({
    components: { WoDataPanel },
    template: `
      <div class="high-box">
          <wo-data-panel :data="data" :cols="4" label-width="60px" label-align="right" />
      </div>`,
    data() {
      return {
        data: DATA
      }
    }
  }))
