<template>
    <div class="mall-home">
        <div class="home-center-content">
            <!-- 顶部区域 -->
            <div class="mall-header"></div>
            <!-- 内容区域 -->
            <div class="flex-container flex-space-between mall-content">
                <!-- 组件区域 -->
                <div class="mall-component">
                    <div class="component-content">
                        <draggable v-model="$initializing" :options="dragLeftOptions" :clone="handleClone">
                            <div v-for="(item, index) in $initializing" :key="index" class="component-item">
                                <i class="iconfont" :class="item.icon"></i>
                                <span class="f13">{{item.name}}</span>
                            </div>
                        </draggable>
                    </div>
                </div>
                <!-- 页面区域 -->
                <div class="mall-page">
                    <div class="page-content">
                        <div class="page-component-sort">
                            <draggable v-model="pageComponentList" :options="dragRightOption" class="page-component-list">
                                <widget-shape v-for="item in pageComponentList" :key="item.id" :widget="item">
                                    <!-- v-bind自动传值组件中的props对应的属性, 例如item:{component:'',icon:'',id:'',imageStyle:'',imageValue:'',name:''}-->
                                    <component :is="item.component" v-bind="item"></component>
                                </widget-shape>
                            </draggable>
                        </div>
                    </div>
                </div>
                <!-- 配置区域 -->
                <div class="mall-style">
                    <div v-if="currentComponentSchema">
                        <widget-config v-model="currentComponent" :schema="currentComponentSchema"></widget-config>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'Index',
        data () {
            return{
                // 页面中的组件列表
                pageComponentList:[],
                // 当前选中的组件
                currentComponent: null
            }
        },

        provide() {
            return {
                controller: this
            };
        },

        computed: {
            /**
             * 左侧组件拖拽的选项
             *
             * @returns {{ghostClass: string, animation: number, group: {pull: string, name: string, put: boolean}}}
             */
            dragLeftOptions() {
                return {
                    animation: 300,
                    group: {name: "description", pull: 'clone', put: false},
                    ghostClass: "ghost",
                };
            },

            /**
             * 右侧组件拖拽的选项
             *
             * @returns {{animation: number, group: string}}
             */
            dragRightOption(){
                return {
                    animation: 300,
                    group: "description",
                };
            },

            /**
             * 当前选中组件的配置器
             *
             * @returns {*}
             */
            currentComponentSchema() {
                if(this.currentComponent && this.currentComponent.component){
                    // console.log(this.$fields[this.currentComponent.component]);
                    return this.$fields[this.currentComponent.component];
                }
            },
        },

        methods:{
            /**
             * 拖拽的过程中克隆元素
             *
             * @param model
             * @returns {{[p: string]: *}}
             */
            handleClone:function(model){
                return {
                    id: this.$getRandomCode(8),
                    ...this.$lodash.cloneDeep(model)
                };
            }
        }
    }
</script>

<style scoped>
    .page-component-list{
        width: 100%;height: 100%;text-align: center;
    }
</style>
