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
            <counter :min="20" :max="1000" @on-change="getNum"></counter>
          </div>
        </div>
        <div class="count-line clearfix">
          <div class="count-left">行业：</div>
          <div class="count-right count-inline">
            <select-choose :select-options="selectOptions" @choose-select="chooseType"></select-choose>
          </div>
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
          <div class="count-left">有效时间：</div>
          <div class="count-right count-inline">半年</div>
        </div>
        <div class="count-line clearfix">
          <div class="count-left">总价：</div>
          <div class="count-right count-inline">11500 元</div>
        </div>
        <button class="btn-buy">立即购买</button>
      </div>
    </div>
    <div class="count-table">
        <h2>产品说明</h2>
        <p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
        <table class="sales-board-table">
            <tbody>
                <tr class="ui-table-row">
                    <td class="col-first">
                        <div class="intro-pic">
                            <label>安全安保</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>办公文教</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>彩票</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>车辆物流</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>成人用品</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>出版传媒</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>电脑硬件</label>
                        </div>
                    </td>
                </tr>
                <tr class="ui-table-row">
                    <td class="col-first">
                        <div class="intro-pic">
                            <label>电子电工</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>房地产建筑装修</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>分类平台</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>服装鞋帽</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>箱包饰品</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>化工原料制品</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>机械设备</label>
                        </div>
                    </td>
                </tr>
                <tr class="ui-table-row">
                    <td class="col-first">
                        <div class="intro-pic">
                            <label>家庭日用品</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>家用电器</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>教育培训</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>节能环保</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>金融服务</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>礼品</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>旅游住宿</label>
                        </div>
                    </td>
                </tr>
                <tr class="ui-table-row">
                    <td class="col-first">
                        <div class="intro-pic">
                            <label>美容化妆</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>母婴护理</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>农林牧渔</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>软件</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>商务服务</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>生活服务</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>食品保健品</label>
                        </div>
                    </td>
                </tr>
                <tr class="ui-table-row">
                    <td class="col-first">
                        <div class="intro-pic">
                            <label>手机数码</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>通讯服务设备</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>网络服务</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>医疗服务</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>游戏</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>运动休闲娱乐</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>招商加盟</label>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import RadioChoose from "../../components/RadioChoose";
import checkChoose from "../../components/CheckboxChoose";
import SelectChoose from "../../components/SelectChoose";
import counter from "../../components/counter";
export default {
  data() {
    return {
      selectOptions: [
        {
          id: 1,
          text: "出版业"
        },
        {
          id: 2,
          text: "媒体"
        },
        {
          id: 3,
          text: "金融"
        },
        {
          id: 4,
          text: "互联网"
        }
      ],
      checkOption: [
        {
          id: 1,
          text: "初级版"
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
          text: "专家版"
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
    chooseType() {},
    getNum(num) {
      console.log(num);
    },
    chooseRadio() {}
  },
  components: {
    checkChoose,
    SelectChoose,
    counter,
    RadioChoose
  }
};
</script>

<style lang="scss">
h3 {
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 700;
}
.tips-list{
    padding: 0 20px;
    li{
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



