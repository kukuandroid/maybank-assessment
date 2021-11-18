import { combineEpics } from 'redux-observable'
import { fetchPlaceEpic, fetchPlacesEpic } from './google-maps/places-epic'

export const rootEpic = combineEpics(fetchPlaceEpic, fetchPlacesEpic)
