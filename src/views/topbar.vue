<template>
  <div class="topbar">
    <div class="title">
      <div class="main">
        <span>{{ infolist.title }}</span>
      </div>
      <div class="sub">
        <span>{{ infolist.subtitle }}</span>
      </div>
    </div>
    <div class="nav">
      <ul>
        <li @click="tohome">
          <div>主页</div>
        </li>
        <li @click="toabout">
          <div>关于</div>
        </li>
        <li>
          <div>归档</div>
        </li>
      </ul>
    </div>
    <div class="search">
      <i class="el-icon-search"></i>
      <input type="text" placeholder="搜索" />
    </div>
  </div>
</template>

<script>
import { getInfo, getCate, getArticle } from '@/network/api.js'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'topbar',
  data () {
    return {
      infolist: {},
      queryList: {
        page: 1,
        rows: 3
      },
      cateid: 0
    }
  },
  computed: {
    ...mapState(['articlelist', 'totalNum'])
  },
  created () {
    this.getBlogInfo()
  },
  methods: {
    ...mapMutations(['updateArticleList', 'updateTotalNum']),
    // 获取博客信息
    async getBlogInfo () {
      const res = await getInfo()
      this.infolist = res.data.data
    },
    // 获取文章列表
    async getArticleList () {
      const res = await getArticle({ params: this.queryList })
      const resAry = res.data.data.list
      this.updateArticleList(resAry)
      this.updateTotalNum(res.data.data.count)
    },
    // 点击主页
    tohome () {
      if (this.$route.path === '/index') {
        this.getArticleList()
        return
      } else {
        this.$router.push('/index')
      }
    },

    //  点击关于
    toabout () {
      if (this.$route.path === '/about') {
        this.getArticleList()
        return
      } else {
        this.$router.push('/about')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.topbar {
  width: 100%;
  min-width: 960px;
  height: 200px;
  background-color: #2ca6cb;
  position: relative;
  .title {
    position: absolute;
    left: 150px;
    top: 40px;
    color: #fff;
    .main {
      font-size: 40px;
    }
    .sub {
      font-size: 18px;
      margin-top: 15px;
    }
  }
  .nav {
    position: absolute;
    color: #fff;
    font-size: 20px;
    top: 110px;
    right: 220px;
    ul {
      display: flex;
      list-style: none;
      li {
        padding: 20px 40px;
        cursor: pointer;
      }
    }
  }
  .search {
    position: absolute;
    right: 10px;
    bottom: 20px;
    i {
      font-size: 20px;
      font-weight: bold;
      color: #fff;
      position: absolute;
      left: 7px;
      top: 5px;
    }
    input {
      height: 26px;
      width: 150px;
      line-height: 26px;
      padding-left: 30px;
      outline: none;
      color: #fff;
      border: 1px solid #fff;
      background-color: transparent;
      &::-webkit-input-placeholder {
        color: #fff;
      }
    }
  }
}
</style>
