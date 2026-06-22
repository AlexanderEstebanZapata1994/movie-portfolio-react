import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MovieProvider } from './context/MovieContext.tsx'
import App from './App.js'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieProvider>
      <App />
    </MovieProvider>
  </StrictMode>,
)
