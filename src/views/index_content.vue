<template>
  <div class="index_content">
    <articlelist :articlelist="articlelist"></articlelist>
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
import { getArticle } from '@/network/api.js'
import articlelist from '@/components/articlelist.vue'

export default {
  name: 'index_content',
  data () {
    return {
      queryList: {
        page: 1,
        rows: 3
      }
    }
  },
  components: {
    articlelist
  },
  created () {
    this.getArticleList()
  },
  methods: {
    ...mapMutations(['updateArticleList', 'updateTotalNum']),
    // 获取文章列表
    async getArticleList () {
      const res = await getArticle({ params: this.queryList })
      console.log(res);
      let resAry = res.data.data.list
      this.updateArticleList(resAry)
      this.updateTotalNum(res.data.data.count)
    },
    // 点击下一页
    nextPage () {
      this.queryList.page++
      this.getArticleList()
    },
    // 点击上一页
    prevPage () {
      this.queryList.page--
      this.getArticleList()
    },
    // 直接点击页数
    pageChange (page) {
      this.queryList.page = page
      this.getArticleList()
    }
  },
  computed: {
    ...mapState(["articlelist", "totalNum"])
  }
}
</script>

<style lang="less" scoped>
.index_content {
  flex: 5;
  min-width: 640px;
  margin: 0 20px 50px;
  position: relative;
  .pagination {
    text-align: center;
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>
