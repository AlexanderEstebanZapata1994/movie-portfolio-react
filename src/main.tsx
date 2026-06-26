import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MovieProvider } from '@/context/MovieContext.tsx'
import { Routes } from '@/routes.tsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieProvider>
      <Routes />
    </MovieProvider>
  </StrictMode>,
)
