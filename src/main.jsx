import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import FacultyNavbar from './components/Teachers/FacultyNavbar'
import TeacherProfile from './components/Teachers/TeacherProfile'
import UpdateFacultyProfile from './components/Teachers/UpdateFacultyProfile'
import FacultyRequestReport from './components/Teachers/FacultyRequestReport'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
  </StrictMode>,
)
