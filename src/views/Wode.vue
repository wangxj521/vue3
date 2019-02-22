<template>
  <div class="about">
    <ul class="threelist">
      <li v-for="(item,index) in list" :key="index">
        <router-link :to='{name:item.name}'>
            <div>
                <div><span class="icon iconfont" :class="item.fontname"></span></div>
                <div>{{item.title}}</div>
            </div>
        </router-link>
      </li>
    </ul>
    <div class="content">
      <div class="left"></div>
      <div class="right">
        <h3 class="title">标题内容标题内容标题内容标题内容标题内容</h3>
        <div class="bak">每一项的简介每一项的简介每一项的简介每一项的简介每一项的简介每一项的简介每一项的简介每一项的简介每一项的简介每一项的简介</div>
        <ul class="piclist">
          <li></li>
          <li></li>
        </ul>
        <div class="marks">
          <div><span class="icon iconfont icon-shijian"></span><span>2019-4-8</span></div>
          <div><span class="icon iconfont icon-yueduliang"></span><span>20</span></div>
        </div>
      </div>
    </div>
    <div class="cbox">
      <div class="box">
        <p>星期一</p>
      </div>
      <div style="height:4rem;">

      </div>
    </div>
    
    <div class="footerbox">
      <Footer :iscun = state></Footer>
    </div>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "wode",
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
    this.state = 2
  }
};
</script>
<style lang="scss" scoped>
.about{
  padding-bottom: 60px;
}
.threelist{
  display: flex;
  // justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
  color: #999;
  a{
    color: #999;
  }
}
.threelist li{
  width: 33%;
  padding: 10px 0;
  &:nth-child(3n+2){
    width: 34%;
  }
}
.iconfont {
  font-size: 20px;
  // color: #999;
}

.content {
  display: flex;
  padding: 0.3rem;
  justify-content: space-between;
}

.left {
  height: 0.8rem;
  width: 0.8rem;
  background-color: #ccc;
  border-radius: 100%;
  overflow: hidden;
  img{
    float: left;
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
}
.right {
  width: 6rem;
  .title{
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.28rem;
    color: #333;
    margin-bottom: 0.2rem;
    word-break: break-all;
    overflow: hidden; 
    text-overflow: ellipsis; 
  }
  .bak {
    line-height: 0.4rem;
    height: 0.8rem;
    font-size: 0.28rem;
    margin-bottom: 0.2rem;
    word-break: break-all;
    overflow: hidden; 
    text-overflow: ellipsis; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    /*! autoprefixer: off */  -webkit-box-orient: vertical;   /* autoprefixer: on */
  }
  .piclist {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 1.9rem;
      height: 1.4rem;
      background-color: #efefef;
      margin-bottom: 0.1rem;
      margin-right: 0.1rem;
    }
    img{
      float: left;
      width: 100%;
      height: 100%;
    }
  }
  .marks{
    display: flex;
    justify-content: space-between;
    font-size: 0.28rem;
    color: #999;
  }
  .icon-yueduliang {
    font-size: 0.28rem;
    margin-right: 0.1rem;
  }
  .icon-shijian {
    font-size: 0.24rem;
    margin-right: 0.1rem;
  }
}
.box{
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  p{
    width: 0.4rem;
    word-break: break-all;
    line-height: 0.3rem;
    font-size: 0.28rem;
    text-align: center;
    background-color: #ccc;
  }
}
.cbox{
  display: flex;
}
</style>