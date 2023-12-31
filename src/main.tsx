import { App } from './App'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
if (container !== null) {
  const root = createRoot(container)
  root.render(<App />)
} else {
  console.error('Container element not found')
}
