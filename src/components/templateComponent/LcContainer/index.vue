<!--
+----------------------------------------------------------------------
| 组件-容器
+----------------------------------------------------------------------
| date: 2022-11-15 09:42
+----------------------------------------------------------------------
| Author: 清晨 <1849003043@qq.com>
+----------------------------------------------------------------------
| GitHub: https://github.com/shenshulong
+----------------------------------------------------------------------
-->

<template>
    <div class="component-container">
        <div class="component-container-head h5-underline"></div>
        <div class="component-container-body" :style="{padding: `${padding}px 0`}">
            <slot class="nest-none"></slot>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: "LcContainer",
        props: {
            padding: {
                type: Number,
                default: 0
            }
        },
        watch: {
            $slot: {
                handler() {}
            }
        }
    };
</script>

<style scoped>
    .component-container {
        border-radius: 10px;
        box-shadow: 0 4px 6px 0 rgba(12, 31, 80, 0.14);
        margin-top: 5px;
    }
    .component-container .component-container-head {
        height: 30px;
        background: url("https://file.qingflow.com/assets/widget/theme/header0.png");
        background-size: 100% 100%;
        font-size: 14px;
        color: #fff;
        letter-spacing: 1px;
    }
    .component-container .component-container-body {
        padding: 10px;
        background: #fff;
    }
</style>
