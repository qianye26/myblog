import Vue from 'vue'
import {
  Button,
  Message,
  Pagination,
  Breadcrumb,
  BreadcrumbItem,
  Input,
  Select,
  Form,
  FormItem,
  Option,
  Tag,
  MessageBox
} from 'element-ui'

// 引入elementUI 组件
Vue.use(Button)
Vue.use(Pagination)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Option)
Vue.use(Tag)

Vue.prototype.$confirm = MessageBox
Vue.prototype.$message = Message;

