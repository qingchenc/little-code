
<template>
  <el-tooltip class="item" effect="light" :content="label" placement="bottom" :open-delay="200" :disabled="label == ''">
    <div class="mode-select-item flex-center" :class="[value == mode.mValue ? 'mode-select-item-active' : '']" @click="clickItem">
      <i v-if="icon" class="icon f20 f-bold" :class="icon"></i>
      <span v-else>{{ label }}</span>
    </div>
  </el-tooltip>
</template>

<script>
export default {
  name: 'select-item',

  props: ['label', 'value', 'icon'],

  inject: ['mode'],

  methods: {
    clickItem () {
      this.mode.mValue = this.value
      this.mode.mTooltip = this.label
    }
  }
}
</script>

<style lang="scss" scoped>
.mode-select-item {
  padding: 8px 12px;
  min-width: 55px;
  border: 1px solid #dcdee0;
  border-radius: 0;
  border-color: #ebedf0;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: #155bd4;
    border-color: #155bd4;
    background-color: #e0edff;
    i {
      color: #155bd4;
    }
  }

  i {
    color: #979797;
  }
}

.mode-select-item-active {
  color: #155bd4;
  border-color: #155bd4;
  background-color: #e0edff;
  i {
    color: #155bd4;
  }
}
</style>
