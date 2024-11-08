import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AdminPage from './pages/AdminPage';
import ProtectedRoute from './pages/ProtectedRoute';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';

function App() {
  const isAdmin = true;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute isAdmin={isAdmin}>
              <AdminPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;