import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SampleUseeffect } from './SampleUseeffect'
import { DigitalClock } from './DigitalClock'
import './DigitalClock.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DigitalClock/>
  </StrictMode>,
)
