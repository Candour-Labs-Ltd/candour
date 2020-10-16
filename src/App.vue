<template>
  <div id="app">
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
  data() {
    return {
      darken: {}
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
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: grey;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1 {
  font-family: "Poiret One", sans-serif;
  font-size: 20rem;
  color: #fff;
}

darken {
  text-align: center;
  color: #2c3e50;
  background: black;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
