import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Logout from "./pages/logout";
import Profile from "./pages/profile";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./components/protectedRoute";

const App = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
