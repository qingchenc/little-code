<!--
+----------------------------------------------------------------------
| 组件-图文导航
+----------------------------------------------------------------------
| date: 2022-11-10 10:47
+----------------------------------------------------------------------
| Author: 清晨 <1849003043@qq.com>
+----------------------------------------------------------------------
| GitHub: https://github.com/shenshulong
+----------------------------------------------------------------------
-->

<template>
    <div class="wrap" :style="$getStyle(styles)">
        <div class="wrap-body" :style="getWrapStyle()">
            <ul class="tabs" :style="getTabsStyle()">
                <li v-for="item in tabList" :key="item.id" class="tab-item" :style="geItemStyle()">
                    <img v-show="['image', 'image-text'].includes(attrs.type)" class="tab-item-img" :style="geItemImgStyle()" :src="item.image || defaultImage" />
                    <span v-show="['text', 'image-text'].includes(attrs.type)" class="ellipsis-1">{{ item.label }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'LcTab',

        props: {
            styles: {
                type: Object,
                default: function(){
                    return {}
                }
            },
            attrs: {
                type: Object,
                default: function(){
                    return {}
                }
            },
            tabList: {
                type: Array,
                default: function(){
                    return []
                }
            }
        },

        data() {
            return {
                fixed: true,
                defaultImage: 'https://img01.yzcdn.cn/public_files/2019/03/05/2b60ed750a93a1bd6e17fc354c86fa78.png!large.webp'
            }
        },

        computed: {
            itemWidth() {
                return ((375 - this.styles.pagePadding * 2 - this.styles.imgPadding) / this.attrs.max)
            }
        },

        methods: {
            // 容器样式
            getWrapStyle() {
                return {
                    overflowX: this.attrs.model == 'fixed' ? 'hidden' : 'auto',
                    ...this.$getStyle(this.styles)
                }
            },

            // tabs 样式
            getTabsStyle() {
                return {
                    width: this.$pxTorem(this.itemWidth * this.tabList.length + this.styles.imgPadding),
                    padding: `0 ${this.$pxTorem(this.styles.imgPadding / 2)}`
                }
            },

            // 单项样式
            geItemStyle() {
                return {
                    width: this.$pxTorem(this.itemWidth),
                    padding: this.$pxTorem(this.styles.imgPadding / 2),
                    color: this.styles.titleColor
                }
            },

            // 单项图片样式
            geItemImgStyle() {
                return {
                    width: `${this.styles.imgWidth}%`,
                    borderRadius: this.$pxTorem(this.styles.imgRadius),
                    marginBottom: this.attrs.type == 'image-text' ? '5px' : 0
                }
            }
        }
    }
</script>

<style scoped>
    .wrap .wrap-body .tabs .tab-item {
        display: inline-block;text-align: center;
    }
    .wrap .wrap-body .tabs .tab-item .tab-item-img {
        height: 100%;
    }
</style>
