import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  setDoc 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAPXxtI1sXQvEAuDBPhfRxvKKKBrWPeIEo",
  authDomain: "login-f3dac.firebaseapp.com",
  projectId: "login-f3dac",
  storageBucket: "login-f3dac.firebasestorage.app",
  messagingSenderId: "258979847774",
  appId: "1:258979847774:web:704aa42eaae376bd541ecf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const form = document.getElementById("signup-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const username = document.getElementById("signup-username").value;

  try {
    // 1️⃣ AUTH
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    // 2️⃣ FIRESTORE PROFILE
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      username: username,
      createdAt: new Date(),
    });

    alert("Ro‘yxatdan o‘tildi 🎉");
  } catch (error) {
    alert(error.message);
  }
});
