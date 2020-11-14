<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  created () {
    console.log('this', this); 
  }

}
</script>


<style>

</style>
