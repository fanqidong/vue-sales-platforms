<template>
  <div class="home-page">
    <div class="side-bar left-content">
      <div class="side-content">
        <h2 class="side-title">全部产品</h2>
        <div class="side-product" v-for="(item,index1) in productList" :key="index1">
          <h3 class="product-title">{{item.title}}</h3>
          <ul class="product-list">
            <li v-for="(product,index2) in item.list" :key="index2">
              <a :href="product.url" class="product-link" target="_blank">{{product.name}}</a>
              <span class="product-hot" v-if="product.hot">hot</span>
            </li>
          </ul>
          <div class="side-line" v-show="!item.last"></div>
        </div>
      </div>
      <div class="side-content">
        <h2 class="side-title">最新消息</h2>
        <ul class="news-list">
          <li v-for="(product,index3) in newsList" :key="index3">
            <a :href="product.url" class="product-link" target="_blank">{{product.title}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="right-content">
      <swiper :duration="duration" :slides="swiperSlides"></swiper>
      <ul class="goods-list">
        <li
          :class="['goods-item',{'goods-item-last':index%2!==0}]"
          v-for="(item,index) in goodsList"
          :key="index"
        >
          <div class="goods-inner">
            <h3 class="goods-title">{{item.title}}</h3>
            <p class="goods-intro">{{item.description}}</p>
            <router-link class="goods-btn" :to="{path:'detail/'+item.toKey}">立即购买</router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import swiper from "../components/swiper";
export default {
  name: "home",
  data() {
    return {
      newsList: [],
      duration: 3000,
      swiperSlides: [
        {
          src: require("../assets/slideShow/pic1.jpg"),
          title: "xxx1",
          href: "detail/analysis"
        },
        {
          src: require("../assets/slideShow/pic2.jpg"),
          title: "xxx2",
          href: "detail/count"
        },
        {
          src: require("../assets/slideShow/pic3.jpg"),
          title: "xxx3",
          href: "http://baidu.com"
        },
        {
          src: require("../assets/slideShow/pic4.jpg"),
          title: "xxx4",
          href: "detail/forecast"
        }
      ],
      productList: {
        pc: {
          title: "PC产品",
          list: [
            {
              name: "数据统计",
              url: "http://starcraft.com"
            },
            {
              name: "数据预测",
              url: "http://warcraft.com"
            },
            {
              name: "流量分析",
              url: "http://overwatch.com",
              hot: true
            },
            {
              name: "广告发布",
              url: "http://hearstone.com"
            }
          ]
        },
        app: {
          title: "手机应用类",
          last: true,
          list: [
            {
              name: "91助手",
              url: "http://weixin.com"
            },
            {
              name: "产品助手",
              url: "http://twitter.com",
              hot: true
            },
            {
              name: "智能地图",
              url: "http://maps.com"
            },
            {
              name: "团队语音",
              url: "http://phone.com"
            }
          ]
        }
      },
      goodsList: [
        {
          title: "开放产品",
          description: "开放产品是一款开放产品",
          id: "car",
          toKey: "count",
          saleout: false
        },
        {
          title: "品牌营销",
          description: "品牌营销帮助你的产品更好地找到定位",
          id: "earth",
          toKey: "forecast",
          saleout: false
        },
        {
          title: "使命必达",
          description: "使命必达快速迭代永远保持最前端的速度",
          id: "loud",
          toKey: "analysis",
          saleout: true
        },
        {
          title: "勇攀高峰",
          description: "帮你勇闯高峰，到达事业的顶峰",
          id: "hill",
          toKey: "publish",
          saleout: false
        }
      ]
    };
  },
  components: {
    swiper
  },
  created() {
    this.getNewsList();
  },
  methods: {
    async getNewsList() {
      try {
        let res = await this.$axios.get("/getNewsList");
        if (res.status === 200) {
          this.newsList = res.data;
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.home-page {
  margin-top: 20px;
}
.right-content {
  width: 900px;
  float: right;
}
.side {
  &-content {
    background: #fff;
    min-height: 300px;
    &:first-of-type {
      margin-bottom: 20px;
    }
  }
  &-bar {
    width: 250px;
    float: left;
  }
  &-title {
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }
  &-line {
    background: #e2d1d1;
    margin: 0 0 15px;
    height: 1px;
  }
}
.news-list {
  margin: -10px 0 10px 0;
  padding: 0 15px;
  li {
    padding: 6px 5px;
  }
}
.product {
  &-title {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }
  &-hot {
    background: red;
    padding: 3px 10px;
    color: #fff;
    margin-left: 10px;
  }
  &-list {
    padding: 10px 15px;
    li {
      padding: 5px;
    }
  }
  &-link:hover {
    text-decoration: underline;
  }
}
.goods {
  &-list {
    margin-top: 30px;
    .goods-inner {
      padding-left: 150px;
      background: 10px 0 no-repeat;
    }
    li:first-child {
      .goods-inner {
        background-image: url(../assets/images/1.png);
      }
    }
    li:nth-child(2) {
      .goods-inner {
        background-image: url(../assets/images/2.png);
      }
    }
    li:nth-child(3) {
      .goods-inner {
        background-image: url(../assets/images/3.png);
      }
    }
    li:last-child {
      .goods-inner {
        background-image: url(../assets/images/4.png);
      }
    }
  }
  &-item {
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    &-last {
      margin-right: 0;
    }
  }
  &-title {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }
  &-btn {
    margin-top: 20px;
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }
}
</style>

