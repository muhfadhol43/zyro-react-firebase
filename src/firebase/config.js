import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCBmC9ojCvTzSeuWjXq2lfq3Osp98a1Dyg",
  authDomain: "zyro-store.firebaseapp.com",
  projectId: "zyro-store",
  storageBucket: "zyro-store.firebasestorage.app",
  messagingSenderId: "69453887581",
  appId: "1:69453887581:web:be05d7292e79bb753bf5b4",
}

const app = initializeApp(firebaseConfig)

export default app