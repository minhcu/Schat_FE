<template>
  <component
    :is="layout"
    :class="{
      dark: isDarkMode,
    }"
  >
    <router-view @layout="updateLayout" />
  </component>
</template>
<script>
// Import layouts here
import DefaultLayout from "./layouts/defaultLayout.vue";
import Auth from "./layouts/authLayout.vue";

export default {
  name: "App",
  components: {
    DefaultLayout,
    Auth,
  },
  data() {
    return {
      layout: "defaultLayout",
      isDarkMode: false,
    };
  },
  methods: {
    updateLayout(layout) {
      this.layout = layout;
    },
    toggleDarkMode() {
      this.isDarkMode = this.isDarkMode ? false : true;
    },
  },
};
</script>

<style></style>
