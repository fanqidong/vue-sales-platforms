<template>
  <div class="select-wrapper">
    <div class="select-show">
      <span class="select-value">北京</span>
      <span class="select-arrow"></span>
    </div>
    <ul class="select-list">
      <li
        v-for="(item,index) in selectOptions"
        :key="index"
        @click="chooseOption(index)"
        :class="{active:curIndex===index}"
      >{{item.city}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    selectOptions: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      curIndex: 0
    };
  },
  methods: {
    chooseOption(index) {
      this.curIndex = index;
      this.$emit("choose-option", index);
    }
  }
};
</script>

<style lang="scss" scoped>
.select {
  &-wrapper {
    position: relative;
    text-align: center;
    width: 60px;
  }
  &-show {
    position: relative;
    width: 100%;
    border: 1px solid #e3e3e3;
    cursor: pointer;
    height: 25px;
    line-height: 25px;
    border-radius: 3px;
    background: #fff;
  }
  &-list {
    position: absolute;
    left: 0;
    top: 25px;
    width: 100%;
    background: #fff;
    border: 1px solid #e3e3e3;
    z-index: 5;
    li {
      padding: 0 8px;
      line-height: 25px;
      background: #fff;
      cursor: pointer;
      &:hover {
        background: #e3e3e3;
      }
    }
  }
}
</style>

