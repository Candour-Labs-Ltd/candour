<template>
  <div id="app">
    <!-- <Sidebar /> -->
    <router-view/>
  </div>
</template>

<script>
// import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    // Sidebar
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poiret+One");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400");

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background: rgb(30, 32, 35);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  justify-content: center;
  color: #2c3e50;
  background: rgb(20, 24, 28);
  display: flex;
  height: 100%;
}

</style>
