import { BrowserRouter, Routes, Route, Navigate } from "react-router"

// utils
import getLocalStorageData from "./utils/getLocalStorageData"

// pages
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Project from "./pages/Project"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import NotFound from "./pages/NotFound"
import Team from "./pages/Team"

function App() {
    const user = getLocalStorageData("user")

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={user ? <Navigate to="/dashboard" /> : <Home />} />
                <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
                <Route path="/team" element={user ? <Team /> : <Navigate to="/login" />} />
                <Route path="/project/:projectId" element={user ? <Project /> : <Navigate to="/login" />} />
                <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
                <Route path="/signup" element={user ? <Navigate to="/dashboard" /> : <Signup />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
