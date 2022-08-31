<template>
  <component :is="layout" v-if="isDataLoaded">
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
      isDataLoaded: false,
    };
  },
  methods: {
    updateLayout(layout) {
      this.layout = layout;
    },
  },
  sockets: {
    // Auth when first access
    connect: function () {
      const accessToken = this.$store.getters.accessToken;
      this.$socket.emit("event:authenticateUser", `Bearer ${accessToken}`);
    },
    // Success = false | Redirect to login
    "event:authenticateUser": function (response) {
      if (!response.success && !(location.pathname == "/login")) {
        return (location.href = "/login");
      }
      this.isDataLoaded = true;
    },
    // Sucess = true | Get chat data
    "event:getAllConversations": function (response) {
      this.$store
        .dispatch("getChatData", response.data)
        .then((this.isDataLoaded = true));
      const URL = "/chat/" + this.$store.getters.lastestChat.id;
      if (response.success && !(location.pathname === URL)) {
        return this.$router.replace(URL);
      }
    },
  },
  created() {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) return this.$store.dispatch("fetchUserData", userData);
  },
};
</script>

<style></style>
