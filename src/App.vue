<template>
  <div id="app">
    <MainWebPage msg="Candour" subtext="Kan-Da" />
  </div>
</template>

<script>
import MainWebPage from "./components/MainWebPage.vue";

export default {
  name: "App",
  components: {
    MainWebPage,
  },
  data() {
    return {
      darken: {},
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poiret+One");

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
  background: rgb(30, 32, 35);
  display: flex;
  height: 100%;
}

.main-title {
  font-family: "Poiret One", sans-serif;
  font-size: 200px;
  color: #fff;
  margin: 0px;
  padding: 0px;
}

.sub-text {
  font-family: "Poiret One", sans-serif;
  font-size: 60px;
  color: #fff;
  margin: 0px;
  padding: 0px;
}
</style>
