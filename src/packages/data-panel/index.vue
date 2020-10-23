<template>
  <div class="data-panel">
    <ul v-if="data.length" class="data-panel-list">
      <li v-for="(item, index) in data" :key="index" :style="{'width': `${ 100 / cols }%`}"><label :style="{width: labelWidth, 'text-align': labelAlign}" :class="labelWidth ? 'label-width' : 'label-width-auto'" v-html="`${item.label}：`"/><span :style="{marginLeft: labelWidth}">{{ item.value }}{{ item.unit }}</span></li>
    </ul>
    <div v-else class="data-panel-no-data">
      暂无数据
    </div>
  </div>
</template>
<script>
export default {
  name: 'WoDataPanel',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    cols: {
      type: Number,
      default: 4
    },
    labelWidth: {
      type: String,
      default: ''
    },
    labelAlign: {
      type: String,
      default: 'left'
    }
  }
}
</script>
<style lang="css">
.data-panel-list{
  margin:0;
  padding:0;
  overflow: hidden;
}
.data-panel-list li{
  list-style: none;
  float: left;
  font-size: 14px;
  padding:10px;
  display: flex;
}
.data-panel-list li a:hover{
  color:#ff0000;
}
.data-panel-list li > label {
  color: #999;
  white-space: nowrap;
}
.data-panel-list li > label.label-width {
  position: absolute;
}
/* .data-panel-list li > span {
  white-space: nowrap;
} */
.data-panel-no-data {
  text-align: center;
  font-size: 14px;
  color: #909399;
}
</style>
