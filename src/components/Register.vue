<template>
  <div class="form">
    <div class="form-group">
      <label for>注册账号：</label>
      <input type="text" class="form-input" placeholder="请输入账号">
    </div>
    <div class="form-group">
      <label for>密码：</label>
      <input type="password" class="form-input" placeholder="请输入密码">
    </div>
    <div class="form-group">
      <button class="btn-login btn"  @click="showDialog">返回登录</button>
      <button class="btn-reg btn">注册</button>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        showDialog(){
           this.$emit('change-type','LoginForm');
        }
    }
};
</script>

<style lang="scss">
.form {
  &-group {
    margin: 20px auto;
    text-align: center;
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
      &-login {
          margin-right: 50px;
      }
      &-reg{
          background: #3385ff;
          opacity: .8;
      }
    }
  }
  &-input {
    padding: 4px 10px;
    outline: none;
    box-sizing: border-box;
  }
}
</style>

