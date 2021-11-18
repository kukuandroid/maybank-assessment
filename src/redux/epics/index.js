import { combineEpics } from 'redux-observable'
import { fetchPlaceEpic, fetchPlacesEpic } from './google-maps'

export const rootEpic = combineEpics(fetchPlaceEpic, fetchPlacesEpic)
