import {combineReducers} from  'redux'
import homeReducer from "./homeReducer"
import workReducer from "./workReducer"


export default combineReducers({
  home: homeReducer,
  work: workReducer,
})