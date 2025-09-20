import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider } from 'react-router-dom'
import routes from './Router/Router'
import { AuthProvider } from './auth/AuthContext'


createRoot(document.getElementById('root')).render(
        <AuthProvider>
    <RouterProvider router={routes}/>
    </AuthProvider>
  
   
 
)
