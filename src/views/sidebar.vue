<template>
  <div class="sidebar">
    <div class="blogger">
      <div class="photo">
        <img src="@/assets/images/head-photo.jpg" alt="" />
      </div>
      <div class="info">
        <span>博主：xx</span>
        <span>所在城市：广东 广州</span>
      </div>
      <div class="share">
        <div class="link">
          <a href="https://github.com/qianye26" target="_black">
            <img src="@/assets/images/github.png" alt="" />
          </a>
        </div>
        <div class="link bilibili">
          <a href="https://space.bilibili.com/1286518" target="_black">
            <img src="@/assets/images/bilibili.png" alt="" />
          </a>
        </div>
      </div>
    </div>
    <div class="recent">近期文章~待开发</div>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {}
  },
}
</script>

<style lang="less" scoped>
.sidebar {
  flex: 2;
  min-width: 360px;
  height: 500px;

  .blogger {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 10px 20px 0;
    padding: 5px 0;
    background-color: #fff;
    .photo {
      width: 50%;
      height: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      line-height: 25px;
      span {
        &:nth-child(1) {
          position: relative;
          left: -10px;
        }
      }
    }
    .share {
      display: flex;
      .link {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        margin: 5px 10px 5px;
        img {
          height: 100%;
          height: 100%;
        }
      }
    }
  }
  .recent {
    background-color: #fff;
  }
}

.bilibili {
  transform: scale(1.3);
}
</style>
