<template>
  <div
    class="min-w-[350px] overflow-y-scroll overflow-x-hidden border-l border-solid border-[rgba(0,0,0,0.1)] relative"
  >
    <div>
      <div class="pt-4 pb-3">
        <img
          class="w-18 h-18 rounded-full m-auto"
          :src="this.$store.getters.defaultAvatar"
          alt=""
        />
      </div>
      <h4 class="text-center text-[17px]">Minh Cu</h4>
    </div>
    <div class="pt-5">
      <div>
        <div class="flex px-2 justify-between items-center">
          <span class="block font-medium px-[10px] py-3"
            >Tùy chỉnh đoạn chat</span
          >
          <div class="w-7 h-7 flex items-center justify-center">
            <i class="fa-solid fa-angle-left text-lg"></i>
            <i class="fa-solid fa-angle-down text-lg" v-show="false"></i>
          </div>
        </div>
        <div class="px-2">
          <div
            class="flex px-2 items-center hover:bg-primary hover:text-white cursor-pointer rounded-lg"
            @click="$emit('toggleChatNameEdit')"
          >
            <div class="py-2 pr-2">
              <div class="w-6 h-6 flex justify-center items-center">
                <i class="fa-solid fa-pen text-xs"></i>
              </div>
            </div>
            <span class="block">Đổi tên đoạn chat</span>
          </div>
          <slot />
          <div
            class="flex px-2 items-center hover:bg-primary hover:text-white cursor-pointer rounded-lg"
            @click="$emit('uploadGroupImage')"
          >
            <div class="py-2 pr-2">
              <div class="w-6 h-6 flex justify-center items-center">
                <i class="fa-solid fa-pen text-xs"></i>
              </div>
            </div>
            <span class="block">Thay đổi ảnh</span>
          </div>
        </div>
      </div>
      <div>
        <div class="flex px-2 justify-between items-center">
          <span class="block font-medium px-[10px] py-3"
            >Thành viên đoạn chat</span
          >
          <div class="w-7 h-7 flex items-center justify-center">
            <i class="fa-solid fa-angle-left text-xl"></i>
            <i class="fa-solid fa-angle-down text-xl" v-show="false"></i>
          </div>
        </div>
        <div class="px-2">
          <member-list
            v-for="member in members"
            :key="member.email"
            :member="member"
          >
          </member-list>
        </div>
      </div>

      <!-- Image -->
      <div>
        <div class="flex px-2 justify-between items-center">
          <span class="block font-medium px-[10px] py-3">File phương tiện</span>
          <div class="w-7 h-7 flex items-center justify-center">
            <i class="fa-solid fa-angle-left text-xl"></i>
            <i class="fa-solid fa-angle-down text-xl" v-show="false"></i>
          </div>
        </div>
        <div class="px-2">
          <div class="px-2 flex flex-wrap">
            <div class="p-[2px] basis-1/3">
              <div class="flex pt-[100%] relative">
                <a class="block absolute right-0 top-0 w-full" href="#">
                  <img
                    class="w-full h-full object-cover"
                    :src="this.$store.getters.defaultAvatar"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div class="p-[2px] basis-1/3">
              <div class="flex pt-[100%] relative">
                <a class="block absolute right-0 top-0 w-full" href="#">
                  <img
                    class="w-full h-full object-cover"
                    :src="this.$store.getters.defaultAvatar"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div class="p-[2px] basis-1/3">
              <div class="flex pt-[100%] relative">
                <a class="block absolute right-0 top-0 w-full" href="#">
                  <img
                    class="w-full h-full object-cover"
                    :src="this.$store.getters.defaultAvatar"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div class="p-[2px] basis-1/3">
              <div class="flex pt-[100%] relative">
                <a class="block absolute right-0 top-0 w-full" href="#">
                  <img
                    class="w-full h-full object-cover"
                    :src="this.$store.getters.defaultAvatar"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div class="p-[2px] basis-1/3">
              <div class="flex pt-[100%] relative">
                <a class="block absolute right-0 top-0 w-full" href="#">
                  <img
                    class="w-full h-full object-cover"
                    :src="this.$store.getters.defaultAvatar"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div class="p-[2px] basis-1/3">
              <div class="flex pt-[100%] relative">
                <a class="block absolute right-0 top-0 w-full" href="#">
                  <img
                    class="w-full h-full object-cover"
                    :src="this.$store.getters.defaultAvatar"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div class="p-[2px] basis-1/3">
              <div class="flex pt-[100%] relative">
                <a class="block absolute right-0 top-0 w-full" href="#">
                  <img
                    class="w-full h-full object-cover"
                    :src="this.$store.getters.defaultAvatar"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div class="p-[2px] basis-1/3">
              <div class="flex pt-[100%] relative">
                <a class="block absolute right-0 top-0 w-full" href="#">
                  <img
                    class="w-full h-full object-cover"
                    :src="this.$store.getters.defaultAvatar"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div class="p-[2px] basis-1/3">
              <div class="flex pt-[100%] relative">
                <a class="block absolute right-0 top-0 w-full" href="#">
                  <img
                    class="w-full h-full object-cover"
                    :src="this.$store.getters.defaultAvatar"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import memberList from "./group_chat/memberList.vue";
export default {
  components: { memberList },
  props: {
    members: Array,
  },
};
</script>

<style></style>
