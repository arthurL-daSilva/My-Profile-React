import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Container/App'
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
