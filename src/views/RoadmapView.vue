<template>
  <div class="roadmap">
    <h1>Roadmap of the Project</h1>
    <img src="@/assets/roadmap/roadmap.png" class="roadmap-img" alt="" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "RoadmapView",
  components: {},
};
</script>

<style lang="scss" scoped>
* {
  color: $text_color;
}

h1 {
  padding-bottom: 2vh;
}

.roadmap-img {
  height: 70vh;
  width: auto;
  aspect-ratio: initial;

  @media screen and (orientation: portrait),
    screen and (max-aspect-ratio: 5/4) {
    height: auto;
    width: 80vw;
  }
}
</style>
