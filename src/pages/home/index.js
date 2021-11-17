import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import UserInfo from '../../modules/userInfo'
import { stopFetchingUsers, startFetchingUsers } from '../../redux/actions/users'
import styled from 'styled-components'
import Sidebar from '../../components/sidebar'
import Maps from '../../components/map'

const HomePage = () => {
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
