// +----------------------------------------------------------------------
// | 项目入口文件
// +----------------------------------------------------------------------
// | date: 2022-11-08 15:07
// +----------------------------------------------------------------------

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import 'amfe-flexible';

/**
 * lodash
 */
import lodash from 'lodash'
Vue.prototype.$lodash = lodash

/**
 * vuedraggable
 */
import draggable from "vuedraggable"
Vue.component("draggable", draggable)

import '@/utils/getLeftComponent.js'
import '@/utils/globalRegisterComponent.js'

/**
 * globalMethods
 */
import globalMethods from '@/utils/globalMethods'
Vue.use(globalMethods)

/**
 * ElementUI
 */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

/**
 * utils
 */
import $utils from '@/utils/utils'
Vue.prototype.$util = $utils

/**
 * eslint-disable no-new
 */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
