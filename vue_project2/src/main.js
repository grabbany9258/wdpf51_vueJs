// import { createApp } from "vue";
// import App from "./App.vue";
// import App from "./components/App1.vue";
// import App from "./components/Reactivity.vue";
// import App from "./components/Reactivity2.vue";/components
// import App from "./components/Reactivity3.vue";
// import App from "./components/Computed.vue";
// import App from "./components/Computed2.vue";
// import App from "./components/StyleBinding.vue";
// import App from "./components/ConditionRendering.vue";
// import App from "./components/ListRenderingFor.vue";
// import App from "./components/Event.vue";
// import App from "./components/Event2.vue";
// import App from "./components/Form1.vue";

// import './assets/main.css'

// For templating
import { createApp } from "vue"; // CreateApp
import App from "./App.vue"; //main component
import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import News from "./pages/News.vue";
import Products from "./pages/Products.vue";
import Search from "./pages/Search.vue";
// for routing node modules theke asle ./ lage na

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/news", component: News },
  { path: "/products", component: Products },
  { path: "/search", component: Search },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

createApp(App).use(router).mount("#app");
