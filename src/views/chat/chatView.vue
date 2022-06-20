<template>
  <div
    class="w-screen h-screen flex flex-col gap-7 justify-center items-center"
  >
    <button class="w-1/5 h-1/5 bg-slate-400" @click="logOut">Log out</button>
    <button class="w-1/5 h-1/5 bg-slate-400" @click="auth">Getdata</button>
  </div>
</template>

<script>
export default {
  methods: {
    logOut(e) {
      e.preventDefault();

      this.$store.dispatch("deleteUserData");

      this.$socket.emit(
        "event:authenticateUser",
        `Bearer ${this.$store.state.user.accessToken}`
      );
    },
    auth(e) {
      e.preventDefault();

      this.$socket.emit(
        "event:authenticateUser",
        `Bearer ${this.$store.state.user.accessToken}`
      );
    },
  },
  sockets: {},
};
</script>

<style></style>
