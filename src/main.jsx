import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Mainroutes'
import FirebaseAuth from './Services/FirebaseAuth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseAuth>
      <RouterProvider router={router}></RouterProvider>
    </FirebaseAuth>
  </React.StrictMode>,
)
