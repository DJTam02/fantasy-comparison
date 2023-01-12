import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory((import.meta.env.PROD ? "/fantasy-comparison" : "") + import.meta.env.BASE_URL),
  routes: [
    {
      path: (import.meta.env.PROD ? "/fantasy-comparison" : "") + "/change-secret",
      name: "changeSecret",
      component: () => import("../views/changeSecret/ChangeSecret.vue")
    },
    {
      path: "/",
      name: "home",
      component: () => import("../views/home/Home.vue")
    },
    {
      path: (import.meta.env.PROD ? "/fantasy-comparison" : "") + "/authenticate",
      name: "authenticate",
      component: () => import("../views/authenticate/Authenticate.vue")
    },
    // {
    //   path: "/",
    //   name: "home",
    //   component: HomeView,
    // },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
