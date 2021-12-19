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
import DefaultLayout from "./layouts/default.vue";
import Auth from "./layouts/auth.vue";
// import {camelCase} from "lodash";

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
  created() {
    // Use busEvent to trigger these listeners
    this.$bus.$on("toggleDarkMode", () => {
      this.toggleDarkMode();
    });
    // this.$bus.$on('layout', (layout) => {
    //   // For example: $bus.$emit('layout', 'unauth') will trigger 'unauthLayout'
    //   this.updateLayout(camelCase(layout + '_layout'))
    // })
  },
};
</script>

<style></style>
