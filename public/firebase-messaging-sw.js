importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');


const config = {
    apiKey: "AIzaSyDs3KvHilOfojecJnTmJifN0KxEOxl5UNI",
    authDomain: "myr-group.firebaseapp.com",
    projectId: "myr-group",
    storageBucket: "myr-group.appspot.com",
    messagingSenderId: "1081113478426",
    appId: "1:1081113478426:web:f87917fffe1c918d3358a3",
    measurementId: "G-02319K2TSP"
}
firebase.initializeApp(config)
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload => {
    console.log('firebase messaging', payload)
}))
