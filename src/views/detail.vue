<template>
  <div class="detail">
    <div class="container">
      <div class="info">
        <div class="title">{{ detaillist.title }}</div>
        <div class="cate">
          <span>分类：</span>
          <span class="cateName" @click="toCateList(detaillist.cate)">{{
            detaillist.cateName
          }}</span>
        </div>
        <div class="time">
          <span>发表于 {{ detaillist.createdAt }}</span>
        </div>
      </div>
      <div class="content">
        {{ detaillist.content }}
      </div>
    </div>
  </div>
</template>

<script>
import { getArticleDetail } from '@/network/api.js'

export default {
  name: 'detail',
  data () {
    return {
      detaillist: {},
      id: 0
    }
  },
  created () {
    this.getDetail()
  },
  methods: {
    // 页面加载时 获取文章详细数据
    async getDetail () {
      this.id = this.$route.params.id
      const res = await getArticleDetail(this.id)
      this.detaillist = res.data.data
    },
    // 点击文章的 分类 
    toCateList (cateid) {
      this.$router.push('/cate/' + cateid)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 1050px;
  height: 1000px;
  padding-bottom: 40px;
  position: relative;
  background-color: #fff;
  padding: 30px 100px;
  .info {
    overflow: hidden;
    margin-bottom: 40px;
    .title {
      text-align: center;
      font-size: 40px;
      margin-bottom: 40px;
    }
    .cate {
      float: left;
      .cateName {
        &:hover {
          cursor: pointer;
          color: #2ca6cb;
        }
      }
    }
    .time {
      float: right;
    }
  }
  .content {
    text-indent: 2em;
  }
}
</style>
