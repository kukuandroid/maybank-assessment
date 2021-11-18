import React, { useEffect } from 'react'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'
import MarkerIcon from '@mui/icons-material/Room'
import useGetCoordinates from '../hooks/geolocation'

const Maps = () => {
  const coords = useGetCoordinates()
  return (
    <Container>

      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.google_maps_api_key }}
        center={coords}
        defaultZoom={12}
        yesIWantToUseGoogleMapApiInternals
      >
        <MarkerIcon
          fontSize={'large'}
          lat={coords.lat}
          lng={coords.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 65px;
    font-weight: 900;
    color: #343434;
    @media (max-width: 900px) {
      display: none;
    }
  }
`

export default Maps
