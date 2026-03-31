import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LogisticsPage from './LogisticsPage'
import { initTheme } from './theme'

initTheme()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LogisticsPage />
  </StrictMode>,
)
