export default function useChat () {
  const app = useNuxtApp();
  const db = app.$firestore;
  console.log(db);
}