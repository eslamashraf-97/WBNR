<script setup>
import AdminLogo from "./AdminLogo.vue";

const MessagePopup = ref(false);
const chatbox = ref(null);
const { message, chat, getMessages, sendMessage, notify } = useChat();
const openMessagePopup = () => {
  MessagePopup.value = !MessagePopup.value;
  getMessages();
};
watch(
  chat,
  () => {
    nextTick(() => {
      chatbox.value.scrollTop = chatbox.value.scrollHeight;
    });
  },
  { deep: true, immediate: true },
);
</script>



<template>
  <div :class="{ 'show-chatbot': MessagePopup }">}}
    <button class="chatbot-toggler bg-primary-300" @click="openMessagePopup()">
      <span class="material-symbols-rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.587-1.112l-3.826 1.067a1.25 1.25 0 0 1-1.54-1.54l1.068-3.823A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2Zm0 1.5A8.5 8.5 0 0 0 3.5 12c0 1.47.373 2.883 1.073 4.137l.15.27l-1.112 3.984l3.987-1.112l.27.15A8.5 8.5 0 1 0 12 3.5ZM8.75 13h4.498a.75.75 0 0 1 .102 1.493l-.102.007H8.75a.75.75 0 0 1-.102-1.493L8.75 13h4.498H8.75Zm0-3.5h6.505a.75.75 0 0 1 .101 1.493l-.101.007H8.75a.75.75 0 0 1-.102-1.493L8.75 9.5h6.505H8.75Z"
          />
        </svg>
      </span>
      <span class="material-symbols-outlined">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94L4.28 3.22Z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </button>
    <div class="chatbot">
      <header>
        <h2>Chatbot</h2>
        <span class="close-btn material-symbols-outlined">close</span>
      </header>
      <ul class="chatbox" ref="chatbox">
        <li class="chat incoming">
          <admin-logo />
          <p>Hi there 👋<br />How can I help you today?</p>
        </li>
        <li
          v-for="message in chat"
          :key="message.id"
          class="chat"
          :class="message.is_user_message ? 'outgoing' : 'incoming'"
        >
          <admin-logo v-if="!message.is_user_message" />
          <p>
            {{ message.message }}
          </p>
        </li>
      </ul>
      <div class="chat-input">
        <input
          placeholder="Enter a message..."
          spellcheck="false"
          required
          @keyup.enter="sendMessage"
          v-model.trim="message"
        />
        <button
          id="send-btn"
          class="material-symbols-rounded"
          @click="sendMessage"
        >
          send
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chatbot-toggler {
  position: fixed;
  bottom: 30px;
  left: 35px;
  outline: none;
  border: none;
  height: 50px;
  width: 50px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  z-index: 100;
}
.show-chatbot .chatbot-toggler {
  transform: rotate(90deg);
}
.chatbot-toggler span {
  color: #fff;
  position: absolute;
}
.chatbot-toggler span:last-child,
.show-chatbot .chatbot-toggler span:first-child {
  opacity: 0;
}
.show-chatbot .chatbot-toggler span:last-child {
  opacity: 1;
}
.chatbot {
  position: fixed;
  left: 35px;
  bottom: 90px;
  width: 420px;
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transform: scale(0.5);
  transform-origin: bottom left;
  box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1),
    0 32px 64px -48px rgba(0, 0, 0, 0.5);
  transition: all 0.1s ease;
  z-index: 100;
}
.show-chatbot .chatbot {
  opacity: 1;
  pointer-events: auto;
  transform: scale(1);
}
.chatbot header {
  padding: 16px 0;
  position: relative;
  text-align: center;
  color: #fff;
  background: #05bd6e;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.chatbot header span {
  position: absolute;
  right: 15px;
  top: 50%;
  display: none;
  cursor: pointer;
  transform: translateY(-50%);
}
header h2 {
  font-size: 1.4rem;
}
.chatbot .chatbox {
  overflow-y: auto;
  height: 510px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  scroll-behavior: smooth;
  margin-bottom: 50px;
}
.chatbot :where(.chatbox, input)::-webkit-scrollbar {
  width: 6px;
}
.chatbot :where(.chatbox, input)::-webkit-scrollbar-track {
  background: #fff;
  border-radius: 25px;
}
.chatbot :where(.chatbox, input)::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 25px;
}
.chatbox .chat {
  display: flex;
  list-style: none;
}
.chatbox .outgoing {
  display: flex;
  justify-content: flex-end;
}

.chatbox .chat p {
  white-space: pre-wrap;
  padding: 12px 16px;
  max-width: 75%;
  font-size: 0.95rem;
}
.chatbox .incoming p {
  border-radius: 8px 8px 0px 8px;
  color: #000;
  background: #f2f2f2;
}
.chatbox .outgoing p {
  color: #fff;
  background: #05bd6e;
  border-radius: 8px 8px 8px 0;
}
.chatbox .chat p.error {
  color: #721c24;
  background: #f8d7da;
}

.chatbot .chat-input {
  display: flex;
  gap: 5px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #fff;
  padding: 12px 20px;
  border-top: 1px solid #ddd;
  align-items: center;
}
.chat-input input {
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  max-height: 180px;
  font-size: 0.95rem;
}
.chat-input button {
  align-self: flex-end;
  background: #05bd6e;
  color: #fff;
  border-radius: 4px;
  padding: 4px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  visibility: hidden;
  font-size: 1.35rem;
}
.chat-input input:valid ~ button {
  visibility: visible;
}
@media (max-width: 490px) {
  .chatbot-toggler {
    right: 20px;
    bottom: 20px;
  }
  .chatbot {
    right: 0;
    bottom: 0;
    height: 100%;
    border-radius: 0;
    width: 100%;
    z-index: 100;
  }
  .chatbot .chatbox {
    height: 90%;
    padding: 25px 15px 100px;
  }
  .chatbot .chat-input {
    padding: 5px 15px;
  }
  .chatbot header span {
    display: block;
  }
}
</style>
