import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

  const breakpoints = {
    base: '0px',
    sm: '0px',
    md: '810px',
    lg: '850px',
    xl: '1280px',
    '2xl': '1536px',
  }

const theme = extendTheme({ breakpoints })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} >
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
