import React from 'react'
import ReactDOM from 'react-dom/client'
import {Details} from './pages/Details/Details'
import {Home} from './pages/Home'
import {SingIn} from './pages/SingIn'
import {SingUp} from './pages/SingUp'
import {Profile} from './pages/Profile'
import {New} from './pages/New'
import {ThemeProvider} from "styled-components"

import theme from "./styles/theme"
import GlobalStyle from "./styles/global"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <New />
    </ThemeProvider>
  </React.StrictMode>
)
