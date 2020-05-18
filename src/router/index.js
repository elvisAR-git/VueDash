import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Transactions from '../views/Transactions.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/transactions",
    name: "Transactions",
    component: Transactions
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
