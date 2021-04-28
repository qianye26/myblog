<template>
  <div>
    <div class="write">
      <div id="vditor" name="description"></div>
    </div>
  </div>
</template>

<script>
import Vditor from 'vditor'
import 'vditor/dist/index.css'

export default {
  name: '',
  props: {
    height: {
      type: Number
    },
    name: {
      type: String
    }
  },
  data () {
    return {}
  },
  mounted () {
    let height = this.height
    let name = this.name
    console.log(height);
    this.contentEditor = new Vditor('vditor', {
      height,
      toolbarConfig: {
        pin: true,
      },
      cache: {
        enable: false,
      },
      preview: {
        maxWidth: 1000,
      },
      after: () => {
        this.contentEditor.setValue('')
      },
    })
  },
  methods: {
  }
}
</script>

<style lang="" scoped>
</style>
