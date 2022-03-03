import { signInWithGoogle, authStateChanged } from "../firebase"
import { SET_USER } from "./constant"

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload
})

export const signAPI = () => {
  return (dispatch) => {
    signInWithGoogle()
      .then((payload) => {
        dispatch(setUser(payload.reloadUserInfo))
      })
  }
}