import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import dayjs from 'dayjs';
import 'dayjs/locale/es-mx';

import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
