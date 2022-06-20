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
  sockets: {
    connect: function () {
      this.$socket.emit(
        "event:authenticateUser",
        `Bearer ${this.$store.state.user.accessToken}`
      );
    },
    "event:authenticateUser": function (response) {
      if (!response.success && !(location.pathname == "/login")) {
        return (location.href = "/login");
      }
    },
    "event:getAllConversations": function (response) {
      delete response["success"];
      this.$store.dispatch("fetchUserData", response);
      if (response.success && !(location.pathname == "/chat")) {
        return (location.href = "/chat");
      }
    },
  },
};
</script>

<style></style>
