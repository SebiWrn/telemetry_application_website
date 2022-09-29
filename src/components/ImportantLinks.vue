<template>
  <div class="important-links">
    <div class="bubble-container">
      <Bubble :img_require="require(`@/assets/company_logos/github_logo_light.png`)" alt="Github Logo" text="Github" href="https://github.com/TheUniquePro/telemetry_application_website"/>
      <Bubble :img_require="require(`@/assets/company_logos/discord_logo.svg`)" alt="Discord Logo" text="Discord" text_color="#5865F2" href="https://discord.gg/rCD8QhqnGK"/>
    </div>
  </div>
</template>

<script>
import Bubble from '@/components/LinkBubble.vue'
export default {
  name: "ImportantLinks",
  components: {
    Bubble
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .important-links {
    padding-top: 2vh;
  }

  .bubble-container {
    display: flex;
    justify-content: center;
    align-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 4em;
    column-gap: 2vw;
  }
</style>
