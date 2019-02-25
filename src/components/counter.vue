<template>
  <div class="counter">
    <span @click="minus" :class="{'disabled':disable&&isLess}">-</span>
    <input type="text" v-model="num" class="input" @input="checkNum">
    <span @click="add" :class="{'disabled':isMore&&disable}">+</span>
  </div>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      default: 150
    },
    min: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      num: this.min,
      disable: true,
      isLess: true,
      isMore: false
    };
  },
  methods: {
    checkNum() {
      typeof this.num === "string"
        ? (this.num = Number(this.num.replace(/\D/g, "")))
        : this.num;
      this.num > this.max && (this.num = this.max);
      this.num < this.min && (this.num = this.min);
    },
    add() {
      if (this.num >= this.max) {
        return;
      }
      this.num++;
    },
    minus() {
      if (this.num <= this.min) {
        return;
      }
      this.num--;
    }
  },
  watch: {
    num(newValue) {
      newValue <= this.min ? (this.isLess = true) : (this.isLess = false);
      newValue >= this.max ? (this.isMore = true) : (this.isMore = false);
      this.$emit("on-change",this.num);
    }
  }
};
</script>

<style lang="scss" scoped>
.counter {
  span {
    display: inline-block;
    width: 25px;
    height: 25px;
    text-align: center;
    border: 1px solid #1c1a1a;
    line-height: 25px;
    cursor: pointer;
    outline: none;
    &.disabled {
      opacity: 0.5;
    }
  }
  .input {
    width: 40px;
    height: 23px;
    padding: 0 2px;
    text-align: center;
    outline: none;
    margin: 0 5px;
    border: 1px solid;
  }
}
</style>

