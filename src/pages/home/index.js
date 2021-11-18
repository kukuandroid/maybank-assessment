import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import styled from 'styled-components'
import Sidebar from '../../components/sidebar'
import Maps from '../../components/map'
import { loadScript } from '../../utils/load-script'

const HomePage = () => {
  // useEffect(() => {
  //   loadScript(
  //     `https://maps.googleapis.com/maps/api/js?key=${process.env.google_maps_api_key}&libraries=places`,
  //     () => {
  //       const autocomplete = new window.google.maps.places.Autocomplete('new york')

  //       // const koko = window.google.maps.places.Autocomplete('baling', {
  //       //   fields: ['formatted_address', 'geometry', 'name'],
  //       //   strictBounds: false,
  //       //   types: ['establishment']
  //       // })
  //       console.log(autocomplete)
  //     }
  //   )
  // }, [])

  return (
    <Container>
      <Wrapper>
        <Sidebar />
        <Maps />
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`
const Wrapper = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`
export default HomePage
