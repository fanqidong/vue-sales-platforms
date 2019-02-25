<template>
  <div id="app" class="app">
    <div class="app-header">
      <div class="app-nav clearfix">
        <router-link :to="{path:'/'}" class="app-logo f-l">
          <img src="./assets/logo.png" alt="logo">
        </router-link>
        <ul class="nav-list f-r">
          <li @click="flag&&showDialog('LoginForm')">{{username===''?'登录':username}}</li>
          <li class="line" v-if="username!==''">|</li>
          <li @click="logout" v-if="username!==''">注销</li>
          <li class="line">|</li>
          <li @click="showDialog('regForm')">注册</li>
          <li class="line">|</li>
          <li @click="showDialog('IsShowAbout',true)">关于</li>
        </ul>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <div class="app-footer">© 2019 All Rights Reserved.fanqidong</div>
    <com-dialog :is-show="IsShowForm" @close-dia="hideDialog('IsShowForm')">
      <keep-alive>
        <component :is="componentType" @change-type="changeType" @have-login="haveLogin"></component>
      </keep-alive>
    </com-dialog>
    <com-dialog
      :is-show="IsShowAbout"
      @close-dia="hideDialog('IsShowAbout')"
    >这是一个基于vue+axios+vuex+es6+sass的电商售卖平台</com-dialog>
  </div>
</template>
<script>
import ComDialog from "./components/ComDialog";
import LoginForm from "./components/LoginForm";
import regForm from "./components/Register";
export default {
  data() {
    return {
      IsShowForm: false,
      componentType: null,
      IsShowAbout: false,
      username: "",
      flag: true
    };
  },
  components: {
    ComDialog,
    LoginForm,
    regForm
  },
  mounted() {
    //   this.showDialog('LoginForm');
  },
  methods: {
    showDialog(attr, flag) {
      this[attr] = true;
      if (flag) {
        this.componentType = "";
      } else {
        this.IsShowForm = true;
        this.componentType = attr;
      }
    },
    hideDialog(attr) {
      this[attr] = false;
    },
    changeType(attr) {
      this.componentType = attr;
    },
    haveLogin(data) {
      if (data) {
        this.hideDialog("IsShowForm");
        this.username = data.name;
        this.flag = false;
      } 
    },
    logout() {
      this.username = "";
      this.flag = true;
    }
  }
};
</script>

<style lang="scss">
@import url("./assets/scss/reset.css");
.app {
  min-width: 1200px;
  &-header {
    background: #363636;
    color: #b2b2b2;
    height: 80px;
    line-height: 80px;
  }
  &-content {
    width: 1200px;
    margin: auto;
    overflow: hidden;
  }
  &-nav {
    width: 1200px;
    margin: auto;
  }
  &-logo {
    display: inline-block;
    width: 50px;
    margin-top: 20px;
    img {
      display: block;
      width: 100%;
    }
  }
  .nav-list {
    li {
      float: left;
      padding: 0 10px;
      cursor: pointer;
    }
  }
  &-footer {
    height: 80px;
    line-height: 80px;
    margin: 30px auto 0;
    background: #e3e4e8;
    text-align: center;
  }
}
</style>

