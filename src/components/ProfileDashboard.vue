<template>
  <div class="dashboard">
    <div class="container">
      <img src="@/assets/imgs/blank-profile.png" alt="Blank Profile" id="profile_image">
      <div class="Profile Information"></div>
    </div>

  </div>
</template>

<script>

export default {
  name: "ProfileView",
  components: {
  }
};
</script>

<style lang="scss" scoped>
  .container {
    display: grid;
  }

  #profile_image {
    width: calc((10vw + 10vh) / 1.5);
    grid: 0 0;
  }
</style>
