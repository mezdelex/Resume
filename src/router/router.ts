import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: () => import("@/views/Projects.vue"),
      path: "/",
    },
    {
      component: () => import("@/views/Timeline.vue"),
      path: "/timeline",
    },
  ],
});
