<script>
import TopBar from './components/shared/TopBar.vue'
export default {
  name: 'App',
  components: {
        TopBar
  }
}
</script>

<template>
  <TopBar/>
  <main>
    <router-view/>
  </main>
</template>

<style>
  body{
    margin:0;
    padding:0;
  }
  #app {
    width: 100%;
    background-color: black;
  }
</style>
