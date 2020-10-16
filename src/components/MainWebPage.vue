<template>
  <div class="app">
    <Sidebar />
    <vs-row>
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        w="12"
        offset="5"
      >
        <vs-button danger @click="toggleDarkMode()"> Dark Mode </vs-button>
      </vs-col>
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
      darkmode: {
        backgroundColor: "#16a085",
      },
    };
  },
  methods: {
    toggleDarkMode() {
      if (this.darkmode) {
        console.log("Dark Mode is on");
      } else {
        console.log("Dark Mode is off");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
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
