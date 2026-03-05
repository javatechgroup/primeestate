import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { Heart, MessageSquare, Search } from 'lucide-react';
import PropertyCard from '../../components/common/PropertyCard';
import WelcomeCard from './WelcomeCard';
import './Dashboard.css';

const recommendedProperties = [
    { id: 1, title: 'Premium 2BHK in Sarjapur', location: 'Sarjapur, Bangalore', city: 'Bangalore', type: 'Apartment', price: '85 Lac', beds: 2, baths: 2, sqft: 1200, image: '/images/property-2.png' },
    { id: 2, title: 'Luxury Penthouse in South Delhi', location: 'Saket, Delhi', city: 'Delhi', type: 'Apartment', price: '5.5 Cr', beds: 4, baths: 4, sqft: 3800, image: '/images/property-1.png' },
];

const SearcherDashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="container section-padding animate-fade-in">
            <WelcomeCard
                title={`Welcome back, ${user?.name || 'Explorer'}`}
                subtitle="Resume your search for the perfect home"
                titleClass="dashboard-title-medium"
                subtitleClass="searcher-subtitle"
                actionsClass=""
            >
                <button
                    className="btn-outline dashboard-switch-btn"
                    onClick={() => window.location.href = '/dashboard/poster'}
                >
                    Switch to Poster
                </button>
            </WelcomeCard>

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
                {recommendedProperties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
};

export default SearcherDashboard;
