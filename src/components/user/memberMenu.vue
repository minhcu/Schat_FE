<template>
  <div
    class="bg-white p-1 drop-shadow-2xl rounded-[10px] before:content-[''] before:top-[-20px] before:right-[2px] before:absolute before:border-[12px] before:border-transparent before:border-b-white before:z-0"
  >
    <div
      class="cursor-pointer flex items-center hover:bg-primary-50 rounded-md peer mb-2"
    >
      <span class="ml-2">Nhắn tin</span>
    </div>
    <div
      class="cursor-pointer flex items-center hover:bg-primary-50 rounded-md peer"
    >
      <span class="ml-2">Xóa thành viên</span>
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
