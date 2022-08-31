<template>
  <div
    class="content-[''] absolute top-[-130%] left-1/2 -translate-x-1/2 -translate-y-1/2"
  >
    <div
      class="px-3 py-2 bg-white rounded-[24px] shadow-2xl drop-shadow-2xl flex"
    >
      <div class="p-[2px]" v-for="icon in icons" :key="icon">
        <div
          class="w-[32px] h-[32px] flex justify-center items-center btn-hover"
          @click="$emit('react', icon)"
        >
          {{ icon }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "reactionItem",
  props: {
    icons: Array,
  },
};
</script>

<style></style>
