<template>
  <div id="app">
    <img alt="Candour" src="./assets/logo_long.png" width="50%" height="50%" />
    <MainWebPage msg="Candour" />
  </div>
</template>

<script>
import MainWebPage from "./components/MainWebPage.vue";

export default {
  name: "App",
  components: {
    MainWebPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
  margin-top: 60px;
}
</style>
