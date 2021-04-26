<template>
  <div class="about">
    <!-- 面包屑 -->
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>关于</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 内容区 -->
    <div class="content">待开发</div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {}
  },
}
</script>

<style lang="less" scoped>
.about {
  width: 1250px;
  height: 1000px;
  padding-bottom: 40px;
  position: relative;
  .breadcrumb {
    position: absolute;
    top: -27px;
  }
  .content {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
}
</style>
