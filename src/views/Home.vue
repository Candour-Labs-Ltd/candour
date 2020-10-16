<template>
  <div>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
        <h1 class="main-title">{{ title }}</h1>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="fle" vs-align="right" w="12" offset="7">
        <h3 class="sub-text">
          <i>({{ subtext }})</i>
        </h3>
      </vs-col>
      <vs-col offset="1">
        <p class="motto">Ethical Social Networking</p>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col justify="center" offset="6">
        <LearnMore />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import LearnMore from "../components/LearnMore.vue";

export default {
  name: "Home",
  components: {
    LearnMore,
  },
  props: {},
  data() {
    return {
      theme: true,
      title: "Candour",
      subtext: "kan-da",
    };
  },
  methods: {
    toggleDarkMode() {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-title {
  font-family: "Poiret One", sans-serif;
  font-size: 200px;
  color: #fff;
  margin: 0px;
  padding: 0px;
  padding-top: 75px;
}

.sub-text {
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  font-size: 30px;
  color: #fff;
  margin: 0px;
  padding: 0px;
}

.motto {
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  color: #fff;
  margin: 0px;
  padding: 10px;
}
</style>
