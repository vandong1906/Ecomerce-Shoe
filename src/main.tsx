import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from '@components/Router/router'
import { AuthenticationProvider } from "@contexts/Authuciance";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthenticationProvider>
      <Router />
    </AuthenticationProvider>
  </StrictMode>,
)
