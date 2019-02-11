<template>
  <div id="app" class="app">
    <div class="app-header">
      <div class="app-nav clearfix">
        <router-link :to="{path:'/'}" class="app-logo f-l">
          <img src="./assets/logo.png" alt="logo">
        </router-link>
        <ul class="nav-list f-r">
          <li>登录</li>
          <li>注册</li>
          <li>关于</li>
        </ul>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <div class="app-footer">© 2019 All Rights Reserved.fanqidong</div>
  </div>
</template>

<style lang="scss" scoped>
@import url("./assets/scss/reset.css");
.app {
  &-header {
    background: #363636;
    color: #b2b2b2;
    height: 80px;
    line-height: 80px;
  }
  &-nav {
    width: 1200px;
    margin: auto;
  }
  &-logo {
    display: block;
    width: 80px;
    img {
      display: block;
      width: 100%;
    }
  }
  .nav-list {
    li {
      float: left;
    }
  }
}
</style>

