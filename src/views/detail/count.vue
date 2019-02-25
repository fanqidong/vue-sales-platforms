<template>
  <div class="count">
    <div class="count-wrapper">
      <h2>数据统计</h2>
      <p class="intro">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
      <div class="count-list">
        <div class="count-line clearfix">
          <div class="count-left">产品类型：</div>
          <radio-choose
            class="count-right count-inline clearfix"
            :radio-options="radioOptions"
            @choose-option="chooseRadio"
          ></radio-choose>
          <div></div>
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
        <div class="count-line clearfix">
          <div class="count-left">总价：</div>
          <div class="count-right count-inline">1200元</div>
        </div>
        <button class="btn-buy">立即购买</button>
      </div>
    </div>
    <div class="count-table">
      <h2>产品说明</h2>
      <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
      <table class="table">
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
          text: "北京",
          value: 0
        },
        {
          text: "上海",
          value: 1
        },
        {
          text: "广州",
          value: 2
        },
        {
          text: "天津",
          value: 3
        },
        {
          text: "武汉",
          value: 4
        },
        {
          text: "重庆",
          value: 5
        }
      ]
    };
  },
  methods: {
    //   获取当前选中值
    chooseRadio(index) {
      // console.log(this.radioOptions[index].text);
    },
    // 选取区域
    chooseArea(area) {
      //   console.log(area);
    }
  },
  components: {
    RadioChoose,
    SelectChoose
  }
};
</script>

<style lang="scss">
.count {
  
  .btn-buy {
    background: #4fc08d;
    color: #fff;
    border: none;
    outline: none;
    padding: 10px 20px;
    cursor: pointer;
  }
  &-table{
      margin-top: 20px;
      padding: 20px;
      background: #fff;
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

