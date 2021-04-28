<template>
  <div class="category">
    <div class="cateNav">
      <ul>
        <li :class="activeIndex === 0 ? 'active' : ''" @click="allclick">
          所有文章
        </li>
        <li
          :class="item.id === activeIndex ? 'active' : ''"
          v-for="item in catelist"
          :key="item.id"
          @click="navClick(item.id)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getCate, getArticle } from '@/network/api.js'
import { mapMutations } from 'vuex'

export default {
  name: '',
  data () {
    return {
      catelist: [],
      queryList: {
        page: 1,
        rows: 3
      },
      activeIndex: 0
    }
  },
  created () {
    this.getCateList()
    this.getUrlParams()
  },
  methods: {
    ...mapMutations(['updateArticleList', 'updateTotalNum']),
    // 获取分类列表
    async getCateList () {
      const res = await getCate()
      this.catelist = res.data.data.list
    },
    // 获取文章列表
    async getArticleList () {
      const res = await getArticle({ params: this.queryList })
      const resAry = res.data.data.list
      this.updateArticleList(resAry)
      this.updateTotalNum(res.data.data.count)
    },
    // 刷新页面 如果url有分类id、 赋值给activeIndex
    getUrlParams () {
      let cateid = parseInt(this.$route.params.cateid)
      console.log(cateid);
      if (cateid) {
        this.activeIndex = cateid
      } else {
        this.activeIndex = 0
      }
    },
    // 点击导航栏的 分类
    navClick (id) {
      this.activeIndex = id
      this.$router.push('/cate/' + id)
    },
    // 点击所有文章 
    allclick () {
      this.activeIndex = 0
      if (this.$route.path === '/index') {
        this.getArticleList()
        return
      } else {
        this.$router.push('/index')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.category {
  display: flex;
  justify-content: center;
  flex: 1;
  .cateNav {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        width: 140px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        background-color: #fff;
        cursor: pointer;
        font-size: 16px;
        margin-bottom: 1px;
        &:hover {
          color: #48dbfb;
        }
      }
      .active {
        background-color: #48dbfb;
        color: #fff !important;
      }
    }
  }
}
</style>
