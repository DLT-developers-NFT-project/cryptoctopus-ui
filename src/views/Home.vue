<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->

    <Welcome
      msg="Welcome to DLT Talents NFT Game!
Please, enter your name to claim your NFT"
    />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Welcome from "@/components/Welcome.vue";

export default {
  name: "Home",
  components: {
    Welcome,
    // HelloWorld,
  },
};
</script>
