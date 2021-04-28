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
      <div class="content" v-html="detaillist.content"></div>
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
      let obj = res.data.data
      console.log(obj);
      let converter = new showdown.Converter()  //初始化转换器
      let content = converter.makeHtml(obj.content)
      obj.content = content
      this.detaillist = obj
    },
    // 点击文章的 分类 
    toCateList (cateid) {
      this.$router.push('/cate/' + cateid)
    }
  }
}
</script>

<style lang="less" scoped>
.detail {
  flex: 5;
  min-width: 640px;
  height: 1000px;
  margin: 0 20px;
  position: relative;
  background-color: #fff;
  .container {
    position: relative;
    padding: 30px;
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
}
</style>
