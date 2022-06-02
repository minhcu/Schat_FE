<template>
  <div
    class="chat w-screen h-screen grid grid-cols-[20%_1fr] relative bg-[#F9F9F9] gap-3"
  >
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
