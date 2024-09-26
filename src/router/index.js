import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Members from "@/views/Members.vue";
import Robots from "@/views/Robots.vue";
import Achievement from "@/views/Achievement.vue";
import NotFound from "@/components/NotFound.vue";
import History from "@/components/History.vue";

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
    path: "/history/:year",
    name: "History",
    component: History,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
