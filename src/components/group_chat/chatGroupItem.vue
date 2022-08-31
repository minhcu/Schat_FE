<template>
  <div class="px-1">
    <router-link
      class="p-[10px] block hover:bg-primary-50 rounded-md"
      :to="'/chat/' + data.id"
    >
      <div class="flex items-center rounded-lg">
        <div class="relative pr-[10px]">
          <div class="w-12 h-12">
            <img
              class="rounded-full"
              :src="[data.img ? data.img : defaultAvatar]"
              alt=""
            />
          </div>
        </div>
        <div class="overflow-hidden">
          <h3 class="truncate overflow-x-hidden max-w-full">
            {{ data.name }}
          </h3>
          <span class="block truncate text-[12px] font-light"
            >{{ data.lastMessage.sender }} -
            {{ data.lastMessage.content }}</span
          >
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "chatGroupItem",
  props: {
    data: Object,
  },
  data() {
    return {
      defaultAvatar: store.getters.defaultAvatar,
    };
  },
};
</script>

<style></style>
