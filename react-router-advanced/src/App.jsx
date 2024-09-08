import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Assuming useAuth provides authentication status

// ProtectedRoute component
function ProtectedRoute({ children }) {
    const isAuthenticated = useAuth(); // Check if user is authenticated

    return isAuthenticated ? children : <Navigate to="/" />;
}

// Example components for routes
const Home = () => <h1>Home Page</h1>;
const Dashboard = () => <h1>Dashboard - Protected</h1>;
const Profile = () => <h1>User Profile</h1>; // New Profile component

// BlogPost component to display individual blog posts
const BlogPost = () => {
    const { id } = useParams(); // Access the URL parameter
    return <h1>Blog Post {id}</h1>;
};

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

                {/* Profile Route */}
                <Route 
                    path="/profile" 
                    element={
                        <ProtectedRoute>
                            <Profile /> {/* Protected Profile Route */}
                        </ProtectedRoute>
                    } 
                />

                {/* Dynamic Blog Post Route */}
                <Route path="/blog/:id" element={<BlogPost />} /> {/* Route for BlogPost */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
