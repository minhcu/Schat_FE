<template>
  <div
    class="fixed top-0 left-0 bottom-0 right-0 bg-[rgba(244,244,244,0.8)] flex justify-center items-center"
    @click="$emit('toggleModal')"
  >
    <div class="max-w-[550px] bg-white w-full rounded-2xl" @click.stop="">
      <div class="px-[60px] flex justify-center items-center py-[16px]">
        <span class="font-semibold">{{ title }}</span>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "baseModal",
  props: {
    title: String,
  },
};
</script>

<style></style>
