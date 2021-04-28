<template>
  <div class="operate">
    <el-button @click="toWrite">写文章</el-button>
  </div>
</template>

<script>
export default {
  name: 'operate',
  data () {
    return {}
  },
  methods: {
    toWrite () {
      this.$router.push('/write')
    }
  },
}
</script>

<style lang="" scoped>
</style>
