<template>
  <div>
    <!-- Replying Message -->
    <div
      class="px-[15px] pt-[10px] pb-[3px] flex justify-between border-t border-solid border-divider"
      v-show="replyData.isReplying"
    >
      <div>
        <div>
          <span class="font-light"
            >Đang trả lời
            <span>{{ replyData.name }}</span>
          </span>
        </div>
        <div>
          <span class="font-light text-[13px] text-text"
            >{{ replyData.message }}
          </span>
        </div>
      </div>
      <div>
        <div
          class="w-[28px] h-[28px] rounded-full cursor-pointer hover:bg-divider flex justify-center items-center"
          @click="$emit('toggleReply')"
        >
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
    </div>

    <!-- Message input -->
    <div class="flex py-3">
      <div>
        <input class="hidden" type="file" />
        <div class="p-2 cursor-pointer">
          <div
            class="w-9 h-9 flex items-center justify-center text-primary hover:text-white hover:bg-primary rounded-full"
          >
            <i class="fa-regular fa-image text-xl"></i>
          </div>
        </div>
      </div>
      <div class="w-full flex items-center justify-center">
        <div class="bg-guestMsg w-full mr-4 rounded-3xl">
          <div class="mx-3 my-2 relative flex justify-between items-center">
            <div
              class="outline-none whitespace-pre-wrap select-text break-words max-h-[200px] overflow-x-hidden overflow-y-scroll hide-scroll-bar w-full"
              ref="editorInput"
              contenteditable="true"
              v-on="listeners"
              @keydown="unicode"
            >
              {{ inputMessage }}
            </div>
            <div><i class="fa-regular fa-face-smile"></i></div>
            <span
              v-show="isTyping"
              class="absolute top-1/2 -translate-y-1/2 left-0 text-[#65676B]"
              >Nhập tin nhắn</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    inputMessage: {
      type: String,
      default: "",
    },
    isTyping: Boolean,
    replyData: Object,
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.innerText);
    },
    unicode(e) {
      if (e.which === 13 && e.shiftKey === false) {
        e.preventDefault();
        this.$emit("enterKeyDown");
        this.$refs.editorInput.innerText = "";
      }
    },
  },
  mounted() {
    this.$refs.editorInput.innerText = this.inputMessage;
  },
  computed: {
    listeners() {
      const res = { ...this.$listeners, input: this.onInput };
      return res;
    },
  },
};
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scroll-bar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
