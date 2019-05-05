import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
    mode: 'history',
  routes: [

    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("./views/Signup.vue")
    },
    {
      path: "/statement",
      name: "statement",
      component: () => import("./views/Statement.vue")
    },
    {
      path: "/wishlist",
      name: "wishlist",
      component: () => import("./views/Wishlist.vue")
    },
    {
      path: "/test",
      name: "test",
      component: () => import("./views/Test.vue")
    },
    {
      path: "/cosmetic",
      name: "cosmetic",
      component: () => import("./views/UserCosmetic.vue")
    }
  ]
});
