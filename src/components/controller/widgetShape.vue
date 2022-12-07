<!--
+----------------------------------------------------------------------
| 物料容器 （页面中的配置工具栏）
+----------------------------------------------------------------------
| date: 2022-11-09 09:47
+----------------------------------------------------------------------
| Author: 清晨 <1849003043@qq.com>
+----------------------------------------------------------------------
-->

<template>
    <div class="page-component-container" ref="pageComponentContainer" @click.stop="setCurrentComponent(widget)">
        <!-- 鼠标移到组件高亮
        <div class="event-none container-dashed"></div>
        -->
        <!-- 选中组件高亮 -->
        <div v-if="isCurrentComponent(widget.id)" class="event-none container-solid"></div>

        <!-- 组件工具栏 -->
        <div class="container-tab">
            <template v-if="isCurrentComponent(widget.id)">
                <i class="el-icon-delete-solid tab-icon" @click.stop="delCurrentComponent(controller.widgets, widget.id)"></i>
            </template>
            <span v-else>{{ widget.name }}</span>
        </div>

        <div class="container-content">
            <slot></slot>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: "WidgetShape",

        inject: ["controller"],

        data() {
            return {
                show: false,
            };
        },

        props: {
            widget: {
                type: Object,
                // default: () => ({}),
                default: function(){
                    return {}
                }
            }
        },

        mounted() {
            this.show = true;
        },

        methods: {
            /**
             * 是否是当前组件
             *
             * @param id
             * @returns {boolean}
             */
            isCurrentComponent(id) {
                if(this.controller){
                    if(this.controller.currentComponent){
                        if(this.controller.currentComponent.id == id){
                            return true;
                        }
                    }
                }

                return false;
            },

            /**
             * 选中物料
             *
             * @param component
             */
            setCurrentComponent(component) {
                this.controller.currentComponent = component;
            },

            /**
             * 删除物料
             *
             * @param list
             * @param id
             */
            delCurrentComponent(list, id) {
                // 遍历查找目标下标
                let index = list.reduce(function(prev,current,i){
                    return current.id == id ? i : prev;
                }, -1);

                // 找到目标，删除无名
                if (index >= 0) {
                    list.splice(index, 1);
                } else {
                    // 递归子物料
                    list.filter(function(c){
                        return c.children;
                    }).forEach(function(item){
                        this.delCurrentComponent(item.children, id);
                    });
                }
            }
        }
    };
</script>

<style scoped>
    .page-component-container {
        position: relative;
    }
    .page-component-container .container-dashed{
        display: none;position: absolute;top: 0;left: 0;right: 0;bottom: 0;border: dashed 1px red;z-index: 100;
    }
    .page-component-container:hover .container-dashed{
        display: block;
    }
    .page-component-container .container-solid{
        position: absolute;top: 0;left: 0;right: 0;bottom: 0;border: solid 1px red;z-index: 100;
    }
    .page-component-container .event-none{
        pointer-events: none;
    }
    .page-component-container .container-tab{
        position: absolute;top: 0;right: 0;display: flex;align-items: center;justify-content: center;
        width: 80px;height: 24px;font-size: 12px;color: #333;background-color: red;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .page-component-container .container-tab::after{
        content: "";position: absolute;right: 100%;top: 4px;width: 0;height: 0;border-width: 5px;
        border-style: solid;border-color: transparent;margin-bottom: -1px;border-right-width: 5px;
        border-right-color: currentColor;color: red;
    }
    .page-component-container .container-tab .tab-icon{
        color: #969799;cursor: pointer;
    }
    .page-component-container .container-tab .tab-icon:hover{
        color: #87888a;
    }
</style>
