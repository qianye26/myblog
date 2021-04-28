import $http from './http'

// 获取网站信息
export const getInfo = () => $http.get('/info')

// 获取分类列表
export const getCate = () => $http.get('/cate?rows=5&page=1')

// 获取文章列表   必须参数有 page页码   rows每页条数
export const getArticle = (obj) => $http.get('/article', obj)

// 根据分类id 获取 该类所有文章
export const getArticleByCateId = (obj) => $http.get('/article/findByCateId', obj)

// 根据文章id  获取文章详细数据
export const getArticleDetail = (id) => $http.get('/article/' + `${id}`)

// 添加文章
export const addArticle = (obj) => $http.post('/article/', obj)