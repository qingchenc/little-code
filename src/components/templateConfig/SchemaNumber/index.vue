<!--
+----------------------------------------------------------------------
| 配置组件-滑块
+----------------------------------------------------------------------
| date: 2022-11-28 16:46
+----------------------------------------------------------------------
| Author: 清晨 <1849003043@qq.com>
+----------------------------------------------------------------------
| GitHub: https://github.com/shenshulong
+----------------------------------------------------------------------
-->

<template>
    <config-item :label='label'>
        <el-slider v-model="mValue" v-bind="mOptions" show-input></el-slider>
    </config-item>
</template>

<script type="text/javascript">
    import schemaMixin from "@/mixin/schemaMixin";

    export default {
        name: "SchemaNumber",

        mixins: [schemaMixin],

        data() {
            return {
                defaultOptions: {
                    max: 100
                }
            }
        }
    }
</script>