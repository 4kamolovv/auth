import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, sendPasswordResetEmail } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔥 Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAPXxtI1sXQvEAuDBPhfRxvKKKBrWPeIEo",
  authDomain: "login-f3dac.firebaseapp.com",
  projectId: "login-f3dac",
  storageBucket: "login-f3dac.firebasestorage.app",
  messagingSenderId: "258979847774",
  appId: "1:258979847774:web:704aa42eaae376bd541ecf"
};

// Init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Form
const form = document.getElementById("reset-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("reset-email").value;

  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Parolni tiklash linki emailga yuborildi 📧");
    })
    .catch((error) => {
      alert(error.message);
    });
});
