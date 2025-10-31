import { Routes,Route } from "react-router-dom"
import Home from "./Pages/Users/Common/Home"
import RoleSelectionPage from "./Pages/Users/Common/RoleSelectionPage"
import StudentDashboard from "./Pages/Users/Students/StudentDashboard"
import TeacherDashboard from "./Pages/Users/Teachers/TeacherDashboard"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
      <Route path="/student-dashboard" element={<StudentDashboard/>} />
      <Route path="/role-selection" element={<RoleSelectionPage/>} />
    </Routes>
    </>
  )
}

export default App
