import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AboutPage from './AboutPage'
import { initTheme } from './theme'

initTheme()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AboutPage />
  </StrictMode>,
)
