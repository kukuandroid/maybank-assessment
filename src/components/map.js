import React from 'react'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'
import useGetCoordinates from '../hooks/geolocation'
import MapMarker from '../assets/icons/svg/map-marker'
import { useSelector } from 'react-redux'

// const MapMarker = <Image src="" height={30} width={30} />

const Maps = () => {
  const baseCoords = useGetCoordinates()
  const { coords = [] } = useSelector(state => state.coords)

  const coordsChanged = coords.length > 0

  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.google_maps_api_key }}
        center={coordsChanged ? coords[0].geometry.location : baseCoords}
        defaultZoom={12}
        yesIWantToUseGoogleMapApiInternals
      >
        <MapMarker onClick={() => alert('sds')} lat={coordsChanged ? coords[0].geometry.location.lat : baseCoords.lat}
          text="My Marker"
          lng={coordsChanged ? coords[0].geometry.location.lng : baseCoords.lng}
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
