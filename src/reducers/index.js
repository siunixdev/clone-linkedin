import { combineReducers } from 'redux'
import userReducer from './userReducer'
import feedReducer from './feedsReducer'


const rootReducer = combineReducers({
  userState: userReducer,
  feedState: feedReducer
})

export default rootReducer