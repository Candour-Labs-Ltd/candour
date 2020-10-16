<template>
  <div>
    <h1>{{ msg }}</h1>
    <Sidebar darken />
    <vs-row>
      <vs-col> </vs-col>
    </vs-row>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";

export default {
  name: "MainWebPage",
  components: {
    Sidebar,
  },
  props: {
    msg: String,
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
h3 {
  margin: 10px 0 0;
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
