<template>
  <div :id="messages.id">
    <div class="flex flex-col mt-[7px] group">
      <h4 v-show="!isSender">
        <div class="pl-[46px] pr-[22px]">
          <span class="block mt-[10px] px-3 pb-[6px] text-xs">
            {{ messages.sender }}
          </span>
        </div>
      </h4>
      <div class="flex" :class="[isSender ? 'flex-row-reverse' : '']">
        <div class="flex items-end">
          <div class="pl-[10px] pr-2">
            <div class="flex h-7 w-7">
              <img
                class="w-7 h-7 rounded-full"
                :src="this.$store.getters.defaultAvatar"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <div
            class="flex"
            :class="[isSender ? 'flex-row-reverse pl-4' : 'pr-4']"
          >
            <span
              class="relative block px-3 py-2 mb-[2px] break-words rounded-[18px] flex-1 max-w-[600px]"
              :class="[isSender ? 'bg-primary text-white' : 'bg-guestMsg']"
            >
              {{ messages.content }}
              <div
                class="absolute right-0 top-full -translate-y-[40%] flex text-text bg-white rounded-[10px] py-[2px] px-1 drop-shadow-2xl"
              >
                <div class="text-[11px] mr-1" v-if="likeReaction">
                  {{ likeReaction }} 👍
                </div>
                <div class="text-[11px]" v-if="loveReaction">
                  {{ loveReaction }} ❤
                </div>
              </div>
            </span>
            <!-- Options -->
            <div class="w-[100px] pl-[5px] flex">
              <div
                class="group-hover:flex justify-around items-center"
                :class="[isShowReaction ? 'flex' : 'hidden']"
              >
                <!-- React button -->
                <div
                  class="relative w-[22px] h-[22px] text-center cursor-pointer child-after:hover:block"
                  ref="reaction"
                  tabindex="0"
                  @click="isShowReaction = true"
                  @blur="isShowReaction = false"
                >
                  <i
                    class="fa-regular fa-face-smile after:rounded-full after:content-[''] after:absolute after:h-[22px] after:w-[22px] after:hidden after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-primary-50 relative"
                  ></i>
                  <reaction-item
                    v-if="isShowReaction"
                    :icons="icons"
                    @react="emitReaction"
                  />
                </div>

                <!-- Reply button -->
                <div
                  class="w-[22px] h-[22px] text-center cursor-pointer child-after:hover:block"
                  @click="emitReply"
                >
                  <i
                    class="fa-solid fa-reply after:rounded-full after:content-[''] after:absolute after:h-[22px] after:w-[22px] after:hidden after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-primary-50 relative"
                  ></i>
                </div>

                <!-- Option Button -->
                <div
                  class="w-[22px] h-[22px] text-center cursor-pointer child-after:hover:block"
                >
                  <i
                    class="fa-solid fa-ellipsis-vertical after:rounded-full after:content-[''] after:absolute after:h-[22px] after:w-[22px] after:hidden after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-primary-50 relative"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import reactionItem from "./reactionItem.vue";
export default {
  components: { reactionItem },
  props: {
    messages: Object,
  },
  data() {
    return {
      isShowReaction: false,
      icons: ["👍", "❤"],
    };
  },
  methods: {
    emitReply() {
      const messages = {
        isReplying: true,
        name: this.messages.sender,
        message: this.messages.content,
        messageId: this.messages.id,
      };
      this.$emit("toggleReply", messages);
    },
    emitReaction(icon) {
      const messages = {
        content: icon,
        messageId: this.messages.id,
      };
      this.$emit("handleReaction", messages);
    },
    reactionCount(arr, icon) {
      let count = 0;
      for (let item in arr) {
        if (item.content === icon) return count++;
      }
    },
  },
  computed: {
    isSender() {
      return store.getters.userName === this.messages.sender;
    },
    likeReaction() {
      return this.messages.reaction.filter((icon) => icon.content === "👍")
        .length;
    },
    loveReaction() {
      return this.messages.reaction.filter((icon) => icon.content === "❤")
        .length;
    },
  },
};
</script>

<style></style>
