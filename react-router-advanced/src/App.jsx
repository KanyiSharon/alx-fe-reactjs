import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Assuming useAuth provides authentication status

// ProtectedRoute component
function ProtectedRoute({ children }) {
    const isAuthenticated = useAuth(); // Check if user is authenticated

    return isAuthenticated ? children : <Navigate to="/" />;
}

// Example components for routes
const Home = () => <h1>Home Page</h1>;
const Dashboard = () => <h1>Dashboard - Protected</h1>;

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Route */}
                <Route path="/" element={<Home />} />

                {/* Protected Route */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
