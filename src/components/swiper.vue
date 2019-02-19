<template>
  <div class="swiper-container" @mouseenter="clearSwiper" @mouseleave="runSwiper">
    <div class="swiper-slide">
      <a :href="slides[nowIndex].href">
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src">
        </transition>
      </a>
    </div>
    <div class="swiper-button-box">
      <div class="swiper-button-prev swiper-button" @click="goTo(prevIndex)">&lt;</div>
      <div class="swiper-button-next swiper-button" @click="goTo(nextIndex)">&gt;</div>
    </div>
    <ul class="swiper-pagination">
      <li
        v-for="(item,index) in slides"
        :key="index"
        :class="{on:nowIndex===index}"
        @click="goTo(index)"
      >{{index+1}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "swiper",
  props: {
    duration: {
      default: 1000,
      type: Number
    },
    slides: {
      type: Array
    }
  },
  data() {
    return {
      nowIndex: 0,
      isShow: true
    };
  },
  computed: {
    prevIndex() {
      return this.nowIndex === 0 ? this.slides.length - 1 : this.nowIndex - 1;
    },
    nextIndex() {
      return this.nowIndex === this.slides.length - 1 ? 0 : this.nowIndex + 1;
    }
  },
  methods: {
    goTo(index) {
      this.isShow = false;
      setTimeout(() => {
        this.isShow = true;
        this.nowIndex = index;
      }, 10);
    },
    runSwiper() {
        this.timer = setInterval(() => {
        this.goTo(this.nextIndex);
      }, this.duration);
    },
    clearSwiper() {
      clearInterval(this.timer);
    }
  },
  mounted() {
    this.runSwiper();
  }
};
</script>

<style lang="scss" scoped>
.slide-trans-enter-active {
  transition: all 0.6s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all 0.6s;
  transform: translateX(-900px);
}
.swiper {
  &-container {
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
  }
  &-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    font-size: 50px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    &-prev {
      left: 0;
    }
    &-next {
      right: 0;
    }
  }
  &-slide {
    height: 100%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  &-pagination {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    text-align: center;
    li {
      display: inline-block;
      width: 30px;
      height: 30px;
      line-height: 30px;
      margin-right: 20px;
      cursor: pointer;
      background: #fff;
      color: #000;
      font-size: 16px;
      border-radius: 50%;
      &.on {
        color: #fff;
        background: #007aff;
      }
    }
  }
}
</style>
