import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import { SEARCH_PLACE } from '../constants/maps'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlaces } from '../redux/actions/google-maps/places-action'

const InputAutocomplete = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const maps = useSelector(state => state.places)

  const handleChange = event => {
    const newValue = event.target.value
    setValue(newValue)
    dispatch(fetchPlaces(newValue))
  }

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
    <Autocomplete
    freeSolo
    onChange={(e, newValue) => console.log(newValue)}
    options={maps.places.map((x) => x.description)}
    renderInput={(params) => <TextField onChange={handleChange} value={value} {...params} label={SEARCH_PLACE} />}
  />
  </Stack>
  )
}
export default InputAutocomplete
