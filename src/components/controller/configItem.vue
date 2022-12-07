<!--
+----------------------------------------------------------------------
| 配置组件的外层包裹组件
+----------------------------------------------------------------------
| date: 2022-11-28 16:54
+----------------------------------------------------------------------
| Author: 清晨 <1849003043@qq.com>
+----------------------------------------------------------------------
-->

<template>
    <div class="flex-container padding-10 bg-white config-item-content">
        <div class="font-13 config-item-label">{{label}}</div>
        <div class="flex-1">
            <slot></slot>
        </div>
    </div>
</template>

<script type="text/javascript">
	export default {
        name: "configItem",

        props: ["label", "info"],

        data() {
            return {};
        }
	}
</script>