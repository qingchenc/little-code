<!--
+----------------------------------------------------------------------
| 组件-标题
+----------------------------------------------------------------------
| date: 2022-11-11 10:50
+----------------------------------------------------------------------
| Author: 清晨 <1849003043@qq.com>
+----------------------------------------------------------------------
| GitHub: https://github.com/shenshulong
+----------------------------------------------------------------------
-->

<template>
    <div class="component-title">
        <div :class="[model == 'center' ? 'title-mid-model' : 'title-left-model']">
            <!-- 主标题 -->
            <div class="title" :style="getTitleStyle()">{{ title }}</div>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: "LcTitle",

        props: {
            title: {
                type: String,
                default: ""
            },
            model: {
                type: String,
                default: "center"
            },
            styles: {
                type: Object,
                default: function(){
                    return {}
                }
            }
        },

        methods: {
            /**
             * 主标题样式
             *
             * @returns {{color: *, fontSize: string}}
             */
             getTitleStyle() {
                 return {
                     color: this.styles.titleColor,
                     fontSize: this.styles.titleSize + "px",
                 }
             }
        }
    };
</script>

<style scoped>
    .component-title .title-left-model {
        display: flex;
        align-items: flex-end;
        padding-left: 10px;
        padding-right: 10px;
    }
    .component-title .title-mid-model {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
