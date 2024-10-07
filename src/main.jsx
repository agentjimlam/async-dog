import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// why useEffect print out 2 dogs?
// react will make your component mount and unmount twice in development mode
// react forces it and you to check for errors

// problem comes when loading different sets of data
// eg. here, dog is an object where it is spread/cloned and a new object created.
// list no issue 