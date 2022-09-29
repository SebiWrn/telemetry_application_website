<template>
  <div class="home">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <TelemetryApplicationMain />
    <ImportantLinks />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import TelemetryApplicationMain from "@/components/TelemetryApplicationMain.vue";
import ImportantLinks from "@/components/ImportantLinks.vue";

export default {
  name: "HomeView",
  components: {
    //HelloWorld
    TelemetryApplicationMain,
    ImportantLinks,
  },
};
</script>

<style lang="sass" scoped>
</style>
