const state = {
  chats: [],
};

const mutations = {
  setChatData(state, data) {
    state.chats = [...data];
  },
  updateMessage(state, data) {
    const chat = state.chats.find((chat) => (chat.id = data.room));
    const message = chat.messages.find((message) => message.id === data.id);
    message.reaction.push(data.reaction);
  },
  updateChatName(state, data) {
    const chat = state.chats.find((chat) => chat.id === data.roomId);
    chat.name = data.newRoom;
  },
  pushNewMessage(state, message) {
    const chat = state.chats.find((chat) => chat.id === message.room);
    chat.messages.push(message);
  },
};

const actions = {
  getChatData({ commit }, data) {
    commit("setChatData", data);
  },
  updateMessage({ commit }, data) {
    commit("updateMessage", data);
  },
  updateChatName({ commit }, data) {
    commit("updateChatName", data);
  },
  addNewMessage({ commit }, message) {
    commit("pushNewMessage", message);
  },
};

const getters = {
  chatItemData: (state) => {
    const newData = [...state.chats];
    return newData.map((ele) => {
      const lastMessage = [...ele.messages].pop();
      const obj = new ChatItemData(ele.id, lastMessage, ele.name);
      return obj;
    });
  },
  activeChat: (state) => (id) => {
    return state.chats.find((chat) => chat.id === id);
  },
  lastestChat: (state) => state.chats[0],
  lastestMesaage: (getters) => {
    const index = getters.lastestChat.messages.length - 1;
    return getters.lastestChat.messages[index].id;
  },
};

function ChatItemData(id, lastMessage, name) {
  this.id = id;
  this.lastMessage = {
    sender: lastMessage.sender,
    content: lastMessage.content,
  };
  this.name = name;
}

export default {
  state,
  mutations,
  actions,
  getters,
};
