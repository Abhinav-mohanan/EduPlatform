import { Routes,Route } from "react-router-dom"
import Home from "./Pages/Users/Common/Home"
import RoleSelectionPage from "./Pages/Users/Common/RoleSelectionPage"
import StudentDashboard from "./Pages/Users/Students/StudentDashboard"
import TeacherDashboard from "./Pages/Users/Teachers/TeacherDashboard"
import UploadMaterialPage from "./Pages/Users/Teachers/UploadMaterialPage"
import LoginPage from "./Pages/Users/Common/Login"
import SignUpPage from "./Pages/Users/Common/Signup"
import AdminLoginPage from "./Pages/Admin/AdminLogin"
import StudentManagement from "./Pages/Admin/StudentManagement"
import VerificationPage from "./Pages/Admin/VerificationPage"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
      <Route path="/student-dashboard" element={<StudentDashboard/>} />
      <Route path="/role-selection" element={<RoleSelectionPage/>} />
      <Route path="/upload-file" element={<UploadMaterialPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="/admin/login" element={<AdminLoginPage/>} />
      <Route path="/admin/students-management" element={<StudentManagement/>} />
      <Route path="/admin/verification" element={<VerificationPage/>} />
    </Routes>
    </>
  )
}

export default App
