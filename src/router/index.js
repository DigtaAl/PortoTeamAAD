import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Members from "@/views/Members.vue";
import Robots from "@/views/Robots.vue";
import Achievement from "@/views/Achievement.vue";
import News from "@/views/News.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/members",
    name: "Members",
    component: Members,
  },
  {
    path: "/robots",
    name: "Robots",
    component: Robots,
  },
  {
    path: "/achievement",
    name: "Achievement",
    component: Achievement,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
