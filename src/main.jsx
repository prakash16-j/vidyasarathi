import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider } from 'react-router-dom'
import routes from './Router/Router'
import FindmaterialPop from './components/Students/FindmaterialPop'
import UpdateStudentProfile from './components/Students/UpdateStudentProfile'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
    <FindmaterialPop></FindmaterialPop>
    <UpdateStudentProfile></UpdateStudentProfile>
  </StrictMode>,
)
