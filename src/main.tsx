import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/global.css'
import { RouterProvider } from "react-router-dom"; // add this line
import router from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* add this line */}
  </React.StrictMode>,
)
