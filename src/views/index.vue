<template>
  <div class="index">
    <!-- 顶部导航栏 -->
    <topbar></topbar>
    <div class="main">
      <div class="left">
        <!-- 左侧分类区 -->
        <catenav></catenav>
        <!-- 内容区 -->
        <router-view></router-view>
      </div>
      <div class="right">
        <!-- 侧边区域 -->
        <sidebar></sidebar>
      </div>
    </div>
    <operate class="operate"></operate>
  </div>
</template>

<script>
import topbar from '@/views/topbar.vue'
import sidebar from '@/views/sidebar.vue'
import catenav from '@/views/catenav.vue'
import operate from '@/views/operate.vue'

export default {
  name: 'index',
  components: { topbar, sidebar, catenav, operate },
  data () {
    return {}
  },
}
</script>

<style lang="less" scoped>
.index {
  overflow: hidden;
  background-color: #f3f3f3;
  .main {
    margin-top: 16px;
    display: flex;
    .left {
      flex: 3;
      display: flex;
    }
    .right {
      flex: 1;
    }
  }
}

.operate {
  position: absolute;
  top: 400px;
  left: 75px;
}
</style>
