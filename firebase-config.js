// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-database.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyChT_LbedW9M1lsyK26HUCCDCcJc4hoQf4",
  authDomain: "painelcras-4890c.firebaseapp.com",
  databaseURL: "https://painelcras-4890c-default-rtdb.firebaseio.com",
  projectId: "painelcras-4890c",
  storageBucket: "painelcras-4890c.appspot.com",
  messagingSenderId: "279841059682",
  appId: "1:279841059682:web:be689ab69135f04cb4323b"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

signInAnonymously(auth).catch(console.error);

export { db };
