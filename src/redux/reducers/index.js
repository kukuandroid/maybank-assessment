import { combineReducers } from 'redux'
import placesReducer from './google-maps/places-reducer'
import coordsReducer from './google-maps/coords-reducer'

const rootReducer = combineReducers({
  places: placesReducer,
  coords: coordsReducer
})

export default rootReducer
