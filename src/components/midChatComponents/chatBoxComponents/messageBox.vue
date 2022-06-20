<template>
  <div>
    <div
      class="w-2/3 flex mb-5 shadow-[0_0_1_rgba(0,0,0,0.11),0_4px_16px_rgba(0,0,0,0.04)]"
    >
      <div class="pr-2">
        <div class="w-14 h-14 rounded-full overflow-hidden border-separate">
          <img
            class="w-14 h-14 object-cover"
            src="https://i.ytimg.com/vi/ryex7piXx78/hqdefault.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="px-4 pt-3 pb-4 bg-white">
        <!-- Header -->
        <div class="flex font-bold text-[#383838] text-lg">
          <div>Name</div>
          <div class="px-1">-</div>
          <div>Time</div>
          <div class="px-1">-</div>
          <div>Date</div>
        </div>
        <!-- Message -->
        <div class="text-sm">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            numquam aspernatur molestias?
          </div>
          <div>
            Sit rem at doloribus veritatis pariatur obcaecati sint itaque, quia
            natus perferendis velit error,
          </div>
          <div>possimus blanditiis magnam saepe.</div>
        </div>
      </div>
    </div>
    <div
      class="w-2/3 flex mb-5 ml-auto justify-end shadow-[0_0_1_rgba(0,0,0,0.11),0_4px_16px_rgba(0,0,0,0.04)]"
    >
      <div class="pr-2">
        <div class="w-14 h-14 rounded-full overflow-hidden border-separate">
          <img
            class="w-full h-full object-cover"
            src="https://i.ytimg.com/vi/ryex7piXx78/hqdefault.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="px-4 pt-3 pb-4 bg-[#6258DC] text-white">
        <div class="flex font-bold text-lg">
          <div>Name</div>
          <div class="px-1">-</div>
          <div>Time</div>
          <div class="px-1">-</div>
          <div>Date</div>
        </div>
        <div class="text-sm">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            numquam aspernatur molestias?
          </div>
          <div>
            Sit rem at doloribus veritatis pariatur obcaecati sint itaque, quia
            natus perferendis velit error,
          </div>
          <div>possimus blanditiis magnam saepe.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "messageBox",
  props: {
    userAvatar: String,
    messageContent: String,
    messageHeader: Object,
    sender: String,
    isSender: Boolean,
  },
};
</script>

<style></style>
