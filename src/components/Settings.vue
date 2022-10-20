<template>
  <div class="settings">
    <div class="container">
      <ul>
        <li v-for="setting in settings" :key="setting">
          <span class="setting">{{setting}}</span>
          <input
            type="checkbox"
            class="setting-checkbox"
            name=""
            id="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import settingsImp from '@/config/settings.json';

export default {
  name: "SettingsView",
  components: {},
  data() {
    return {};
  },
  computed: {
    settings() {
      return settingsImp.settings;
    }
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>
li {
  list-style-type: none;
  display: grid;
  grid-template-columns: 90% 10%;
}

.container {
  padding: calc((1vw + 1vh) / 2);
}

.setting {
  color: $text_color;
  text-align: left;
}
</style>
