<template>
<div>
    <ul class="footer" v-if="iscun ==1">
        <li v-for="(item,index) in list" :key="index">
            <router-link :to='{name:item.name}'>
                <div>
                    <div><span class="icon iconfont" :class="item.fontname"></span></div>
                    <div>{{item.title}}</div>
                </div>
            </router-link>
        </li>
    </ul>
    <ul class="footer" v-if="iscun==2">
        <li v-for="(item,index) in slist" :key="index">
            <router-link :to='{name:item.name}'>
                <div>
                    <div><span class="icon iconfont" :class="item.fontname"></span></div>
                    <div>{{item.title}}</div>
                </div>
            </router-link>
        </li>
    </ul>
</div>
    
</template>
<script>
export default {
    name:'Footer',
    props: {
        iscun: Number
    },
    data(){
        return {
            list:[
                {name:'home',title:'首页',fontname:'icon-shouyedilan'},
                {name:'dangjian',title:'党建',fontname:'icon-dangyuanxianfengdilan'},
                {name:'xiangcun',title:'乡村',fontname:'icon-shequwuyedilan'},
                {name:'pingan',title:'平安',fontname:'icon-dilanpinganjiansheai'},
                {name:'wode',title:'我的',fontname:'icon-gerenzhongxindilan'},
            ],
            slist:[
                {name:'home',title:'首页',fontname:'icon-shouyedilan'},
                {name:'dangjian',title:'党建',fontname:'icon-dangyuanxianfengdilan'},
                {name:'xiangcun',title:'社区',fontname:'icon-shequwuyedilan'},
                {name:'pingan',title:'平安',fontname:'icon-dilanpinganjiansheai'},
                {name:'wode',title:'我的',fontname:'icon-gerenzhongxindilan'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variable.scss';
.footer{
    display: flex;
    font-size: $fontsize;
    justify-content: space-around;
    height: $footerheight -1;
    border-top: 1px solid #ccc;
    padding: 10px 0;
    background-color: #fff;
    a{
        color: $gray;
    }
    .iconfont {
        font-size: 20px;
        color: $gray;
    }
    a.router-link-exact-active{
        color: $default-color;
        & .iconfont {
            color: $default-color;
        }
    }
}

</style>
