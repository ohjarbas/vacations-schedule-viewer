import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { convertToBase64 } from './data'
import './index.css'
import { data } from './mock'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

console.log(convertToBase64(data))