<template>
  <div class="py-3 pl-3">
    <div
      class="bg-white h-full w-full rounded-xl py-5 px-5 drop-shadow-xl border-slate-50"
    >
      <div class="py-2 px-1 text-center">
        <h1 class="text-4xl font-bold text-cyan-700">S-Chat</h1>
        <p class="text-base">Nơi Deadline bắt đầu</p>
      </div>
      <div class="py-2 px-1 flex justify-center items-center">
        <div class="pr-2">
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="text-xs lg:text-base flex justify-center items-center">
          <div class="flex justify-center items-center bg-[#c5cad9] py-1 px-2">
            <div class="pr-1">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <input
              class="bg-transparent placeholder:text-[#70737D] focus:outline-none p-1 text-xs"
              type="text"
              name=""
              id=""
              placeholder="Tìm kiếm gì đó"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-start mt-3">
        <div class="mt-3 flex items-center">
          <div class="text-[#3EA0FE]">
            <i class="fa-solid fa-house-user"></i>
          </div>
          <div>Dashboard - Everything</div>
        </div>
        <div class="mt-3 flex items-center">
          <div class="text-[#7209B763]">
            <i class="fa-solid fa-briefcase"></i>
          </div>
          <div>Work Space</div>
        </div>
        <div class="mt-3 flex items-center">
          <div class="text-[#4361EE]">
            <i class="fa-solid fa-comment-dots"></i>
          </div>
          <div>Chats - Come here and talk</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
