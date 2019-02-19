<template>
  <div class="count-wrapper count ">
    <div class="count-line clearfix">
      <div class="count-left">产品类型：</div>
      <div class="count-right count-inline">
        <radio-choose :options="radioOptions" @choose-option="chooseRadio"></radio-choose>
      </div>
    </div>
    <div class="count-line clearfix">
      <div class="count-left">适用地区：</div>
      <div class="count-right count-inline">
        <select-choose :select-options="areaArr" @choose-select="chooseArea"></select-choose>
      </div>
    </div>
    <div class="count-line clearfix">
      <div class="count-left">有效时间：</div>
      <div class="count-right count-inline">半年</div>
    </div>
  </div>
</template>

<script>
import RadioChoose from "../../components/RadioChoose";
import SelectChoose from "../../components/SelectChoose";
export default {
  data() {
    return {
      radioOptions: [
        {
          id: 1,
          text: "红色版"
        },
        {
          id: 2,
          text: "蓝色版"
        },
        {
          id: 3,
          text: "黑色版"
        }
      ],
      checkOptions: [
        {
          id: 1,
          text: "纸质报告"
        },
        {
          id: 2,
          text: "pdf"
        },
        {
          id: 3,
          text: "页面报告"
        },
        {
          id: 4,
          text: "邮件"
        }
      ],
      areaArr: [
        {
          city: "北京",
          value: 0
        },
        {
          city: "上海",
          value: 1
        },
        {
          city: "广州",
          value: 2
        },
        {
          city: "天津",
          value: 3
        },
        {
          city: "武汉",
          value: 4
        },
        {
          city: "重庆",
          value: 5
        }
      ]
    };
  },
  methods: {
    chooseRadio(index) {
      // console.log(this.radioOptions[index].text);
    },
    // checkOption(data) {
    //  let arr =  data.sort((a, b) => {
    //     return a.id > b.id ? 1 : -1;
    //   });
    // console.table(arr)
    // },
    chooseArea() {

    }
  },
  components: {
    RadioChoose,
    SelectChoose
  }
};
</script>

<style lang="scss" scoped>
.count {
  &-line {
    margin-bottom: 20px;
  }
  &-left {
    display: inline-block;
    margin-right: 10px;
  }
  &-right {
     display: inline-block;
  }
}
</style>

