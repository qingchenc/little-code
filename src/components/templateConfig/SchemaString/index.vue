<!--
+----------------------------------------------------------------------
| 配置组件-上传图片
+----------------------------------------------------------------------
| date: 2022-11-28 17:37
+----------------------------------------------------------------------
| Author: 清晨 <1849003043@qq.com>
+----------------------------------------------------------------------
| GitHub: https://github.com/shenshulong
+----------------------------------------------------------------------
-->

<template>
    <config-item :label='label'>
        <div class="component-input">
            <el-input v-model="mValue" v-bind="mOptions" :placeholder='mOptions.placeholder' size='small'></el-input>
        </div>
    </config-item>
</template>

<script type="text/javascript">
    import schemaMixin from "@/mixin/schemaMixin";

    export default {
        name: "SchemaString",
        mixins: [schemaMixin],
    };
</script>