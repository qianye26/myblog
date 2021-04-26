<template>
  <div class="catelist">
    <!-- 面包屑 -->
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>{{ catename }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 文章区 -->
    <articlelist :articlelist="articlelist"></articlelist>
    <!-- 分页按钮 -->
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="totalNum"
        :page-size="3"
        @next-click="nextPage"
        @prev-click="prevPage"
        @current-change="pageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import articlelist from '@/components/articlelist.vue'
import { getArticleByCateId } from '@/network/api.js'

export default {
  name: 'catelist',
  data () {
    return {
      cateid: 0,
      queryList: {
        page: 1,
        rows: 3
      },
      catename: ''
    }
  },
  components: {
    articlelist
  },
  created () {
    // 获取动态路由参数 id
    this.cateid = this.$route.params.cateid
    this.getArticleList()
  },
  methods: {
    ...mapMutations(['updateArticleList', 'updateTotalNum']),
    // 根据分类id 查询该类 所有文章
    async getArticleList () {
      this.queryList.cateid = this.cateid
      const res = await getArticleByCateId({ params: this.queryList })
      console.log(res);
      const resAry = res.data.data.list
      this.updateArticleList(resAry)
      this.updateTotalNum(res.data.data.count)
      this.catename = resAry[0].cateName
    },
    nextPage () {
      this.queryList.page++,
        this.getArticleList()
    },
    prevPage () {
      this.queryList.page++,
        this.getArticleList()
    },
    pageChange (page) {
      this.queryList.page = page,
        this.getArticleList()
    }
  },
  computed: {
    ...mapState(["articlelist", "totalNum"])
  },
  watch: {
    '$route' (to, from) {
      //这样就可以获取到变化的参数了，然后执行参数变化后相应的逻辑就行了
      this.cateid = this.$route.params.cateid
      this.getArticleList()
    }
  }
}
</script>

<style lang="less" scoped>
.catelist {
  width: 1250px;
  height: 1000px;
  padding-bottom: 40px;
  position: relative;
  .breadcrumb {
    position: absolute;
    top: -27px;
  }
  .pagination {
    text-align: center;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>
