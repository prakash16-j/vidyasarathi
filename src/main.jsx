import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider } from 'react-router-dom'
import routes from './Router/Router'
// import FindmaterialPop from './components/Students/FindmaterialPop'
// import Dashboard from './components/Dashboard'
// import CompleteUpload from './components/Teachers/CompleteUpload'
// import UploadModule from './components/Teachers/UploadModule'
// import StudentSignUP from './components/Students/StudentSignUP'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
    {/* <FindmaterialPop></FindmaterialPop> */}
    {/* <UpdateStudentProfile></UpdateStudentProfile> */}
    {/* <UploadCards></UploadCards> */}
    {/* <Dashboard></Dashboard> */}
   
  </StrictMode>,
)
