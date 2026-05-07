import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth"

import app from "./config"

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider)

    const user = result.user

    alert(`Login berhasil: ${user.displayName}`)

    console.log(user)

  } catch (error) {
    console.log(error)
  }
}