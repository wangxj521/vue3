<template>
  <div id="app">
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<style lang="scss">
@import './assets/styles/reset.scss';
@import './assets/styles/common.scss';
@import './assets/styles/variable.scss';
@import './assets/iconfont/iconfont.css';
#app {
  font-family: "Micosoft Yahei","Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-size: 14px;
}

</style>
