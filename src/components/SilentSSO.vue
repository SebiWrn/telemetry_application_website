<template>
  <div>

  </div>
</template>

<script>

export default {
  name: "SilentSSO",
  components: {
  },
  mounted() {
    parent.postMessage(location.href, location.origin);
  }
};
</script>

<style lang="scss" scoped>
</style>
