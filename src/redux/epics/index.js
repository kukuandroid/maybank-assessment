import { combineEpics } from 'redux-observable'
import { fetchCoordsEpic } from './google-maps/coords-epic'
import { fetchPlacesEpic } from './google-maps/places-epic'

export const rootEpic = combineEpics(fetchPlacesEpic, fetchCoordsEpic)
