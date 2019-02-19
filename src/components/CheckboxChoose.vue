<template>
  <ul class="check-choose clearfix">
    <li
      v-for="(item,index) in checkOptions"
      :key="index"
      @click="chooseOption(index)"
      :class="{active:isActive(index)}"
    >{{item.text}}</li>
  </ul>
</template>

<script>
export default {
  props: {
    checkOptions: {
      type: Array
    }
  },
  data() {
    return {
      newArr: [0]
    };
  },
  methods: {
    chooseOption(index) {
      if (!this.newArr.includes(index)) {
        this.newArr.push(index);
      } else {
        this.newArr = this.newArr.filter(item => index !== item);
      }
      let optionArr = this.newArr.map(item => this.checkOptions[item]);
      this.$emit("check-option", optionArr);
    },
    isActive(index) {
      return this.newArr.includes(index);
    }
  }
};
</script>

<style lang="scss" scoped>
.check-choose {
  li {
    float: left;
    padding: 0 8px;
    height: 25px;
    line-height: 25px;
    background: #fff;
    margin-right: 10px;
    cursor: pointer;
    outline: none;
    border-radius: 5px;
    &.active {
      background: #4fc08d;
      color: #fff;
    }
  }
}
</style>


