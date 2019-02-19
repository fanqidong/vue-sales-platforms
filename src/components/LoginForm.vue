<template>
  <div class="form">
    <div class="form-group">
      <label for>账号/用户名：</label>
      <input type="text" class="form-input" placeholder="请输入账号" v-model="username">
      <p class="error-tips">{{userTips.errorTips}}</p>
    </div>
    <div class="form-group">
      <label for>密码：</label>
      <input type="password" class="form-input" placeholder="请输入密码" v-model="password">
      <p class="error-tips">{{pwdTips.errorTips}}</p>
    </div>
    <div class="form-group">
      <button class="btn-login btn" :class="{'btn-disabled':isLogin}" @click="login" :disabled="isLogin">{{loginText}}</button>
      <button class="btn-reg btn" @click="showDialog">注册</button>
    </div>
    <p class="error-tips">{{errorTips}}</p>
  </div>
</template>

<script>
import axios from '../axios.js';
export default {
  data() {
    return {
      username: "",
      password: "",
      errorTips: "",
      loginText:"登录",
      isLogin:false
    };
  },
  computed: {
    userTips() {
      let status, errorTips;
      if (!/@/g.test(this.username)) {
        status = false;
        errorTips = "账号需包含@";
      } else {
        status = true;
      }
      if (!this.userFlag) {
        errorTips = "";
        this.userFlag = true;
      }
      return {
        status,
        errorTips
      };
    },
    pwdTips() {
      let status, errorTips;
      if (!/^\w{6,16}/g.test(this.password)) {
        status = false;
        errorTips = "密码需6至16位";
      } else {
        status = true;
      }
      if (!this.pwdFlag) {
        errorTips = "";
        this.pwdFlag = true;
      }
      return {
        status,
        errorTips
      };
    }
  },
  methods: {
    showDialog() {
      this.$emit("change-type", "regForm");
    },
    login() {
      if (!this.userTips.status || !this.pwdTips.status) {
        this.errorTips = "部分选项未通过";
      } else {
        this.errorTips = "";
        this.isLogin=true;
        this.loginText="登录中...";
        setTimeout(() => {
          axios.post('/login',{name:this.username,password:this.password}).then(res=>{
            this.isLogin=false;
            this.loginText="登录";
            this.$emit("have-login", res.data);
        }).catch(err=>{
            console.log(err);
        });  
        }, 3000);
      }
    }
  }
};
</script>

<style lang="scss">
.form {
  &-group {
    margin: 20px auto;
    label {
      display: inline-block;
      width: 100px;
      text-align: left;
      margin-right: 10px;
    }
    .btn {
      width: 100px;
      border: none;
      background: #3385ff;
      color: #fff;
      height: 30px;
      outline: none;
      cursor: pointer;
      &-disabled{
          opacity: .5;
      }
      &-login {
        margin-right: 50px;
      }
      &-reg {
        background: #3385ff;
        opacity: 0.8;
      }
    }
  }
  &-input {
    padding: 4px 10px;
    outline: none;
    box-sizing: border-box;
  }
}
.error-tips {
  margin: 5px 0;
  text-align: center;
  color: rgb(206, 25, 25);
}
</style>

