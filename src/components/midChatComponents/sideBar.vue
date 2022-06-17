<template>
  <!-- Chat Info -->
  <div class="w-1/4 pl-3 bg-white">
    <div>
      <div class="flex flex-col items-center">
        <div class="w-20 h-20 text-center overflow-hidden rounded-full m-3">
          <img
            class="object-cover h-full w-full"
            src="https://i.ytimg.com/vi/ryex7piXx78/hqdefault.jpg"
            alt=""
          />
        </div>
        <h3>Channel - Username</h3>
      </div>
    </div>

    <!-- Settings -->
    <chat-setting />

    <!-- Member -->
    <chat-member />

    <!-- File -->
    <chat-files />

    <!-- Media -->
    <chat-media />
  </div>
</template>

<script>
import ChatFiles from "./sideBarComponents/chatFiles.vue";
import ChatMedia from "./sideBarComponents/chatMedia.vue";
import ChatMember from "./sideBarComponents/chatMember.vue";
import chatSetting from "./sideBarComponents/chatSetting.vue";
export default {
  name: "SideBar",
  components: { chatSetting, ChatMember, ChatMedia, ChatFiles },
};
</script>

<style></style>
