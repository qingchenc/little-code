<!--
+----------------------------------------------------------------------
| 组件-图片
+----------------------------------------------------------------------
| date: 2022-11-09 10:47
+----------------------------------------------------------------------
| Author: 清晨 <1849003043@qq.com>
+----------------------------------------------------------------------
| GitHub: https://github.com/shenshulong
+----------------------------------------------------------------------
-->

<template>
    <div class="component-image">
        <el-image :src="imagePath || defaultImage" :fit="fit" :style="{width: width,height: height,paddingLeft: paddingLeft,paddingRight: paddingLeft,paddingTop: paddingTop,paddingBottom: paddingBottom,borderRadius: radius}"></el-image>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: "LcImg",

        props: {
            imageValue: {
                type: Object,
                default: function(){
                    return {};
                }
            },
            imageStyle: {
                type: Object,
                default: function(){
                    return {};
                }
            }
        },

        computed: {
            imagePath: function(){
                return this.imageValue.imagePath;
            },
            radius: function(){
                return this.imageStyle.radius + 'px';
            },
            paddingLeft: function(){
                return this.imageStyle.paddingLeft + 'px';
            },
            paddingTop: function(){
                return this.imageStyle.paddingTop + 'px';
            },
            paddingBottom: function(){
                return this.imageStyle.paddingBottom + 'px';
            },
            width: function(){
                return this.imageStyle.width;
            },
            height: function(){
                return this.imageStyle.height;
            },
            fit: function(){
                return this.imageStyle.fit;
            }
        },

        data() {
            return {
                defaultImage: "https://img01.yzcdn.cn/public_files/2019/03/05/2b60ed750a93a1bd6e17fc354c86fa78.png",
            };
        }
    };
</script>
