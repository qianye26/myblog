export default {
  // 修改 文章列表 articlelist
  updateArticleList (state, currentList) {
    state.articlelist = currentList
  },
  // 修改 总条数 totalNum
  updateTotalNum (state, allCount) {
    state.totalNum = allCount
  }
}