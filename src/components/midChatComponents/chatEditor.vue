<template>
  <!-- Chat Editor -->
  <div class="flex justify-between items-center rounded-lg bg-[#EBEDEF]">
    <!-- Upload Files -->
    <div class="px-4 py-[10px] text-[24px]">
      <i
        class="fa-solid fa-circle-plus cursor-pointer text-[#4F5660] hover:text-black"
      ></i>
    </div>

    <!-- Editor -->
    <div class="w-full py-[10px] pr-[10px] bg-transparent relative">
      <div class="absolute text-[#747F8D]">Nói gì đó đi</div>
      <div
        class="w-full bg-transparent focus:outline-none"
        contenteditable="true"
      ></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
