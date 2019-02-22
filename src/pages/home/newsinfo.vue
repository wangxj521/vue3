<template>
 <div class="cont">
    <div class="content_bg">
        <div class="header">
            <h5 class="title">{{list.titles}}</h5>
            <div class="infos ja">
                <div><span class="addr-icon"><i class="iconfont icon-biaoqian"></i></span><span class="map">{{list.uname}}</span></div>
                <div><span class="time-icon"><i class="iconfont icon-shijian"></i></span><span class="timing">{{list.indate}}</span></div>
                <div><span class="look-icon"><i class="iconfont icon-yueduliang"></i></span><span class="looks">{{list.shownum}} 阅读</span></div>
            </div>
        </div>
        <div class="main wxshowpic">
            <div class="bak" v-html="list.bak"></div>
            <div v-for="(item,i) in list.pics" :key="i">
                <img class="bakimg" v-lazy="item">
            </div>
        </div>
    </div>
    <div class="nextnews" @click="shownew(list.nextid)" v-show="list.nextid>0">
        <span>下一篇新闻</span>
    </div>

 </div>
</template>

<script>
// import previewImage from "@/utils/prevImg";
export default {
  name:'newsinfo',
  data() {
    return {
      shareid: "",
      timestamp: "ok",
      list: {
        }
    };
  },
  mounted() {
    let id = this.$route.params.id;
    let data = this.$qs.stringify({
      id: id,
      tp: 4
    });

    this.$axios.post("/Main/News/news_details", data).then(res => {
        if(res.data.code==200){
            this.list = res.data.data;
        }
      
    });
  },
  updated() {
    // let self = this
    // $(".wxshowpic")
    //   .find("img")
    //   .bind("click", function(self) {
    //     var url = this.src;
    //     var arr = [url];
    //     //去2次
    //     var old_timestamp = localStorage.getItem("timestamp");
    //     var timestamp = new Date().getTime();
    //     if (old_timestamp == "ok") {
    //       previewImage(url, arr);
    //       localStorage.setItem("timestamp", timestamp);
    //     } else {
    //       var cz = timestamp - old_timestamp;
    //       if (cz > 200) {
    //         previewImage(url, arr);
    //         localStorage.setItem("timestamp", timestamp);
    //       }
    //     }
    //   });
  },
  methods: {
    shownew(id){
      this.$router.replace({name: 'newsinfo',params:{id:id}})
      let data = this.$qs.stringify({
        id: id,
        tp: 4
      });
      this.$axios.post("/Main/News/news_details", data).then(res => {
          if(res.data.code==200){
              this.list = res.data.data;
          }
        
      });
    }
  }
};
</script>

<style scoped>

.cont {
  height: 100%;
  background-color: #fff;
}
.header {
  text-align: center;
  font-size: 0.14rem;
}
.title {
  font-size: 0.36rem;
  padding: 0 0.2rem;
  padding-top: 0.3rem;
}
.infos {
  width: 6.8rem;
  margin: 0.3rem auto;
  color: #999999;
}
.ja {
  display: flex;
  justify-content: space-around;
}
.addr-icon,
.look-icon,
.time-icon {
  display: inline-block;
  width: 0.32rem;
  height: 0.36rem;
  margin-right: 0.15rem;
  vertical-align: middle;
}
.map,
.looks,
.timing {
  font-size: 0.26rem;
  color: #888;
  height: 0.2rem;
  line-height: 0.2rem;
  vertical-align: middle;
}
.main {
  padding: 0.2rem 0.3rem;
}
.bak {
  font-size: 0.3rem;
  color: #333;
  line-height: 0.5rem;
  margin-bottom: 0.2rem;
  overflow: hidden;
  word-break: break-all;
}
.bakimg{
  max-width: 100%;
}
.nextnews {
  width: 1.6rem;
  height: 0.6rem;
  background-color: #d9d9d9;
  position: absolute;
  bottom: 0.1rem;
  right: 0.3rem;
  border-radius: 0.3rem;
  font-size: 0.26rem;
  text-align: center;
  line-height: 0.6rem;
  color: #333333;
}
</style>
