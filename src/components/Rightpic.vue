<template>
    <div>
        <ul class="smlist">
            <li class="smitem" v-for="(item,k) in items" :key="k" @click="toinfo(item.id)">
                <div v-if="item.pic">
                  <div class="leftbox">
                      <div class="smleft">
                          <h3 class="pbtitle"><span class="pb" :class="{pbx:item.pb==1,pbz:item.pb==2,pbc:item.pb==3}" v-if="item.isShow">{{item.pbtype}}</span>{{item.titles}}</h3>
                          <div class="pbintr">
                              <p class="fl">
                                  <span class="timeicon"><i class="iconfont icon-shijian"></i></span><span class="pbdate">{{item.indate}}</span>
                                  <span class="jzts">{{item.jznm}}</span>
                              </p>
                              <p class="fr">
                                  <span class="readicon"><i class="iconfont icon-yueduliang"></i></span><span>{{item.shownum}}</span><span class="read">阅读</span>
                              </p>
                          </div>
                      </div>
                  </div>
                  <div class="smright"><img :src="item.pic[0]" alt=""></div>
                </div>
                <div v-if="item.pic==''">
                  <div class="nopic">
                      <div class="smleft">
                          <h3 class="pbtitle"><span class="pb" :class="{pbx:item.pb==1,pbz:item.pb==2,pbc:item.pb==3}" v-if="item.isShow">{{item.pbtype}}</span>{{item.titles}}</h3>
                          <div class="pbintr">
                              <p class="fl">
                                  <span class="timeicon"><i class="iconfont icon-shijian"></i></span><span class="pbdate">{{item.indate}}</span>
                                  <span class="jzts">{{item.jznm}}</span>
                              </p>
                              <p class="fr">
                                  <span class="readicon"><i class="iconfont icon-yueduliang"></i></span><span>{{item.shownum}}</span><span class="read">阅读</span>
                              </p>
                          </div>
                      </div>
                  </div>
                </div>
            </li>    
        </ul>
    </div>
</template>
<script>
export default {
    name:'Rightpic',
    props:{
      items:Array,
      routername: String
    },
    methods:{
      toinfo(id){
        this.$router.push({name: this.routername,params:{id:id}})
      }
    }
}
</script>
<style lang="scss" scoped>
.smlist {
  padding: 0 0.3rem;
  margin: 0;
  background-color: #fff;
  border-radius: 0.1rem;
  &>li {
    list-style: none;
  }
}
.smitem {
  height: 1.4rem;
  padding: .2rem 0;
  border-bottom: 1px dotted #ccc;
}
.smitem:last-child {
  border-bottom: none;
}
.leftbox {
  box-sizing: border-box;
  width: 100%;
  padding-right: 1.8rem;
  float: left; 
  margin-right: -1.8rem;
}
.nopic{
  width: 100%;
}
.smleft {
  height: 1.4rem;
  text-align: left;
  padding-right: 0.2rem;
}
.smright {
  float: right;
  width: 1.8rem;
  height: 1.4rem;
  img{
    float: left;
    width: 100%;
    height: 100%;
  }
}
.pbtitle {
  padding: 0;
  margin: 0;
  height: 0.8rem;
  line-height: 0.4rem;
  font-size: 0.28rem;
  color: rgb(72,72,72);
  margin-bottom: 0.2rem;
  word-break: break-all;
  overflow: hidden; 
  text-overflow: ellipsis; 
  display: -webkit-box; 
  -webkit-line-clamp: 2; 
  /*! autoprefixer: off */  -webkit-box-orient: vertical;   /* autoprefixer: on */
}
.pb {
  display: inline-block;
  height: 0.4rem;
  padding: 0 0.2rem;
  border-radius: 0.1rem;
  margin-right: 0.2rem; 
  color: #fff;
}
.pbc {
  background-color: #ff8f03;
}
.pbz {
  background-color: #379dea;
}
.pbx {
  background-color: #ad141c;
}
.pbintr {
  padding-top: 0.1rem;
  font-size: 0.28rem;
  p {
    padding: 0;
    margin: 0;
    color: rgb(153,153,153);
    height: 0.4rem;
    font-size: 0;
    span{
      vertical-align: middle;
      font-size: 0.28rem;
    }
    .jzts{
      margin-left: 0.3rem;
      color: #ea2a2a;
      font-size: 0.26rem;
    }
  }
}
.readicon,
.timeicon {
  display: inline-block;
  width: 0.28rem;
  height: 0.28rem;
  margin-right: 0.1rem;
  vertical-align: middle;
  line-height: .26rem;
}

.icon-guankongrenwu{
  font-size: 0.28rem;
  color: red;
}
.icon-shijian {
  font-size: 0.24rem;
}
.icon-yueduliang {
  font-size: 0.28rem;
}
</style>

