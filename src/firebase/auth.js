import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "firebase/auth"

import app from "./config"

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider)
    return result.user
  } catch (error) {
    console.log(error)
  }
}

export const observeUser = (callback) => {
  onAuthStateChanged(auth, (user) => {
    callback(user)
  })
}

export const logout = async () => {
  await signOut(auth)
}