<template>
<div>
  <scroller :on-refresh="refresh"
      :on-infinite="infinite" ref="my_scroller">
    <div class="about">
      <Rightpic :items = listarr :routername ='showinfo'></Rightpic>
    </div>
  </scroller>
  <div class="footerbox">
    <Footer :iscun = state></Footer>
  </div>
</div>
</template>
<script>
import Footer from "@/components/Footer.vue";
import Rightpic from "@/components/Rightpic.vue";
export default {
  name: "dangjian",
  components: {
    Footer,
    Rightpic
  },
  data(){
    return {
      page:0,
      pagesize:1,
      reloadNum: 10,
      api_url_getlist:'/Main/News/newslist/tp/4',
      state: 1,
      listarr: [],
      showinfo: 'newsinfo'
    }
  },
  activated(){
    this.state = 2;
  },
  methods:{
      //下拉刷新
        refresh: function (done) {
          this.page = 1;
          let apiurl = this.api_url_getlist+"/pageNum/"+this.page+"/time/"+new Date().getTime();
          this.$axios.get(apiurl)
          .then(res=>{
            if(res.data.code ==200){
              this.listarr = res.data.data.rows;
              this.pagesize = res.data.data.pageSize; //重置分页总数
              this.reloadNum = res.data.data.reloadNum?"":this.reloadNum;   //若API未控制UL重载数量，调用默认值
              done();
            }else{
                done()
            }
              // this.$refs.my_scroller.finishPullToRefresh()
          })
        },

        infinite: function (done) {
            //刷新执行（创建时/上拉时）
            this.page = this.page*1+1   //当前页码+1，第一次进入时，由0->1
            if(this.page<= this.pagesize){
              //数据仍有下一页
              let apiurl = this.api_url_getlist+"/pageNum/"+this.page+"/time/"+new Date().getTime();  //拼接API接口，加上time防止缓存
              this.$axios.get(apiurl)
              .then(res=>{
                if(res.data.code ==200){
                let arr = res.data.data.rows;
                this.pagesize = res.data.data.pageSize; //重置分页总数
                this.reloadNum = res.data.data.reloadNum?"":this.reloadNum;   //若API未控制UL重载数量，调用默认值
              
                if(this.page % this.reloadNum == 0){
                  this.listarr = arr; //填充最新的数据
                }else{
                  //追加UL数据
                  for(let i=0;i<arr.length;i++){
                      this.listarr.push(arr[i]);
                  }
                }
                done();
                this.$refs.my_scroller.finishPullToRefresh();
                }else{
                  done()
                }
                })
            }else{
                //当前页码已超总页数
                this.$refs.my_scroller.finishInfinite(true);
            }
        }
    },
};
</script>
<style lang="scss" scoped>
.about {
  padding-bottom: 60px;
}
</style>
