import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import SideNav from "./SideNav";
import Dashboard from "./Dashboard";
import Drives from "./Drives";
import StudentPractice from "./Student/StudentPractice";
import Profile from "./Profile";
import AdminStu from "./Admin/AdminStu";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/user" element={<SideNav />} >
            <Route path="/user/Dashboard" element={<Dashboard />} />
            <Route path="/user/Drives" element={<Drives />} />
            <Route path="/user/Profile" element={<Profile />} />
            
            {/* Student Routes */}
            <Route path="/user/StudentPractice" element={<StudentPractice />} />
            
            
            {/* Admin Routes */}
            <Route path="/user/AdminStu" element={<AdminStu />} /> 

          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
