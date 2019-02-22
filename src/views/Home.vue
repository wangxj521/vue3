<template>
<div>
  <scroller>
  <div class="home">
    <div class="picbox">
      <div class="headpic">
        <div class="cun">张王村</div>
        
      </div>
      <div class="tips"></div>
    </div>
    <div>
      <Rightpic :items = 'listarr' :routername ='showinfo' />
    </div>
    
  </div>
  </scroller>
  <div class="footerbox">
    <Footer :iscun = 'state'></Footer>
  </div>
</div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Rightpic from "@/components/Rightpic.vue";
export default {
  name: "home",
  components: {
    Footer,
    Rightpic
  },
  data() {
    return {
      state: 1,
      listarr: [],
      showinfo: 'newsinfo'
    }
  },
  activated() {
    this.state = 1;
    this.$axios.get('/Main/News/newslist/tp/4/pageNum/1').then(res=>{
        if(res.data.code==200){
            this.listarr = res.data.data.rows
        }
    })
  }
};
</script>
<style lang="scss" scoped>
.home {
  padding-bottom: 60px;
}
.picbox {
  position: relative;
  width: 100%;
  height: 3rem;
  background-color: #ccc;
  margin-bottom: 0.2rem;
  .headpic{
    position: absolute;
    bottom: 0.3rem;
    left: 0.3rem;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 0.1rem;
    border: 1px solid #fff;
  }
  .cun {
    position: absolute;
    left: 1.4rem;
    bottom: 0;
    font-size: 0.32rem;
    color: #fff;
    height: 0.4rem;
    padding-left: 0.1rem;
    width: 1.2rem;
  }
  .tips{
    position: absolute;
    right: 0.4rem;
    top: 0.4rem;
    width: 1.5rem;
    height: 0.4rem;
    border-radius: 0.2rem;
    background: linear-gradient(90deg,#efefef,#fff);

  }
}

</style>