import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../components/City.vue";
Vue.use(VueRouter);

const routes = [
   
    {
        path: "/",
        name: "User",
        component: () =>
            import("../views/User.vue"),
           
    },
    {
      path: "/register",
      name: "register",
      component: () =>
          import("../views/Register.vue"),
    },
    {
      path: "/Download",
      name: "download",
      component: () =>
          import("../views/download.vue"),
    },
    {
      path: "/Service",
      name: "service",
      component: () =>
          import("../views/service.vue"),
    },
    {
        path: "/QuestionDetail",
        name: "questionDetail",
        component: () =>
            import("../views/questionDetail.vue"),
      },
      {
        path: "/Balance",
        name: "balance",
        component: () =>
            import("../views/balance.vue"),
      },
      {
        path: "/Discount",
        name: "discount",
        component: () =>
            import("../views/Discount.vue"),
      },
      {
        path: "/Integral",
        name: "integral",
        component: () =>
            import("../views/integral.vue"),
      },
      {
        path: "/Order",
        name: "order",
        component: () =>
            import("../views/order.vue"),
      },


      
];

const router = new VueRouter({
    routes,
});

export default router;