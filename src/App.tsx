import React from 'react'
import RootRoutes from 'common/RootRoutes'
import { createGlobalStyle } from 'styled-components'
import { RenderRoutes } from './common/router'
import Header from './components/Header'
import Footer from './components/Footer'

const GlobalStyle = createGlobalStyle`
html,body {
  padding: 0;
  margin: 0;
}
`

const App = (): JSX.Element => (
  <>
    <GlobalStyle />
    <div>
      <Header />
      <RenderRoutes routes={RootRoutes} />
      <Footer />
    </div>
  </>
)

export default App
