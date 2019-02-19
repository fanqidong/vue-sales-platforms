<template>
  <div class="detail detail-wrapper clearfix">
    <div class="detail-sidebar f-l">
      <img :src="currentImg"  class="detail-img" />
      <ul class="link-list">
        <router-link
          active-class="active"
          tag="li"
          v-for="(item,index) in products"
          :to="{path:item.path}"
          :key="index"
        >{{item.name}}</router-link>
      </ul>
    </div>
    <div class="detail-content f-l">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: "数据统计",
          path: "count",
          active: false
        },
        {
          name: "数据预测",
          path: "forecast",
          active: false
        },
        {
          name: "流量分析",
          path: "analysis",
          active: false
        },
        {
          name: "广告发布",
          path: "publish",
          active: false
        }
      ],
      imgList: {
        "/detail/count": require("../assets/images/1.png"),
        "/detail/forecast": require("../assets/images/2.png"),
        "/detail/analysis": require("../assets/images/3.png"),
        "/detail/publish": require("../assets/images/4.png")
      }
    };
  },
  computed: {
    currentImg() {
      return this.imgList[this.$route.path];
    }
  }
};
</script>

<style lang="scss" scoped>
.detail {
  &-wrapper {
    margin-top: 20px;
  }
  &-img{
      margin-top: 10px;
  }
  &-sidebar {
    width: 200px;
    margin-right: 20px;
    background: #fff;
    text-align: center;
  }
  .link-list {
      margin: 10px 0;
    li {
      padding: 10px 0;
      cursor: pointer;
      &.active{
        background: #4fc08d;
        color: #fff;
      }
    }
  }
}
</style>

