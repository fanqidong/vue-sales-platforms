<template>
  <ul class="radio-choose clearfix">
    <li
      v-for="(item,index) in radioOptions"
      :key="index"
      @click="chooseOption(index)"
      :class="{active:curIndex===index}"
    >{{item.text}}</li>
  </ul>
</template>

<script>
export default {
  props: {
    radioOptions: {
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
    // 单选框选取
    chooseOption(index) {
      this.curIndex = index;
      this.$emit("choose-option", this.radioOptions[index]);
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
    background: #eee;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 5px;
    &.active {
      color: #fff;
      background: #4fc08d;
    }
  }
}
</style>

