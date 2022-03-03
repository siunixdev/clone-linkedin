import { initializeApp } from 'firebase/app'
import { getFirestore, query, getDocs, collection, where, addDoc } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
    const user = res.user
    return user
  } catch (error) {
    alert(error.message)
  }
}

const authStateChanged = (user) => {
  onAuthStateChanged(user)
}

export { signInWithGoogle, authStateChanged }
export default db