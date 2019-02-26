<template>
  <div class="count">
    <div class="count-wrapper">
      <h2>流量分析</h2>
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
          <div class="count-left">产品类型：</div>
          <div class="count-right count-inline">
            <select-choose :select-options="selectOptions" @choose-select="chooseType"></select-choose>
          </div>
        </div>
        <div class="count-line clearfix">
          <div class="count-left">有效时间：</div>
          <radio-choose
            class="count-right count-inline clearfix"
            :radio-options="radioOptions"
            @choose-option="chooseRadio"
          ></radio-choose>
        </div>
        <div class="count-line clearfix">
          <div class="count-left">产品版本：</div>
          <check-choose
            class="count-right count-inline clearfix"
            :options="checkOption"
            @choose-option="checkOptions"
          />
        </div>
        <div class="count-line clearfix">
          <div class="count-left">总价：</div>
          <div class="count-right count-inline">{{totalPrice}}元</div>
        </div>
        <button class="btn-buy" @click="showDialog('IsShowBuy')">立即购买</button>
      </div>
    </div>
    <div class="count-table">
      <h2>产品说明</h2>
      <p class="intro">
        2020年的一天，在你驱车前往公司的路上，导航系统通过预测交通流量，会自动帮你选择一条最合适的交通路线；车内推荐系统会根据你的饮食习惯预测你可能会喜欢吃什么，并推荐沿途的早餐店；你的电子社交助理已经为你自动选择了你可能感兴趣的社交网信息；当车内系统预测到你驾车有些分心时，座椅会自动震动进行提醒……
        以上这些情景不是科幻大片独有的，它们有的已经或会在未来的某一天成为现实。而这一切所倚靠的就是预测分析技术。
        大数据时代下，作为其核心，预测分析已在商业和社会中得到广泛应用。随着越来越多的数据被记录和整理，未来预测分析必定会成为所有领域的关键技术。
        作为预测分析领域的专家，埃里克·西格尔博士深谙预测分析界已经实现和正在发生的事情、面临的问题和将来可能的前景。在《大数据预测》一书中，他结合预测分析的应用实例，对其进行了深入、细致且全面的解读。
        关于预测分析，你想了解的全部，你的生活以及这个世界会因为预测分析改变到什么程度，《大数据预测》都会告诉你。
      </p>
      <h3>用户行为指标</h3>
      <ul class="tips-list">
        <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
        <li>用户在网站的停留时间；</li>
        <li>用户来源网站（也叫“引导网站”）；</li>
        <li>用户所使用的搜索引擎及其关键词；</li>
        <li>在不同时段的用户访问量情况等。</li>
      </ul>
      <h3>浏览网站方式</h3>
      <ul class="tips-list">
        <li>用户上网设备类型</li>
        <li>用户浏览器的名称和版本</li>
        <li>访问者电脑分辨率显示模式</li>
        <li>用户所使用的操作系统名称和版本</li>
        <li>用户所在地理区域分布状况等</li>
      </ul>
    </div>
    <com-dialog :is-show="IsShowBuy" @close-dia="hideDialog('IsShowBuy')">
      <p>购买数量：{{formData.num}}</p>
      <p>产品类型：{{formData.product}}</p>
      <p>有效时间：{{formData.time}}</p>
      <p>
        产品版本：
        <span v-for="(item,index) in formData.version" :key="index">{{item.text}}</span>
      </p>
      <p>总价：{{formData.totalPrice}}</p>
    </com-dialog>
  </div>
</template>

<script>
import RadioChoose from "../../components/RadioChoose";
import checkChoose from "../../components/CheckboxChoose";
import SelectChoose from "../../components/SelectChoose";
import counter from "../../components/counter";
import ComDialog from "../../components/ComDialog";
export default {
  data() {
    return {
      selectOptions: [
        {
          id: 1,
          text: "入门版"
        },
        {
          id: 2,
          text: "中级版"
        },
        {
          id: 3,
          text: "高级版"
        },
        {
          id: 4,
          text: "企业版"
        }
      ],
      radioOptions: [
        {
          id: 1,
          text: "半年"
        },
        {
          id: 2,
          text: "一年"
        },
        {
          id: 3,
          text: "三年"
        }
      ],
      checkOption: [
        {
          id: 1,
          text: "客户版"
        },
        {
          id: 2,
          text: "代理商版"
        },
        {
          id: 3,
          text: "专家版"
        },
        {
          id: 4,
          text: "个人版"
        }
      ],
      IsShowBuy: false,
      formData: {
        num: "" || 1,
        product: "" || "入门版",
        time: "" || "半年",
        version:  [{ id: 1, text: "客户版" }] || [],
        totalPrice: "" || 500
      },
      totalPrice: 500
    };
  },
  methods: {
    checkOptions(data) {
      let arr = data.sort((a, b) => {
        return a.id > b.id ? 1 : -1;
      });
      this.formData.version = arr;
    },
    chooseType(data) {
      this.formData.product = data.text;
    },
    getNum(num) {
      this.formData.num = num;
    },
    chooseRadio(data) {
      this.formData.time = data.text;
    },
    showDialog(attr) {
      this[attr] = true;
    },
    hideDialog(attr) {
      this[attr] = false;
    }
  },
  components: {
    checkChoose,
    SelectChoose,
    counter,
    RadioChoose,
    ComDialog
  }
};
</script>

<style lang="scss">
h3 {
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 700;
}
.tips-list {
  padding: 0 20px;
  li {
    margin: 10px 0;
  }
}
.table {
  width: 100%;
  margin-top: 20px;
}
.table th {
  background: #4fc08d;
  color: #fff;
}
.table td {
  border: 1px solid #f0f2f5;
  padding: 15px;
}
</style>

