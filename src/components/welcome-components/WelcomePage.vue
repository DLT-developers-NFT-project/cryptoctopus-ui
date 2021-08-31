<template>
  <div class="welcome">
    <div class="header">
      {{ msg }}
    </div>

    <div>
      <v-btn color="primary" depressed elevation="3" plain text>Send</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Octopus } from "../../models/octopus.model";

@Component
export default class WelcomePage extends Vue {
  @Prop() private msg!: string;
  @Prop() private octopus!: Octopus;

  public setOctopus(octopus: Octopus): Octopus {
    return octopus;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
