<!--
+----------------------------------------------------------------------
| 配置组件-选择框
+----------------------------------------------------------------------
| date: 2022-12-07 10:26
+----------------------------------------------------------------------
| Author: 清晨 <1849003043@qq.com>
+----------------------------------------------------------------------
| GitHub: https://github.com/shenshulong
+----------------------------------------------------------------------
-->

<template>
    <div class="select" :class="[direction=='column' ? 'flex-column' : '']">
        <ul class="select-label" :class="[direction=='column' ? 'mb15' : '']">
            <li class="select-label-text">{{label}}</li>
            <li class="f14">{{getLabel(value)}}</li>
        </ul>
        <div class="select-body">
            <select-item v-for="(item,index) in data" :key="item.id || index" v-bind="item"></select-item>
        </div>
    </div>
</template>

<script type="text/javascript">
    import SelectItem  from "./SelectItem"
    import schemaMixin from "@/mixin/schemaMixin"

    export default {
        name: "SchemaSelect",

        components: {
            SelectItem
        },

        mixins: [schemaMixin],

        provide() {
            return {
                mode: this
            }
        },

        props: {
            value: {
                default: 0,
            },
            data: {
                type: Array,
            }
        },

        computed: {
            direction() {
                return this.data.length > 3 ? "column" : "row";
            }
        },

        methods: {
            getLabel(value) {
                return this.data.find(function(v){
                    return v.value == value ? value.label : '暂无匹配';
                });
            }
        }
    };
</script>

<style lang="scss" scoped>



.select {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: #fff;

  .select-label {
    display: flex;
    align-items: center;

    .select-label-text {
      width: 70px;
      color: #969799;
      font-size: 13px;
    }
  }

  .select-body {
    display: flex;
    flex-wrap: wrap;
  }
}

.mode-select {
  display: flex;
  justify-content: space-between;

  .mode-select-label {
    font-size: 14px;
    line-height: 32px;
  }

  .mode-select-body {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>