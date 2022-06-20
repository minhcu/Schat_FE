<template>
  <div class="overflow-hidden flex-1 p-8">
    <div class="">
      <message-box />
    </div>
  </div>
</template>

<script>
import messageBox from "./chatBoxComponents/messageBox.vue";

export default {
  name: "chatBox",
  components: {
    messageBox,
  },
};
</script>

<style></style>
