import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth'

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

const signInWithGoogle = () => {
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, googleProvider)
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const signOutWithGoogle = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(data => {
        resolve(data)
      })
      .catch(reject)
  })
}

export { signInWithGoogle, signOutWithGoogle }
export default db