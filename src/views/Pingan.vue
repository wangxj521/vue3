<template>
  <div class="about">
    <ul class="fourlist">
      <li v-for="(item,index) in list" :key="index">
        <router-link :to='{name:item.name}'>
            <div>
                <div><span class="icon iconfont" :class="item.fontname"></span></div>
                <div>{{item.title}}</div>
            </div>
        </router-link>
      </li>
    </ul>
    <div class="footerbox">
      <Footer :iscun = state></Footer>
    </div>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "pingan",
  components: {
    Footer
  },
  data(){
    return {
      state: '',
      list:[
          {name:'home',title:'首页',fontname:'icon-shouyedilan'},
          {name:'dangjian',title:'党建',fontname:'icon-dangyuanxianfengdilan'},
          {name:'xiangcun',title:'乡村',fontname:'icon-shequwuyedilan'},
          {name:'pingan',title:'平安',fontname:'icon-dilanpinganjiansheai'},
          {name:'wode',title:'我的',fontname:'icon-gerenzhongxindilan'},
          {name:'home',title:'首页',fontname:'icon-shouyedilan'},
          {name:'dangjian',title:'党建',fontname:'icon-dangyuanxianfengdilan'},
          {name:'xiangcun',title:'乡村',fontname:'icon-shequwuyedilan'},
          {name:'pingan',title:'平安',fontname:'icon-dilanpinganjiansheai'},
          {name:'wode',title:'我的',fontname:'icon-gerenzhongxindilan'},
      ],
    }
  },
  created(){
    this.state = 1
  }
};
</script>
<style lang="scss" scoped>
.fourlist{
  display: flex;
  // justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
  color: #999;
  a{
    color: #999;
  }
}
.fourlist li{
  width: 25%;
  padding: 10px 0;
}
.iconfont {
  font-size: 20px;
  // color: #999;
}
</style>
