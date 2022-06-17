<template>
  <div class="mt-5 flex flex-col" id="chatGroup">
    <div class="flex items-center relative">
      <div
        class="pr-2"
        v-bind:class="groups[type].iconColor"
        v-html="groups[type].icon"
      ></div>
      <div class="font-bold">{{ groups[type].title }}</div>
      <div
        class="absolute right-[-50px] cursor-pointer opacity-60 hover:opacity-100 transition"
        v-bind:class="{ 'rotate-90': !show }"
        @click="show = !show"
        v-if="type != 'dashBoard'"
      >
        <i class="fa-regular fa-circle-down"></i>
      </div>
    </div>

    <!-- List chat box here -->
    <transition name="slide">
      <div
        class="mt-2 overflow-x-hidden overflow-y-scroll no-scrollbar overscroll-contain"
        v-show="show && type != 'dashBoard'"
      >
        <chat-item />
        <chat-item />
        <chat-item />
        <chat-item />
        <chat-item />
        <chat-item />
        <chat-item />
        <chat-item />
        <chat-item />
        <chat-item />
        <chat-item />
        <chat-item />
        <chat-item />
        <chat-item />
        <chat-item />
        <chat-item />
        <chat-item />
        <chat-item />
        <chat-item />
        <chat-item />
        <chat-item />
        <chat-item />
        <chat-item />
        <chat-item />
        <chat-item />
      </div>
    </transition>
  </div>
</template>

<script>
import ChatItem from "./chatItem.vue";
export default {
  name: "chatGroup",
  components: {
    ChatItem,
  },
  props: {
    type: String,
  },
  data() {
    return {
      groups: {
        dashBoard: {
          title: "Dashboard - Everything",
          icon: '<i class="fa-solid fa-house-user"></i>',
          iconColor: "text-[rgba(62,160,254)]",
        },
        work: {
          title: "Work Space - Deadline",
          icon: '<i class="fa-solid fa-briefcase"></i>',
          iconColor: "text-[rgba(114,9,183)]",
        },
        chats: {
          title: "Chats - Come here and talk",
          icon: '<i class="fa-solid fa-comment-dots"></i>',
          iconColor: "text-[rgba(67,97,238)]",
        },
      },
      show: false,
    };
  },
};
</script>

<style>
.slide-enter-active {
  transition: opacity 0.5s;
}

.slide-leave-active {
  transition: opacity 0.25s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

/* Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
