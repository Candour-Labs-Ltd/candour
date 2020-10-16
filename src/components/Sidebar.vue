<template>
  <div>
    <vs-sidebar
      textWhite
      background="rgb(7, 14, 21)"
      absolute
      hover-expand
      reduce
      v-model="active"
      open
    >
    <router-link class="sidebar-link" to="/">
      <vs-sidebar-item id="home">
        <template #icon>
          <i class="bx bx-home"></i>
        </template>
        Home
      </vs-sidebar-item>
    </router-link>
      <router-link class="sidebar-link" to="/about">
      <vs-sidebar-item id="about">
        <template #icon>
          <i class="bx bx-book"></i>
        </template>
        About
      </vs-sidebar-item>
      </router-link>
      <!-- <vs-sidebar-item id="chat">
       <template #icon>
          <i class="bx bx-chat"></i>
        </template>
        Chat
      </vs-sidebar-item> -->
      <!-- <template #footer>
        <vs-row justify="space-between">
          <vs-avatar primary>
            <img src="../assets/alan_avatar.png" alt="" />
          </vs-avatar>

          <vs-avatar success badge-color="danger" badge-position="top-right">
            <i class="bx bx-bell"></i>
            <template #badge> 28 </template>
          </vs-avatar>
        </vs-row>
      </template> -->
    </vs-sidebar>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      active: "home",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sidebar-link {
  text-decoration: none;
}

h5 {
  font-size: 20px;
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
