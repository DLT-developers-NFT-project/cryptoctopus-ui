<template>
  <div class="body">
    <welcome-page
      msg="Welcome to DLT Talents NFT Game!
Please, enter your name to claim your NFT"
    />
    <welcome-page
      msg="Welcome to DLT Talents NFT Game!
Please, enter your name to claim your NFT"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import WelcomePage from "../components/welcome-components/WelcomePage.vue";

export default Vue.extend({
  name: "Home",

  components: {
    WelcomePage,
  },
});
</script>


