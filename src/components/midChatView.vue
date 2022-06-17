<template>
  <div class="w-4/5">
    <div class="w-full h-full bg-[#F9F9F9] flex">
      <div class="flex flex-col flex-1 p-5">
        <!-- Chat Head -->
        <div class="flex justify-between items-center">
          <h2 class="truncate py-3 font-bold text-xl">Channel - User name</h2>
          <!--  -->
          <div
            class="p-3 text-xl opacity-60 hover:opacity-100 cursor-pointer"
            @click="show = !show"
          >
            <i class="fa-solid fa-circle-info"></i>
          </div>
        </div>

        <!-- Chat Message -->
        <chat-box />

        <!-- Chat Editor -->
        <chat-editor />
      </div>

      <!-- Chat Info -->
      <transition name="slide-x">
        <side-bar v-if="show" />
      </transition>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/midChatComponents/sideBar.vue";
import ChatBox from "@/components/midChatComponents/chatBox.vue";
import ChatEditor from "@/components/midChatComponents/chatEditor.vue";

export default {
  name: "midChatView",
  components: {
    SideBar,
    ChatBox,
    ChatEditor,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style></style>
