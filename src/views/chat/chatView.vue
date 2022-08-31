<template>
  <div class="chat w-screen h-screen flex">
    <!-- Left column -->
    <chat-nav>
      <chat-group-item
        v-for="item in chatItemData"
        :key="item.id"
        :data="item"
      />
    </chat-nav>

    <!-- Mid Column -->
    <div class="flex-1 flex h-full">
      <chat-screen
        class="flex flex-col"
        @toggleChatInfo="isShowChatInfo = !isShowChatInfo"
        :activeChat="currentActiveChat"
      >
        <div class="flex flex-col h-full overflow-x-hidden overflow-y-hidden">
          <div class="flex-1 overflow-x-hidden overflow-y-scroll" ref="reverse">
            <message-screen
              v-for="message in currentActiveChat.messages"
              :key="message.id"
              :messages="message"
              @toggleReply="handleReply"
              @handleReaction="handleReaction"
            />
          </div>

          <!-- Input Editor -->
          <input-editor
            v-model="inputMessage"
            :replyData="replyData"
            @toggleReply="replyData.isReplying = !replyData.isReplying"
            :isTyping="!isTyping"
            @enterKeyDown="handleMessage"
          />
        </div>
      </chat-screen>

      <!-- Right Column -->
      <chat-info
        v-show="isShowChatInfo"
        @toggleChatNameEdit="isShowChatNameEditor = !isShowChatNameEditor"
        @uploadGroupImage="uploadImg"
        :members="currentActiveChat.members"
      >
        <input type="file" class="hidden" ref="uploadImgInput" />
      </chat-info>
    </div>

    <!-- Popup -->
    <chat-name-modal
      v-if="isShowChatNameEditor"
      :chatName="currentActiveChat.name"
      @toggleChatNameEdit="isShowChatNameEditor = !isShowChatNameEditor"
      @handleNameChange="handleNameChange"
    />
  </div>
</template>

<script>
import chatNav from "@/components/leftChatView.vue";
import chatGroupItem from "@/components/group_chat/chatGroupItem.vue";
import chatScreen from "@/components/midChatView.vue";
import chatInfo from "@/components/rightChatView.vue";
import messageScreen from "@/components/editor/messageView.vue";
import inputEditor from "@/components/editor/editorView.vue";
import ChatNameModal from "@/components/modal/chatNameModal.vue";
import store from "@/store";

export default {
  name: "ChatView",
  components: {
    chatNav,
    chatGroupItem,
    chatScreen,
    chatInfo,
    messageScreen,
    inputEditor,
    ChatNameModal,
  },
  data() {
    return {
      inputMessage: "",
      isShowChatInfo: false,
      isShowChatNameEditor: false,
      isShowMemberMenu: false,
      replyData: {
        isReplying: false,
        name: "",
        message: "",
        messageId: "",
      },
    };
  },
  methods: {
    uploadImg() {
      this.$refs.uploadImgInput.click();
    },
    scrollIntoView() {
      const lastChildIndex = this.$refs.reverse.childNodes.length - 1;
      this.$refs.reverse.childNodes[lastChildIndex].scrollIntoView();
    },
    handleMessage() {
      const dto = {
        roomId: this.currentActiveChat.id,
        room: this.currentActiveChat.name,
        senderEmail: store.getters.userEmail,
        content: this.inputMessage,
      };
      if (this.replyData.isReplying) {
        const messageId = { messageId: this.replyData.messageId };
        const replyDto = { ...dto, ...messageId };
        console.log(replyDto);
        // this.$socket.emit("replyToMessage", replyDto);
        this.replyData.isReplying = false;
      } else {
        this.$socket.emit("event:groupMessaging", dto);
      }
      this.inputMessage = "";
    },
    handleReply(messages) {
      this.replyData = messages;
    },
    handleReaction(message) {
      const base = {
        roomId: this.currentActiveChat.id,
        room: this.currentActiveChat.name,
        senderEmail: store.getters.userEmail,
      };
      const data = { ...base, ...message };
      this.$socket.emit("event:reactToMessage", data);
    },
    handleNameChange(name) {
      const data = {
        newName: name,
        roomId: this.currentActiveChat.id,
        senderEmail: store.getters.userEmail,
      };
      this.$socket.emit("event:updateGroupName", data);
    },
  },
  computed: {
    isTyping() {
      return this.inputMessage ? true : false;
    },
    chatItemData() {
      return store.getters.chatItemData;
    },
    currentActiveChat() {
      const chatID = this.$route.params.id;
      return store.getters.activeChat(chatID);
    },
  },
  mounted() {
    this.scrollIntoView();
  },
  updated() {
    this.scrollIntoView();
  },
  sockets: {
    "event:groupMessaging": (response) => {
      store.dispatch("addNewMessage", response.data);
    },
    "event:updateGroupName": (response) => {
      store.dispatch("updateChatName", response.data);
    },
    "event:replyToMessage": (response) => {
      console.log(response);
    },
    "event:reactToMessage": (response) => {
      store.dispatch("updateMessage", response.data);
    },
  },
};
</script>

<style></style>
