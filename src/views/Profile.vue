<template>
  <div class="profile">
    <div class="profile-sidebar">
      <button class="tabs" @click="changeTabTo(0)">Dashboard</button>
      <button class="tabs" @click="changeTabTo(1)">Datenschutz</button>
    </div>
    <div class="wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProfileView",
  data() {
    return {
      tabs: [
        {name: 'profile-dashboard'},
        {name: 'profile-settings'}
      ],
    }
  },
  components: {
  },
  methods: {
    changeTabTo(tabNr) {
      this.$router.push(this.tabs[tabNr]);
    }
  }
};
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  width: 100%;
  height: 100vh;
}

.profile-sidebar {
  align-self: center;
  width: 15vw;
  height: 70vh;
  background-color: $light_background;
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
}

.wrapper {
  align-self: center;
  width: 50vw;
  height: 70vh;
  background-color: $light_background;
  border-radius: 5px;
}

.tabs {
  height: 5vh;
  text-align: center;
  vertical-align: middle;
  border: none;
  background-color: transparent;
  border: 1px solid; border-image: linear-gradient(90deg, transparent 5%, $lighter_background 20%, $lighter_background 80%, transparent 95%) 1; border-left:none; border-top:none; border-right:none;
  border-radius: 5px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}

.active {
    background-color: rgba(0, 0, 0, 0.15);
  }
</style>
