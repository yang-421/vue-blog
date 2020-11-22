import Hello from "../components/HelloWorld.vue";
import Login from "../components/Login.vue";
import NotFound from "../components/NotFound.vue";
import Home from "../components/Home.vue";
// 1. Define route components.
// These can be imported from other files

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Home },
  { meta: { title: "login" }, path: "/login", component: Login },
  { path: "/hello", component: Hello },
  {
    // will match everything
    path: "*",
    component: NotFound,
  },
];

export default routes;
