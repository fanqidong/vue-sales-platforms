<template>
  <div class="count">
    <div class="count-wrapper">
      <h2>数据预测</h2>
      <p
        class="intro"
      >未来，大数据会变得越来越重要，其核心应用预测也会成为互联网行业以及产业变革的重要力量，我们很有必要对数据预测及其分析方法进行全面且深入的了解。在这一点上，《大数据预测》是本很好的读物，适合大数据所有相关行业的人阅读。</p>
      <div class="count-list">
        <div class="count-line clearfix">
          <div class="count-left">购买数量：</div>
          <div class="count-right count-inline">
              <counter :min="1" :max="1000" @on-change="getNum"></counter>
          </div>
        </div>
        <div class="count-line clearfix">
          <div class="count-left">媒介：</div>
          <check-choose
            class="count-right count-inline clearfix"
            :options="checkOption"
            @choose-option="checkOptions"
          />
        </div>
        <div class="count-line clearfix">
          <div class="count-left">有效时间：</div>
          <div class="count-right count-inline">半年</div>
        </div>
        <div class="count-line clearfix">
          <div class="count-left">总价：</div>
          <div class="count-right count-inline">500 元</div>
        </div>
        <button class="btn-buy">立即购买</button>
      </div>
    </div>
    <div class="count-wrapper">
      <h2>产品说明</h2>
      <p class="intro">2020年的一天，在你驱车前往公司的路上，导航系统通过预测交通流量，会自动帮你选择一条最合适的交通路线；车内推荐系统会根据你的饮食习惯预测你可能会喜欢吃什么，并推荐沿途的早餐店；你的电子社交助理已经为你自动选择了你可能感兴趣的社交网信息；当车内系统预测到你驾车有些分心时，座椅会自动震动进行提醒……
以上这些情景不是科幻大片独有的，它们有的已经或会在未来的某一天成为现实。而这一切所倚靠的就是预测分析技术。
大数据时代下，作为其核心，预测分析已在商业和社会中得到广泛应用。随着越来越多的数据被记录和整理，未来预测分析必定会成为所有领域的关键技术。
作为预测分析领域的专家，埃里克·西格尔博士深谙预测分析界已经实现和正在发生的事情、面临的问题和将来可能的前景。在《大数据预测》一书中，他结合预测分析的应用实例，对其进行了深入、细致且全面的解读。
关于预测分析，你想了解的全部，你的生活以及这个世界会因为预测分析改变到什么程度，《大数据预测》都会告诉你。</p>
    </div>
  </div>
</template>

<script>
import checkChoose from "../../components/CheckboxChoose";
import SelectChoose from "../../components/SelectChoose";
import counter from "../../components/counter";
export default {
  data() {
    return {
      checkOption: [
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
      ]
    };
  },
  methods: {
    checkOptions(data) {
      let arr = data.sort((a, b) => {
        return a.id > b.id ? 1 : -1;
      });
    },
    getNum(num) {
        console.log(num);
    }
  },
  components: {
    checkChoose,
    SelectChoose,
    counter
  }
};
</script>

<style lang="scss">
</style>

