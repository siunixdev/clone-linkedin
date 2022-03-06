import db, { signInWithGoogle, signOutWithGoogle } from "../firebase"
import { addDoc, collection, query, orderBy, onSnapshot, doc } from "firebase/firestore";
import { SET_USER, SET_FEED } from "./constant"

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload
})

export const setFeed = (payload) => ({
  type: SET_FEED,
  feed: payload
})


export const signAPI = () => {
  return (dispatch) => {
    signInWithGoogle()
      .then((payload) => {
        dispatch(setUser(payload.user))
      })
      .catch(err => {
        console.log(err.message);
      })
  }
}

export const signOutAPI = () => {
  return (dispatch) => {
    signOutWithGoogle()
      .then(() => {
        dispatch(setUser(null))
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const postFeedAPI = (payload) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      const docRef = collection(db, 'feeds');
      addDoc(docRef, {
        actor: {
          email: payload.user.email,
          name: payload.user.displayName,
          image: payload.user.photoURL,
        },
        date: Date.now(),
        feed: payload.feed
      })
        .then(data => {
          resolve(data)
        })
        .catch(err => {
          console.log(err)
        })
    })
  }
}

export const getFeedAPI = () => {
  return (dispatch) => {
    let payload
    const q = query(collection(db, 'feeds'), orderBy("date", "desc"))
    onSnapshot(q, (querySnapshot) => {
      payload = querySnapshot.docs.map(doc => doc.data());
      dispatch(setFeed(payload))
    })
  }
}