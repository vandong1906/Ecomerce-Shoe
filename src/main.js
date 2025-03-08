import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Router from '@components/Router/router';
import { AuthenticationProvider } from "@contexts/Authuciance";
import CartProvider from '@contexts/CartContext';
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(AuthenticationProvider, { children: _jsx(CartProvider, { children: _jsx(Router, {}) }) }) }));
