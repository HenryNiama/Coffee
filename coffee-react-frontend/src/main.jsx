import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from 'react-router-dom'
import { CoffeeProvider} from "./context/CoffeeProvider.jsx";
import router from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <CoffeeProvider>
          <RouterProvider router={router} />
      </CoffeeProvider>
  </React.StrictMode>,
)
