<template>
  <div class="chat w-screen h-screen flex bg-[#F9F9F9]">
    <left-column />
    <mid-column />
  </div>
</template>

<script>
import leftColumn from "@/components/leftChatView.vue";
import midColumn from "@/components/midChatView.vue";

export default {
  name: "ChatView",
  components: {
    leftColumn,
    midColumn,
  },
};
</script>

<style></style>
