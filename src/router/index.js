import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router.js";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});


const DEFAULT_TITLE = 'blog';


router.afterEach((to, from) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  console.log('to', to)
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router;
