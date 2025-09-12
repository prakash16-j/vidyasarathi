import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider } from 'react-router-dom'
import routes from './Router/Router'
import FindmaterialPop from './components/Students/FindmaterialPop'
import UpdateStudentProfile from './components/Students/UpdateStudentProfile'
import UploadCards from './components/Teachers/UploadCards'
import Dashboard from './components/Dashboard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
    {/* <FindmaterialPop></FindmaterialPop> */}
    {/* <UpdateStudentProfile></UpdateStudentProfile> */}
    {/* <UploadCards></UploadCards> */}
    {/* <Dashboard></Dashboard> */}
  </StrictMode>,
)
