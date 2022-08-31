<template>
  <div class="px-2 flex justify-center items-center">
    <div class="flex justify-center items-center py-2 pr-2">
      <img
        class="w-9 h-9 rounded-full"
        :src="[member.ava ? member.ava : this.$store.getters.defaultAvatar]"
        :alt="member.name"
      />
    </div>
    <div class="flex-1">
      <span class="block">
        {{ member.name }}
      </span>
      <span class="block text-[13px]">
        {{ member.email }}
      </span>
    </div>
    <div class="text-[rgb(96,103,112)] relative" :ref="member.email">
      <i
        class="fa-solid fa-ellipsis text-xl cursor-pointer btn-hover"
        @click="isShowMemberMenu = !isShowMemberMenu"
      ></i>
      <member-menu
        class="absolute top-[30px] right-[-6px] w-[200px] z-50"
        v-if="isShowMemberMenu"
      />
    </div>
  </div>
</template>

<script>
import MemberMenu from "../user/memberMenu.vue";

export default {
  name: "memberList",
  components: {
    MemberMenu,
  },
  props: {
    member: Object,
  },
  data() {
    return {
      isShowMemberMenu: false,
    };
  },
  methods: {},
};
</script>

<style></style>
