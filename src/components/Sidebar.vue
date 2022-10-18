<template>
  <div
    id="mainSidebar"
    class="sidebar"
    :onmouseover="toggleSidebar"
    :onmouseout="toggleSidebar"
    :style="{ width: mini ? '70px' : '250px' }">
    <a
      id="menu-button"
      @click="touchToggleSidebar">
      <span>
        <img
          src="@/assets/icons/menu_outline.svg"
          :style="{ transform: mini ? none : 'rotate(90deg)' }" />
      </span>
    </a>
    <router-link
      :to="{ name: 'home' }"
      @click="minimizeSidebar">
      <span class="icons"><img src="@/assets/icons/home_outline.svg" /></span>
      <span class="icon-text">Home</span>
    </router-link>
    <router-link
      :to="{ name: 'roadmap' }"
      @click="minimizeSidebar">
      <span class="icons"><img src="@/assets/icons/map.svg" /></span>
      <span class="icon-text">Roadmap</span>
    </router-link>
    <router-link
      :to="{ name: 'impressum' }"
      @click="minimizeSidebar">
      <span class="icons"><img src="@/assets/icons/document.svg" /></span>
      <span class="icon-text">Impressum</span>
    </router-link>
    <router-link
      :to="{ name: 'profile-dashboard' }"
      @click="minimizeSidebar">
      <span class="icons"><img src="@/assets/icons/cog_outline.svg" /></span>
      <span class="icon-text">Settings</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {};
  },
  props: {
    mini: Boolean,
  },
  computed: {
    supportsTouch() {
      return "ontouchstart" in window || navigator.msMaxTouchPoints;
    },
  },
  methods: {
    toggleSidebar() {
      if (!this.supportsTouch) {
        this.$emit("toggleSidebar");
      }
    },
    touchToggleSidebar() {
      this.$emit("toggleSidebar");
    },
    minimizeSidebar() {
      if (!this.mini && this.supportsTouch) {
        this.$emit("toggleSidebar");
      }
    },
  },
  watch: {},
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

.sidebar .icons img {
  filter: invert(19%) sepia(98%) saturate(3243%) hue-rotate(171deg)
    brightness(87%) contrast(90%);
  width: 40px;
}

#menu-button {
  position: relative;
  top: 15px;
  margin-right: 25px;
  img {
    width: 40px;
    filter: invert(88%) sepia(86%) saturate(588%) hue-rotate(90deg)
      brightness(106%) contrast(101%);
    transition: 0.5s;
  }
  @media screen and (pointer: fine) {
    display: none;
  }
}
</style>
