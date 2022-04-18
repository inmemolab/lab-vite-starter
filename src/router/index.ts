import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// Import layouts
import LayoutDefault from "@/layouts/layoutDefault.vue";
import layoutOther from "@/layouts/layoutOther.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../views/HomePage.vue"),
    meta: { layout: LayoutDefault }
  },
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("../views/HomePage.vue"),
    meta: { layout: LayoutDefault }
  },
  {
    name: "about",
    path: "/about",
    component: () => import("../views/AboutPage.vue"),
    meta: { layout: layoutOther }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
