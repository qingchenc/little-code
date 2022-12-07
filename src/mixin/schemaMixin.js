// +----------------------------------------------------------------------
// | 配置组件使用的mixin
// +----------------------------------------------------------------------
// | date: 2022-11-28 18:06
// +----------------------------------------------------------------------
// | Author: 清晨 <1849003043@qq.com>
// +----------------------------------------------------------------------

export default {
    data() {
        return {
            // 如有默认options配置，则在调用组件重新定义此变量
            defaultOptions: {},
            mValue: null
        }
    },
    
    props: {
        id: {},
        value: {},
        label: {
            type: String,
        },
        options: {
            type: Object,
            default: function(){}
        }
    },
    
    computed: {
        mOptions() {
            return { ...this.defaultOptions, ...this.options }
        }
    },
    
    watch: {
        value: {
            immediate: true,
            deep:true,
            handler(newVal,oldVal) {
                this.mValue = this.value;
            }
        },
        mValue: {
            handler() {
                this.$emit("input", this.mValue);
                this.$emit("change", this.mValue);
            }
        }
    },

    created () {
        console.log('右侧配置组件：created');
    },

    destroyed () {
        console.log('右侧配置组件：destroyed');
    }
}