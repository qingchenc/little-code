// +----------------------------------------------------------------------
// | 全局注册页面组件
// +----------------------------------------------------------------------
// | date: 2022-11-15 09:47
// +----------------------------------------------------------------------
// | Author: 清晨 <1849003043@qq.com>
// +----------------------------------------------------------------------

import Vue from 'vue'

// 注册所有物料属性参数与初始值
registerComponentsSchema()

// 获取所有自定义组件schema
function registerComponentsSchema () {
    let files        = require.context('@/components/templateComponent', true, /component.json$/);
    let fields       = {};
    let initializing = [];

    files.keys().forEach(function(key) {
        let [dir, name] = key.split('/');

        let config = {
            component: name,
            ...files(key)
        }

        fields[name] = config.fields;
        
        initializing.push(initDefaultValue(config));
    });

    Vue.prototype.$fields       = fields;
    Vue.prototype.$initializing = initializing;
}

// 初始化组件初始数据
function initDefaultValue (config) {
    let { component, name, icon, fields } = config;
    let temp = { component, name, icon };
    setDefaultValue(fields, temp);

    return temp;
}

// 递归设置各层级初始数据
function setDefaultValue (fields, initializing) {
    for (let key in fields) {
        let { type, value, child } = fields[key]
        if (type == 'object') {
            initializing[key] = {}
            child && setDefaultValue(fields[key].child, initializing[key])
        } else {
            initializing[key] = value
        }
    }

    return initializing
}