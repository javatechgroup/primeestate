import React, { useState } from 'react';
import { Search, MapPin, Home as HomeIcon, IndianRupee } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import CitySearch from '../components/common/CitySearch';
import { useSearch } from '../context/SearchContext';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const { setCity, setFilters } = useSearch();
    const [localType, setLocalType] = useState('');
    const [localCity, setLocalCity] = useState('');
    const [error, setError] = useState('');

    const handleSearch = () => {
        if (!localCity) {
            setError('Please enter and select a Location (City or Locality) to search.');
            return;
        }
        setError('');
        setCity(localCity);
        if (localType) {
            setFilters({ type: localType });
        }
        navigate('/search');
    };

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="hero-section">
                <h1 className="hero-title">Find Your Dream Home</h1>
                <p className="hero-subtitle">The most trusted real estate platform in India</p>

                <div className="glass hero-search-box">
                    <CitySearch onSelect={(val) => { setLocalCity(val); setError(''); }} error={error} />

                    <div className="hero-search-type">
                        <HomeIcon size={20} color="var(--primary)" />
                        <select
                            value={localType}
                            onChange={(e) => setLocalType(e.target.value)}
                        >
                            <option value="">Property Type</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Villa">Villa</option>
                            <option value="Independent House">Independent House</option>
                            <option value="Plot">Plot</option>
                        </select>
                    </div>

                    <button onClick={handleSearch} className="btn-primary hero-search-button">
                        <Search size={22} /> Search
                    </button>
                </div>
            </section>

            {/* Featured Section */}
            <section className="container section-padding">
                <div className="featured-header">
                    <h2>Featured Properties</h2>
                    <Link to="/search" className="featured-view-all">View All</Link>
                </div>

                <div className="featured-grid">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="glass featured-card">
                            <img
                                src="/images/property-1.png"
                                alt="Property"
                                className="featured-card-img"
                            />
                            <div className="featured-card-content">
                                <div className="featured-card-price">
                                    <IndianRupee size={18} /> 1.25 Cr
                                </div>
                                <h3 className="featured-card-title">3 BHK Luxury Apartment</h3>
                                <p className="featured-card-location">
                                    <MapPin size={14} /> Whitefield, Bangalore
                                </p>
                                <div className="featured-card-details">
                                    <span>3 Beds | 2 Baths | 1800 sqft</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
