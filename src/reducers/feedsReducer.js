import { SET_FEED } from "../actions/constant";

const INITIAL_STATE = {
  feeds: null
}

const feedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FEED:
      return {
        ...state,
        feeds: action.feed
      }
    default:
      return state
  }
}

export default feedReducer