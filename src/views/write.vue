<template>
  <div class="write">
    <div class="title">
      <el-form ref="form" :model="query" label-width="80px">
        <el-form-item label="文章标题">
          <el-input v-model="query.title"></el-input>
        </el-form-item>
        <el-form-item label="选择分类">
          <el-select v-model="query.cate" placeholder="请选择文章分类">
            <el-option label="技术文章" value="1"></el-option>
            <el-option label="生活随笔" value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <el-tag size="medium">描述</el-tag>
    <div id="descvditor" name="desc"></div>
    <el-tag size="medium">内容</el-tag>
    <div id="contentvditor" name="content"></div>
    <div class="btu" @click="save">
      <el-button>保存</el-button>
    </div>
  </div>
</template>

<script>
import Vditor from 'vditor'
import 'vditor/dist/index.css'
import { addArticle } from '@/network/api.js'

export default {
  name: '',
  data () {
    return {
      query: {
        title: '',
        content: '',
        cate: '',
        desc: ''
      }
    }
  },
  components: {
  },
  mounted () {
    this.descEditor = new Vditor('descvditor', {
      height: 240,
      toolbarConfig: {
        pin: true,
      },
      cache: {
        enable: false,
      },
      preview: {
        maxWidth: 1000,
      }
    }),
      this.contentEditor = new Vditor('contentvditor', {
        height: 500,
        toolbarConfig: {
          pin: true,
        },
        cache: {
          enable: false,
        },
        preview: {
          maxWidth: 1000,
        }
      })
  },
  methods: {
    save () {
      let descValue = this.descEditor.getValue()
      let contentValue = this.contentEditor.getValue()
      if (!this.query.title.trim()) {
        this.$message.error('标题不能为空！')
      } else if (!this.query.cate) {
        this.$message.error('请选择分类1')
      } else if (!descValue.trim()) {
        this.$message.error('描述不能为空！')
      } else if (!contentValue.trim()) {
        this.$message.error('内容不能为空！')
      } else {
        this.$confirm('是否保存文章', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '保存成功!'
          });
          this.query.cate = parseInt(this.query.cate)
          this.query.desc = descValue
          this.query.content = contentValue
          this.addToArticle()   //保存文章到数据库
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消保存'
          });
        });
      }
    },
    async addToArticle () {
      let res = await addArticle(this.query)
      console.log(res);
    }
  }
}
</script>

<style lang="less" scoped>
.write {
  flex: 5;
  min-width: 640px;
  height: 1000px;
  margin: 0 20px;
  position: relative;
}
</style>
