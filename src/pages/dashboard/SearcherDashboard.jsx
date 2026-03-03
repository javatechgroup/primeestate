import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { Heart, MessageSquare, Search } from 'lucide-react';
import './Dashboard.css';

const SearcherDashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="container section-padding animate-fade-in">
            <div className="dashboard-header glass dashboard-header-container">
                <div>
                    <h1 className="dashboard-title-medium">Welcome back, {user?.name || 'Explorer'}</h1>
                    <p className="searcher-subtitle">Resume your search for the perfect home</p>
                </div>
                <div className="dashboard-actions">
                    <button
                        className="btn-outline dashboard-switch-btn"
                        onClick={() => window.location.href = '/dashboard/poster'}
                    >
                        Switch to Poster
                    </button>
                </div>
            </div>

            <div className="dashboard-grid-3col">
                {/* Shortlisted Card */}
                <div className="glass stat-card">
                    <div className="stat-icon-wrapper stat-icon-red">
                        <Heart size={24} color="var(--accent)" />
                    </div>
                    <div className="flex-1">
                        <h3 className="stat-label">Shortlisted</h3>
                        <p className="stat-value">12</p>
                    </div>
                    <button className="btn-outline btn-slim">View List</button>
                </div>

                {/* Contacted Card */}
                <div className="glass stat-card">
                    <div className="stat-icon-wrapper stat-icon-blue">
                        <MessageSquare size={24} color="var(--primary)" />
                    </div>
                    <div className="flex-1">
                        <h3 className="stat-label">Contacted</h3>
                        <p className="stat-value">5</p>
                    </div>
                    <button className="btn-outline btn-slim">View History</button>
                </div>

                {/* Recent Searches Card */}
                <div className="glass stat-card">
                    <div className="stat-icon-wrapper stat-icon-violet">
                        <Search size={24} color="var(--secondary)" />
                    </div>
                    <div className="flex-1">
                        <h3 className="stat-label">Recent Searches</h3>
                        <p className="stat-value">3</p>
                    </div>
                    <button className="btn-outline btn-slim">Resume Search</button>
                </div>
            </div>

            <h2 className="section-title">Recommended for You</h2>
            <div className="dashboard-grid-cards">
                {[1, 2].map(item => (
                    <div key={item} className="property-card-slim glass property-card-slim-wrapper">
                        <img
                            src="/images/property-2.png"
                            alt="Property"
                        />
                        <div className="card-content">
                            <h4 className="property-card-title">Premium 2BHK in Sarjapur</h4>
                            <p className="property-card-location">Bangalore | ₹85 Lac</p>
                            <button className="btn-primary property-card-btn">View Property</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearcherDashboard;
