<template>
  <div class="max-h-screen h-full w-1/5">
    <div class="bg-white h-full w-full py-6 px-5 flex flex-col overflow-hidden">
      <div class="py-2 px-1">
        <h1 class="text-4xl font-bold text-[#6258DC]">S-Chat</h1>
        <p class="text-sm text-[#70737D]">Nơi Deadline bắt đầu</p>
      </div>
      <div class="py-2 px-1 flex justify-center items-center">
        <div class="mr-2 w-[30px] h-[30px] overflow-hidden rounded-full">
          <img
            class="object-cover h-full w-full"
            src="https://i.ytimg.com/vi/ryex7piXx78/hqdefault.jpg"
            alt=""
          />
        </div>
        <div class="mr-2">
          <i class="fa-regular fa-bell text-[#70737D]"></i>
        </div>
        <div class="text-xs lg:text-base flex justify-center items-center">
          <div
            class="flex justify-center items-center bg-[#c5cad90f] py-1 px-2"
          >
            <div class="pr-1 text-[#ABB2C9]">
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
      <div class="flex justify-center flex-auto">
        <div class="flex flex-col mt-3" id="chatGroupBox">
          <chat-group type="dashBoard" />
          <chat-group type="work" />
          <chat-group type="chats" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatGroup from "./leftChatComponents/chatGroup.vue";

export default {
  name: "leftChatView",
  components: {
    ChatGroup,
  },
  mounted() {
    // Can get height after rendered only
    this.chatGroupHeight();
  },
  methods: {
    // Dynamic height setup for scrolling
    chatGroupHeight() {
      const list = document.querySelectorAll("#chatGroup");
      const groupBoxHeight =
        document.querySelector("#chatGroupBox").clientHeight;
      const firstDivHeight = list[0].clientHeight + 20; //20px margin doesnt count in clientHeight
      const finalHeight = (groupBoxHeight - firstDivHeight - 60) / 2; //20px margin for 2 div plus 20px more to look better
      list[1].style.maxHeight = `${finalHeight}px`;
      list[2].style.maxHeight = `${finalHeight}px`;
      return;
    },
  },
};
</script>

<style></style>
