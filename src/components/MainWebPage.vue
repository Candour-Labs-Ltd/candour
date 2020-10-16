<template>
  <div>
    <Sidebar />
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
        <h1 class="main-title">{{ msg }}</h1>
        <h3 class="sub-text">
          <i>({{ subtext }})</i>
        </h3>
        <p>Ethical Social Networking</p>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col offset="5" w="5">
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";

export default {
  name: "MainWebPage",
  components: {
    Sidebar
  },
  props: {
    msg: String,
    subtext: String,
  },
  data() {
    return {
      theme: true,
    };
  },
  methods: {
    toggleDarkMode() {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding-top: 75px;
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
