<template>
 <div>
    <vs-button gradient @click="popup=!popup" type="filled">Learn More</vs-button>
    <vs-dialog
      style="color:rgb(0,0,0)"
      background-color="rgba(255,255,255,.6)"
      background-color-popup="rgb(0, 0, 0)" title="background" v-model="popup">
      <p>
           At Candour we are working towards a simplistic Social Networking tool that really brings Social Networking back to one core principle; <b>Social Connection</b>.
          <br>
           From this we plan to build an Ethical Social Network. Candour will be built on the following principles:
          <br>
          <br>
          <i class="bx bx-no-entry"></i>
            No Ads. Ever.
          <br>
          <br>
          <i class="bx bx-football"></i>
            Users must be over 12. Children do not benefit from Social Networking. Go outside and play.
          <br>
          <br>
          <i class="bx bx-book-reader"></i>
            Parental Guidance. Users whos children are over 12 and would like to use Candour will be able to via a Parent or Guardian account.
          <br>
          <br>
          <i class="bx bx-coffee-togo"></i>
            Usage Awareness. Our Social Network will warn users how long they have been active, remind them to take a break and promote real world interactions with other users.
          <br>
          <br>
      </p>
    </vs-dialog>
</div>
</template>

<script>
export default {
  name: "LearnMore",
  data() {
    return {
      popup: false,
    };
  },
};
</script>