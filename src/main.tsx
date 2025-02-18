import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from '@components/Router/router'
import { AuthenticationProvider } from "@contexts/Authuciance";
import CartProvider from '@contexts/CartContext';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthenticationProvider>
      <CartProvider>
      <Router />
      </CartProvider>
    </AuthenticationProvider>
  </StrictMode>,
)
