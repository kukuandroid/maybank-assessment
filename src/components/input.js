import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

const Input = ({ type, placeholder }) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
  )
}
export default Input
