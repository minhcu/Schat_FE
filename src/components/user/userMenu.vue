<template>
  <div
    class="bg-white p-1 drop-shadow-2xl rounded-[10px] before:content-[''] before:top-[-20px] before:left-[6px] before:absolute before:border-[12px] before:border-transparent before:border-b-white before:z-0"
  >
    <div
      class="cursor-pointer flex items-center hover:bg-primary-50 rounded-md peer mb-2"
    >
      <i
        class="fa-solid fa-gear p-2 relative z-50 group-hover:after:bg-none after:z-[-1] after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:bg-btn after:w-8 after:h-8 after:rounded-full"
      ></i>
      <span class="ml-2">Tùy chọn</span>
    </div>
    <div
      class="cursor-pointer flex items-center hover:bg-primary-50 rounded-md peer"
    >
      <i
        class="fa-solid fa-right-from-bracket p-2 relative z-50 group-hover:after:bg-none after:z-[-1] after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:bg-btn after:w-8 after:h-8 after:rounded-full"
      ></i>
      <span class="ml-2" @click="handleLogOut">Đăng xuất</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          context: "Tùy chọn",
          icon: "fa-solid fa-gear",
        },
      ],
    };
  },
  methods: {
    handleLogOut() {
      localStorage.setItem("user", JSON.stringify(""));
      this.$store.dispatch("fetchUserData", "");
      const accessToken = this.$store.getters.accessToken;
      this.$socket.emit("event:authenticateUser", `Bearer ${accessToken}`);
    },
  },
};
</script>

<style>
.peer:hover > i::after {
  background: none;
}
</style>
