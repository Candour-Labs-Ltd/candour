<template>
  <div>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
        <h1 class="main-title">{{ title }}</h1>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col offset="2" w="8">
         <div class="con-content">
          <h4>
            About
          </h4>
          <br>
          <p>
            Candour (pronounced kan-da ) is a framework of UI components created with Vuejs to make projects easily and with a unique and pleasant style, vuesax is created from scratch and designed for all types of developers from the frontend lover to the backend who wants to easily create their visual approach to the end-user

            We are focused on streamlining the work of the programmer by giving components created in their entirety and with independent customization and very easy to implement, so creativity is in our hands but we do not neglect that each project is different both visually and in its ecosystem

            Vuesax does not have a design line such as other component frameworks based on Material Design, we believe that there are already emaciated frameworks that look visually and in UI / UX and we don't want to be one more of the bunch, apart from that we love to create and design new experiences and surprise you with new elements or details that we can only do by being visually free.
          </p>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  props: {},
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
p {
  font-family: "Open Sans", sans-serif;
  font-size: 19px;
  color: #fff;
  margin: 0px;
  padding: 0px;
}

h4 {
  font-family: "Open Sans", sans-serif;
  font-size: 30px;
  color: #fff;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}

</style>
