// // Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyASKgmRJfFovXqu5NjjPmKJ5SuUJ2-1tuw',
  authDomain: 'counter-ea594.firebaseapp.com',
  projectId: 'counter-ea594',
  storageBucket: 'counter-ea594.appspot.com',
  messagingSenderId: '884526373104',
  appId: '1:884526373104:web:a1e7105619eb579f2c4a35',
  measurementId: 'G-C90QDBHPGW',
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const mapUserFromFirebaseAuth = (user) => {
  if (!user) {
    return null
  }
  const { displayName, email, photoURL, uid, emailVerified } = user

  return { displayName, email, photoURL, uid, emailVerified }
}

export const onStateChanged = (onChange) => {
  return onAuthStateChanged(auth, (user) => {
    const normalizedUser = mapUserFromFirebaseAuth(user)
    onChange(normalizedUser)
  })
}

export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  return signInWithPopup(auth, provider)
}
export const logout = () => {
  const auth = getAuth()
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log('Sing-out susccessful')
    })
    .catch((error) => {
      // An error happened.
      console.log(error)
    })
}
