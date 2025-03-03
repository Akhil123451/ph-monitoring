import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7_Ta3B3oR9izNHVW9jalmiwXmyl-PIeI",
    authDomain: "smart-health-diagnostics.firebaseapp.com",
    databaseURL: "https://smart-health-diagnostics-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "smart-health-diagnostics",
    storageBucket: "smart-health-diagnostics.firebasestorage.app",
    messagingSenderId: "175873232742",
    appId: "1:175873232742:web:93534a6dda2b35379a02a7",
    measurementId: "G-TNKLNV2S14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const phRef = ref(database, 'pHValue');

// Fetch and display pH value
onValue(phRef, (snapshot) => {
    const ph = snapshot.val();
    console.log("Fetched pH Value:", ph);  // Debugging log

    if (ph !== null) {
        document.getElementById('phValue').innerText = `Current pH Value: ${ph}`;
    } else {
        document.getElementById('phValue').innerText = "No pH data available";
    }
}, (error) => {
    console.error("Firebase Error:", error);  // Log any errors
});
