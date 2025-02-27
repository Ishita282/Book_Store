import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Book";
import BookDetails from "./pages/BookDetails";
import CreateBook from "./pages/CreateBook";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex justify-center items-center">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
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
          <Route path="/books" element={<Books />} />
          <Route path="/books/books-details" element={<BookDetails />} />
          <Route path="/books/create-books" element={<CreateBook />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
