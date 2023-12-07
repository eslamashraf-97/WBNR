import {
  collection,
  doc,
  orderBy,
  query,
  onSnapshot,
  addDoc,

} from "firebase/firestore";

export default function useChat () {
  const message = ref('');
  const notify = ref(false);
  const chat = ref([]);
  const userId = useCookie('user').value.id;
  const { $db } = useNuxtApp();
  const getMessages = async () => {
    const q = query(collection($db, userId), orderBy("date", "asc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      chat.value = messages;
      notify.value = true
    });
    onUnmounted(unsubscribe);
  };
  const sendMessage = async () => {
    if (message.value === '') {
      return;
    }
    await addDoc(collection($db, userId), {
      message: message.value,
      date: new Date(),
      is_user_message: true,
    });
    message.value = '';
  };

  return {
    notify,
    message,
    chat,
    getMessages,
    sendMessage,
  };


}
