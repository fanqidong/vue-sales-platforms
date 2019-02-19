<template>
  <ul class="radio-choose clearfix">
    <li
      v-for="(item,index) in options"
      :key="index"
      @click="chooseOption(index)"
      :class="{active:curIndex===index}"
    >{{item.text}}</li>
  </ul>
</template>

<script>
export default {
  props: {
    options: {
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
.radio-choose {
  li {
    float: left;
    padding: 0 8px;
    height: 25px;
    line-height: 25px;
    background: #fff;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 5px;
    &.active {
      background: #4fc08d;
      color: #fff;
    }
  }
}
</style>

