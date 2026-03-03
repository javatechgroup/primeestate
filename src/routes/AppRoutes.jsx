import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import SearchPage from '../pages/SearchPage';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import Pricing from '../pages/Pricing';
import PosterDashboard from '../pages/dashboard/PosterDashboard';
import SearcherDashboard from '../pages/dashboard/SearcherDashboard';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/dashboard/poster" element={<PosterDashboard />} />
            <Route path="/dashboard/searcher" element={<SearcherDashboard />} />
        </Routes>
    );
};

export default AppRoutes;
