import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
// import Home from "./pages/Master.vue";
import Home from "./pages/Home.vue";
import Shop from "./pages/Shop.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/shop", component: Shop },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});
createApp(App).use(router).mount("#app");
