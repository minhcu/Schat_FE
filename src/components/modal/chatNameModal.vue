<template>
  <base-modal :title="title" @toggleModal="$emit('toggleChatNameEdit')">
    <div class="p-4">
      <span class="block text-[13px] mb-4"
        >Mọi người đều biết khi tên nhóm chat thay đổi.</span
      >
      <div>
        <div
          class="rounded-[6px] border border-solid border-divider relative"
          :class="{ 'shadow-outline': isFocus }"
        >
          <span
            class="absolute top-2 text-[11px] left-4 font-light leading-5"
            :class="[isFocus ? 'text-primary' : 'text-text']"
            >Tên nhóm chat</span
          >
          <input
            class="px-4 pt-[26px] pb-[10px] w-full outline-none bg-transparent"
            type="text"
            ref="nameInput"
            @focusin="isFocus = true"
            @focusout="isFocus = false"
            v-model="chatNameInput"
          />
        </div>
      </div>
      <div class="pt-4 flex">
        <div class="cursor-pointer p-1 w-full">
          <div
            class="bg-btn2nd h-[36px] flex justify-center items-center rounded-md hover:bg-primary hover:text-white"
            @click="$emit('toggleChatNameEdit')"
          >
            <span>Hủy</span>
          </div>
        </div>
        <div class="p-1 w-full">
          <div
            class="bg-btn2nd h-[36px] flex justify-center items-center rounded-md"
            :class="{
              'bg-primary-50 hover:bg-primary hover:text-white cursor-pointer':
                isNameChanged,
            }"
            @click="emitChangeNameEvent"
          >
            <span>Lưu</span>
          </div>
        </div>
      </div>
    </div>
  </base-modal>
</template>

<script>
import baseModal from "./baseModal.vue";

export default {
  name: "chatNameModal",
  props: {
    chatName: String,
  },
  components: {
    baseModal,
  },
  data() {
    return {
      title: "Đổi tên đoạn chat",
      isFocus: false,
      chatNameInput: "",
    };
  },
  methods: {
    emitChangeNameEvent(e) {
      return this.isNameChanged
        ? this.$emit("handleNameChange", this.chatNameInput)
        : e.prenventDefault;
    },
  },
  computed: {
    isNameChanged() {
      return !(this.chatNameInput === this.chatName);
    },
  },
  created() {
    this.chatNameInput = this.chatName;
  },
};
</script>

<style></style>
