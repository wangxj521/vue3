<template>
  <div class="home">
    <div>
      <Rightpic :items = 'listarr' :routername ='showinfo' />
    </div>
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
</style>