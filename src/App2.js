import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from './components/Layout'

const theme = {
  darkBg: '#000'
}
const App = () => (
  <ThemeProvider theme={theme}>
    <Layout />
  </ThemeProvider>
)

export default App
