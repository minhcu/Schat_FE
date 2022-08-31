<template>
  <div
    class="max-h-screen bg-white h-full hidden lg:flex lg:flex-col w-[360px] border-r border-solid border-border"
  >
    <!-- Header -->
    <div class="flex items-center px-4 py-2">
      <div class="rounded-full relative">
        <img
          class="w-[36px] h-[36px] rounded-full cursor-pointer"
          :src="[userAvatar ? userAvatar : defaultAvatar]"
          alt=""
          @click="isShow = !isShow"
        />
        <user-menu
          class="absolute top-100 left-0 mt-4 w-[340px] z-50"
          v-show="isShow"
        />
      </div>
      <h2 class="flex-1 text-center text-primary font-bold">S-Chat</h2>
      <div
        class="w-[36px] h-[36px] flex justify-center items-center cursor-pointer rounded-full hover:bg-[#DDD5F0]"
      >
        <i class="fa-regular fa-pen-to-square"></i>
      </div>
    </div>
    <div class="px-4 py-2">
      <div class="flex items-center bg-btn rounded-2xl">
        <i class="fa-solid fa-magnifying-glass pl-[10px]"></i>
        <input
          class="outline-none bg-transparent p-2 text-sm flex-1"
          type="search"
          placeholder="Tìm gì đó đi..."
          v-model="searchInput"
          @focus="isShowSearchPanel = true"
          @blur="isShowSearchPanel = false"
          @keydown="handleSearch"
        />
      </div>
    </div>

    <!-- Chat Group -->
    <div class="flex-1 overflow-x-hidden overflow-y-scroll">
      <div v-if="isShowSearchPanel">Seach Panel</div>
      <slot v-else />
    </div>

    <!-- Desktop App Download -->
    <span
      class="block text-center p-4 cursor-pointer shadow-[0_0_2px_rgba(0,0,0,0.3)]"
    >
      Cài đặt ứng dụng S-Chat
    </span>
  </div>
</template>

<script>
import userMenu from "./user/userMenu.vue";

export default {
  name: "leftChatView",
  components: {
    userMenu,
  },
  props: {
    userAvatar: String,
  },
  data() {
    return {
      isShow: false,
      isShowSearchPanel: false,
      defaultAvatar: this.$store.getters.defaultAvatar,
      searchInput: "",
    };
  },
  methods: {
    handleSearch(e) {
      if (e.which === 13 && this.searchInput) {
        e.preventDefault();
        const dto = {
          term: this.searchInput,
          senderEmail: this.$store.getters.userEmail,
        };
        this.$socket.emit("event:searchUsersAndGroups", "both", dto);
        // console.log(dto);
      }
    },
  },
  sockets: {
    "event:searchUsersAndGroups": (response) => {
      console.log(response.data);
    },
  },
};
</script>

<style></style>
