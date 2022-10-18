<template>
  <div id="mainSidebar" class="sidebar" :onmouseover="toggleSidebar" :onmouseout="toggleSidebar" :style="{ width: mini ? '70px' : '250px' }">
    <router-link :to="{ name: 'home' }">
      <span class="icons"><img src="@/assets/icons/home.svg"></span>
      <span class="icon-text">Home</span>
    </router-link>
    <router-link :to="{ name: 'roadmap' }">
      <span class="icons"><img src="@/assets/icons/map.svg"></span>
      <span class="icon-text">Roadmap</span>
    </router-link>
    <router-link :to="{ name: 'impressum' }">
      <span class="icons"><img src="@/assets/icons/document.svg"></span>
      <span class="icon-text">Impressum</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
    };
  },
  props: {
    mini: Boolean,
  },
  computed: {
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggleSidebar");
    }
  },
  watch: {
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .sidebar {
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: $light_background;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 1;
    transition: 0.5s;
    white-space: nowrap;
    overflow-x: hidden;
  }

  .icon-text {
    vertical-align: middle;
  }

  .icons {
    position: relative;
    top: 15px;
    margin-right: 25px;
  }

  .sidebar a {
    padding: 8px 8px 8px 15px;
    text-decoration: none;
    font-size: 25px;
    color: $hightlight_1;
    display: block;

    &:hover {
      opacity: 80%;
    }
  }

  .sidebar img {
    filter: invert(19%) sepia(98%) saturate(3243%) hue-rotate(171deg) brightness(87%) contrast(90%);
    width: 40px;
  }
</style>
