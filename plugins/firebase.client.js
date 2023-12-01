import { initializeApp, } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export default defineNuxtPlugin(({ provide }) => {
    const firebaseConfig = {
        apiKey: "AIzaSyDs3KvHilOfojecJnTmJifN0KxEOxl5UNI",
        authDomain: "myr-group.firebaseapp.com",
        projectId: "myr-group",
        storageBucket: "myr-group.appspot.com",
        messagingSenderId: "1081113478426",
        appId: "1:1081113478426:web:f87917fffe1c918d3358a3",
        measurementId: "G-02319K2TSP"
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    provide('db', db);
})

