

<template>
  <div class="dialog-wrapper">
    <transition name="drop" enter-active-class="bounceInDown" leave-active-class="bounceOutUp" >
      <div class="dialog-content" v-if="IsShow">
        <div class="dialog-body">
          <slot>empty</slot>
        </div>
        <div class="dialog-close" @click="closeDia">&times;</div>
      </div>
    </transition>
    <transition name="drop" enter-active-class="fadeIn" leave-active-class="fadeOut">
      <div class="dialog-cover" v-if="IsShow" @click="closeDia"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ComDialog",
  props: {
    IsShow: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    closeDia() {
      this.$emit("close-dia");
    }
  }
};
</script>

<style lang="scss" scoped>
// .drop-enter-active{
//   transition: all 0.4s ease;
// }
// .drop-leave-active {
//   transition: all 0.5s ease;
// }
// .drop-enter {
//   animation: bounceInDown 1s;
// }
// .drop-leave-active {
//   transform: translateY(-500px);
// }
.dialog {
  &-content {
    position: fixed;
    width: 500px;
    left: 50%;
    top: 30%;
    margin-left: -250px;
    padding: 1%;
    box-sizing: border-box;
    color: #666;
    background: #fff;
    z-index: 9999;
  }
  &-cover {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 9998;
  }
  &-close {
    position: absolute;
    right: -40px;
    top: 0;
    width: 40px;
    height: 40px;
    color: #fff;
    font-size: 40px;
    text-align: center;
    cursor: pointer;
    background: #000;
  }
}
.bounceInDown {
  animation: bounceInDown 1000ms both;
}
.bounceOutUp {
  transform: translateY(-500px);
  transition: all .3s ease;
}

@keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }

  75% {
    transform: translate3d(0, -10px, 0);
  }

  90% {
    transform: translate3d(0, 5px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

</style>

