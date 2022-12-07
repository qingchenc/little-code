// +----------------------------------------------------------------------
// | 将组件都注册到全局组件中
// +----------------------------------------------------------------------
// | date: 2022-11-15 14:05
// +----------------------------------------------------------------------
// | Author: 清晨 <1849003043@qq.com>
// +----------------------------------------------------------------------

import Vue from 'vue'

// 注册所有全局组件
register(require.context('@/components/controller', true, /.vue/))

// 注册所有物料
register(require.context('@/components/templateComponent', true, /.vue/))

// 注册所有配置组件
register(require.context('@/components/templateConfig', true, /.vue/))

/**
 * 注册对应包下所有组件
 *
 * @param {*} path 包路径
 */
function register (context) {
    context.keys().forEach(cnt => {
        let component = context(cnt);
        let ctrl = component.default || component;
        let a    = ctrl.name;
        let b    = ctrl;
        
        // 注册组件
        Vue.component(a, b);
    });
}
