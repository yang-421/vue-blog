<template>
  <div class="hello">
    <h1>Home</h1>
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "Home",
  props: {
    msg: String,
  },
  created() {
    const authed = sessionStorage.getItem("authed");
    if (authed !== 1) {
      router.push("login");
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
