<!--
+----------------------------------------------------------------------
| 配置组件-对象模块
+----------------------------------------------------------------------
| date: 2022-12-06 14:00
+----------------------------------------------------------------------
| Author: 清晨 <1849003043@qq.com>
+----------------------------------------------------------------------
| GitHub: https://github.com/shenshulong
+----------------------------------------------------------------------
-->

<template>
    <div class="component-wrap bg-white">
        <div class="component-wrap-label text-left">
            <span>{{label}}</span>
        </div>
        <div class="component-wrap-body">
            <slot></slot>
            <div v-show="line" class="component-wrap-line"></div>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: "SchemaObject",
        props: {
            label: {
                type: String,
                default: ""
            },
            line: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {}
        }
    };
</script>
