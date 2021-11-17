
import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types';
import { useStore } from '../redux/store'
import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

export default function App ({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
      <Component {...pageProps} />
      </StyledEngineProvider>
    </Provider>
  )
}

App.propTypes = {
  pageProps: PropTypes.object.isRequired
}
