import { combineReducers } from 'redux'
import placesReducer from './google-maps'

const rootReducer = combineReducers({
  places: placesReducer
})

export default rootReducer
