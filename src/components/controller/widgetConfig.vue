<!--
+----------------------------------------------------------------------
| 物料容器的样式配置项
+----------------------------------------------------------------------
| date: 2022-11-28 15:40
+----------------------------------------------------------------------
| Author: 清晨 <1849003043@qq.com>
+----------------------------------------------------------------------
-->

<template>
    <div class="widget-config-content">
        <ul>
            <li v-for="(item, key, index) in schema" :key="index">
                <component :key="index" :is="getComponents(item.type)" v-model="value[key]" v-bind="item" :schema="item">
                    <widget-config v-if="item.child" :value="value[key]" :schema="item.child"></widget-config>
                </component>
            </li>
        </ul>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: "widgetConfig",

        data:function(){
            return {}
        },

        props: {
            value: {
                typeof: Object,
                default: function(){
                    // {component:"LcImg"icon:"el-icon-picture"id:"16703176288",imageStyle:{},imageValue:{},name:'图片'}
                    // {width:"100%",height:"auto",radius:0,fit:"fill"}
                    return {}
                }
            },
            schema: {
                typeof: Object,
                default: function(){
                    // {imageStyle:{child:{},label:'',type:''},imageValue:{child:{},label:'',type:''}}
                    // {width:'',height:'',radius:'',fit:'',...}
                    return {}
                }
            }
        },

        methods: {
            /**
             * 获取完整的组件名称
             *
             * @param type
             * @returns {string}
             */
            getComponents(type){
                if(type){
                    return 'schema-'+type;
                }
            }
        }
    }
</script>