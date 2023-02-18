import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
// import Home from "./pages/Master.vue";
import Home from "./pages/Home.vue";
import Shop from "./pages/Shop.vue";
import About from "./pages/About-us.vue";
import Cart from "./pages/Cart.vue";
import Checkout from "./pages/Checkout.vue";
import Contact from "./pages/Contact-us.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/shop", component: Shop },
  { path: "/about", component: About },
  { path: "/cart", component: Cart },
  { path: "/checkout", component: Checkout },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});
createApp(App).use(router).mount("#app");
