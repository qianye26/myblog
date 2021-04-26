<template>
  <div class="index">
    <!-- 顶部导航栏 -->
    <topbar></topbar>
    <div class="w">
      <div class="main">
        <!-- 内容区 -->
        <router-view></router-view>
        <!-- 侧边区域 -->
        <sidebar></sidebar>
      </div>
    </div>
  </div>
</template>

<script>
import topbar from '@/views/topbar.vue'
import sidebar from '@/views/sidebar.vue'

export default {
  name: 'index',
  components: { topbar, sidebar },
  data () {
    return {}
  },
}
</script>

<style lang="less" scoped>
.w {
  width: 1600px;
  margin: 0 auto;
}
.index {
  overflow: hidden;
  background-color: #f3f3f3;
  .main {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
  }
}
</style>
