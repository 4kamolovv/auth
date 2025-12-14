import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  getDoc 
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

const form = document.getElementById("login-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    // 1️⃣ LOGIN
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const uid = userCredential.user.uid;

    // 2️⃣ FIRESTORE'DAN USERNAME O‘QISH
    const userDoc = await getDoc(doc(db, "users", uid));

    let username = "User";

    if (userDoc.exists()) {
      username = userDoc.data().username;
    }

    alert(`Login successful ✅ ${username}`);

    // redirect
    // window.location.href = "dashboard.html";

  } catch (error) {
    alert(error.message);
  }
});
