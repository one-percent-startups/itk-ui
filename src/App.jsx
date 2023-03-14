import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProtectedRoutes from "./components/protected routes/ProtectedRoutes";
import Auth from "./pages/auth/auth";
import SignUp from "./pages/auth/signup";
import Dashboard from "./pages/dashboard";
// import StudentList from "./pages/studentlist";
import Logout from "./components/auth/logout";
// import StudentDashboard from "./pages/student_dashboard";
// import NavBar from "./components/navigation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="logout" element={<Logout />} />
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      <Route element={<ProtectedRoutes />}>
        {/* <Route path="student/:studentid" element={<StudentDashboard />} /> */}
        <Route path="dashboard" element={<Dashboard />} />
        {/* <Route path="studentlist" element={<StudentList />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
