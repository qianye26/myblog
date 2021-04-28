<template>
  <div class="articlelist">
    <div class="article" v-for="item in articlelist" :key="item.id">
      <div class="title">
        <span @click="toDetail(item.id)">{{ item.title }}</span>
        <div class="create_time">
          <i class="el-icon-time"></i>
          <span> 发表于 {{ item.createdAt }}</span>
        </div>
      </div>
      <div class="desc">
        <span class="desc_text" v-html="item.desc"> </span>
        <div class="more" @click="toDetail(item.id)">
          <span>更多</span>
        </div>
      </div>
      <div class="below">
        <div class="cate" @click="toCate(item.cate)">
          <i class="el-icon-folder"></i>
          <span>{{ item.cateName }}</span>
        </div>
        <div class="comment">
          <i class="el-icon-chat-round"></i>
          <span>暂无评论</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  },
  props: {
    articlelist: {
      type: Array
    }
  },
  methods: {
    // 进入文章详情页
    toDetail (id) {
      this.$router.push('/detail/' + id)
      window.scrollTo(0, 0)
    },
    // 点击文章的 分类名
    toCate (cateid) {
      this.$router.push('/cate/' + cateid)
      window.scrollTo(0, 0)
    }
  },
}
</script>

<style lang="less" scoped>
.article {
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  margin-bottom: 10px;
  transition: all 0.5s;
  &:hover {
    box-shadow: 0 0 3px 3px #fff;
  }
  .title {
    position: relative;
    height: 80px;
    border-bottom: 1px solid #ebeef5;
    span:nth-child(1) {
      display: inline-block;
      font-size: 22px;
      margin-left: 30px;
      margin-top: 20px;
      &:hover {
        cursor: pointer;
        color: #2ca6cb;
      }
    }
    .create_time {
      position: absolute;
      right: 10px;
      bottom: 10px;
      color: #666;
    }
  }
  .desc {
    // height: 150px;
    min-height: 150px;
    border-bottom: 1px solid #ebeef5;
    position: relative;
    .desc_text {
      display: block;
      padding: 10px 30px 8px;
      font-size: 18px;
      line-height: 30px;
      text-indent: 2em;
      text-align: justify;
    }
    .more {
      cursor: pointer;
      font-size: 14px;
      position: absolute;
      border: 1px solid #ccc;
      padding: 5px 10px;
      border-radius: 10px;
      bottom: 10px;
      right: 35px;
      background-color: #f3f3f3;
      &:hover {
        color: #fff;
        background-color: #2ca6cb;
      }
    }
  }
  .below {
    height: 68px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    .cate {
      span {
        margin-left: 5px;
      }
      &:hover {
        color: #2ca6cb;
        cursor: pointer;
      }
    }
    .comment {
      span {
        margin-left: 5px;
      }
    }
  }
  &:after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
  }
}
</style>
