import Vue from 'vue'
import {
  Button,
  Message,
  Pagination,
  Breadcrumb,
  BreadcrumbItem
} from 'element-ui'

// 引入elementUI 组件
Vue.use(Button)
Vue.use(Pagination)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)

Vue.prototype.$message = Message;

