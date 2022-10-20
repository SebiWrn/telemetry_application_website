<template>
  <div class="settings">
    <div class="container">
      <ul>
        <li v-for="setting in settings" :key="setting">
          <span class="setting">{{setting.value}}</span>
          <input
            type="checkbox"
            class="setting-checkbox"
            :id="setting.value"
            :checked="setting.default"
            :ref="setting.value"/>
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
    },
    settingsValues() {
      let ret = {};
      this.settings.map((st) => st.value).map((st) => [st, this.$refs[st][0].checked]).forEach(element => {
        ret[element[0]] = element[1];
      });
      return ret;
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

  &:not(:first-child) {
    padding-top: calc((1vw + 1vh) / 4);
  }
}

.container {
  padding: calc((1vw + 1vh) / 2);
}

.setting {
  color: $text_color;
  text-align: left;
}
</style>
