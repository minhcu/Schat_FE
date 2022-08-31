<template>
  <div class="flex-1">
    <div
      class="flex items-center justify-between px-[6px] py-[5px] text-[15px] shadow-[0_0_4px_rgba(0,0,0,0.2)]"
    >
      <div class="flex items-center p-[6px]">
        <div class="relative pr-[10px]">
          <div class="w-9 h-9">
            <img
              class="rounded-full"
              :src="this.$store.getters.defaultAvatar"
              alt=""
            />
          </div>
        </div>
        <div>
          {{ activeChat.name }}
        </div>
      </div>
      <div class="p-[6px]">
        <div
          class="w-7 h-7 flex justify-center items-center rounded-full cursor-pointer text-primary hover:text-white hover:bg-primary"
          @click="$emit('toggleChatInfo')"
        >
          <i class="fa-solid fa-ellipsis text-xl"></i>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "midChatView",
  props: {
    activeChat: Object,
  },
};
</script>

<style></style>
