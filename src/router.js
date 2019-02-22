import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // },
    {
      path: "/newsinfo/:id",
      name: "newsinfo",
      meta:{
        keepAlive: false
      },
      component: () =>
        import("./pages/home/newsinfo.vue")
    },
    {
      path: "/dangjian",
      name: "dangjian",
      meta:{
        keepAlive: true
      },
      component: () =>
        import("./views/Dangjian.vue")
    },
    {
      path: "/xiangcun",
      name: "xiangcun",
      meta:{
        keepAlive: true
      },
      component: () =>
        import("./views/Xiangcun.vue")
    },
    {
      path: "/pingan",
      name: "pingan",
      meta:{
        keepAlive: true
      },
      component: () =>
        import("./views/Pingan.vue")
    },
    {
      path: "/wode",
      name: "wode",
      meta:{
        keepAlive: true
      },
      component: () =>
        import("./views/Wode.vue")
    },
  ]
});
