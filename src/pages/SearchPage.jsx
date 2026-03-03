import React, { useState, useEffect } from 'react';
import { MapPin, IndianRupee, Filter } from 'lucide-react';
import Filters from '../components/common/Filters';
import Pagination from '../components/common/Pagination';
import { useSearch } from '../context/SearchContext';
import './SearchPage.css';
const properties = [
    { id: 1, title: 'Modern 3 BHK Villa in Prestige Ferns', location: 'HSR Layout, Bangalore', city: 'Bangalore', type: 'Villa', price: '2.15 Cr', beds: 3, baths: 2, sqft: 2400, image: '/images/property-1.png' },
    { id: 2, title: 'Premium 2BHK in Sarjapur', location: 'Sarjapur, Bangalore', city: 'Bangalore', type: 'Apartment', price: '85 Lac', beds: 2, baths: 2, sqft: 1200, image: '/images/property-2.png' },
    { id: 3, title: 'Luxury Penthouse in South Delhi', location: 'Saket, Delhi', city: 'Delhi', type: 'Apartment', price: '5.5 Cr', beds: 4, baths: 4, sqft: 3800, image: '/images/property-1.png' },
    { id: 4, title: 'Elegant 3 BHK Flat', location: 'Dwarka, Delhi', city: 'Delhi', type: 'Apartment', price: '1.75 Cr', beds: 3, baths: 3, sqft: 1600, image: '/images/property-2.png' },
    { id: 5, title: 'Seaside Apartment', location: 'Bandra, Mumbai', city: 'Mumbai', type: 'Apartment', price: '4.2 Cr', beds: 2, baths: 2, sqft: 1100, image: '/images/property-1.png' },
    { id: 6, title: 'High-rise Condo', location: 'Powai, Mumbai', city: 'Mumbai', type: 'Apartment', price: '2.8 Cr', beds: 3, baths: 2, sqft: 1450, image: '/images/property-2.png' },
    { id: 7, title: 'Tech Corridor Residency', location: 'Gachibowli, Hyderabad', city: 'Hyderabad', type: 'Independent House', price: '1.2 Cr', beds: 3, baths: 3, sqft: 1850, image: '/images/property-1.png' },
    { id: 8, title: 'Lakeview 2 BHK', location: 'Bellandur, Bangalore', city: 'Bangalore', type: 'Apartment', price: '95 Lac', beds: 2, baths: 2, sqft: 1300, image: '/images/property-2.png' },
    { id: 9, title: 'Premium Villa in North Bangalore', location: 'Yelahanka, Bangalore', city: 'Bangalore', type: 'Villa', price: '3.5 Cr', beds: 4, baths: 5, sqft: 4000, image: '/images/property-1.png' },
    { id: 10, title: 'Cozy 1 BHK Studio', location: 'Andheri West, Mumbai', city: 'Mumbai', type: 'Apartment', price: '1.1 Cr', beds: 1, baths: 1, sqft: 600, image: '/images/property-2.png' },
    { id: 11, title: 'Luxury Condominium', location: 'Vasant Vihar, Delhi', city: 'Delhi', type: 'Apartment', price: '4.8 Cr', beds: 3, baths: 4, sqft: 2200, image: '/images/property-1.png' },
    { id: 12, title: 'Spacious Independent House', location: 'Banjara Hills, Hyderabad', city: 'Hyderabad', type: 'Independent House', price: '6.5 Cr', beds: 5, baths: 5, sqft: 5500, image: '/images/property-2.png' },
    { id: 13, title: 'Affordable 2 BHK Flat', location: 'Whitefield, Bangalore', city: 'Bangalore', type: 'Apartment', price: '60 Lac', beds: 2, baths: 2, sqft: 1050, image: '/images/property-1.png' },
    { id: 14, title: 'Modern Duplex', location: 'Juhu, Mumbai', city: 'Mumbai', type: 'Villa', price: '8.5 Cr', beds: 4, baths: 4, sqft: 3200, image: '/images/property-2.png' },
    { id: 15, title: 'Elegant South Delhi Builder Floor', location: 'Greater Kailash, Delhi', city: 'Delhi', type: 'Apartment', price: '3.2 Cr', beds: 3, baths: 3, sqft: 1800, image: '/images/property-1.png' },

    // Additional Bangalore properties to trigger pagination (>10)
    { id: 16, title: 'Compact 1 BHK flat', location: 'Indiranagar, Bangalore', city: 'Bangalore', type: 'Apartment', price: '45 Lac', beds: 1, baths: 1, sqft: 750, image: '/images/property-2.png' },
    { id: 17, title: 'Garden View 3 BHK', location: 'Koramangala, Bangalore', city: 'Bangalore', type: 'Apartment', price: '1.9 Cr', beds: 3, baths: 3, sqft: 1800, image: '/images/property-1.png' },
    { id: 18, title: 'Independent House in South', location: 'Jayanagar, Bangalore', city: 'Bangalore', type: 'Independent House', price: '4.5 Cr', beds: 4, baths: 3, sqft: 3600, image: '/images/property-2.png' },
    { id: 19, title: 'High-end Villa Estate', location: 'Devanahalli, Bangalore', city: 'Bangalore', type: 'Villa', price: '5.2 Cr', beds: 5, baths: 6, sqft: 5200, image: '/images/property-1.png' },
    { id: 20, title: 'Central Business District Flat', location: 'MG Road, Bangalore', city: 'Bangalore', type: 'Apartment', price: '2.5 Cr', beds: 2, baths: 2, sqft: 1400, image: '/images/property-2.png' },
    { id: 21, title: 'Cozy Family Apartment', location: 'Marathahalli, Bangalore', city: 'Bangalore', type: 'Apartment', price: '80 Lac', beds: 2, baths: 2, sqft: 1150, image: '/images/property-1.png' },
    { id: 22, title: 'Investment Plot', location: 'Electronic City, Bangalore', city: 'Bangalore', type: 'Plot', price: '55 Lac', beds: 0, baths: 0, sqft: 2400, image: '/images/property-2.png' },
    { id: 23, title: 'Luxury 4 BHK Duplex', location: 'Hebbal, Bangalore', city: 'Bangalore', type: 'Villa', price: '6.0 Cr', beds: 4, baths: 4, sqft: 4500, image: '/images/property-1.png' },
    { id: 24, title: 'Budget 2 BHK', location: 'BTM Layout, Bangalore', city: 'Bangalore', type: 'Apartment', price: '65 Lac', beds: 2, baths: 2, sqft: 1000, image: '/images/property-2.png' },
];

const SearchPage = () => {
    const { city, type, price, bhk, setCity, setFilters } = useSearch();
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Local state for sidebar filters (applied upon clicking the Apply button)
    const [localFilters, setLocalFilters] = useState({
        city: city || 'Bangalore',
        type: type || 'All',
        price: price || 'Select Price',
        bhk: bhk || ''
    });

    // Synchronize local sidebar state if global context is updated from elsewhere (like homepage)
    useEffect(() => {
        setLocalFilters({
            city: city || 'Bangalore',
            type: type || 'All',
            price: price || 'Select Price',
            bhk: bhk || ''
        });
    }, [city, type, price, bhk]);

    // Apply filtering logic whenever global search context changes
    useEffect(() => {
        const cityQuery = city ? city.toLowerCase() : '';
        const typeQuery = type && type !== 'All' ? type.toLowerCase() : '';
        const selectedPrice = price;
        const selectedBhk = bhk;

        const filtered = properties.filter(p => {
            const matchesCity = p.city.toLowerCase().includes(cityQuery) || p.location.toLowerCase().includes(cityQuery);
            const matchesType = typeQuery ? p.type.toLowerCase() === typeQuery : true;

            let matchesBhk = true;
            if (selectedBhk) {
                if (selectedBhk === '4+') {
                    matchesBhk = p.beds >= 4;
                } else {
                    matchesBhk = p.beds === parseInt(selectedBhk);
                }
            }

            let matchesPrice = true;
            if (selectedPrice && selectedPrice !== 'Select Price') {
                const priceValue = parseFloat(p.price.split(' ')[0]);
                const isCr = p.price.includes('Cr');
                const priceInLac = isCr ? priceValue * 100 : priceValue;

                if (selectedPrice === 'Under 50 Lac') {
                    matchesPrice = priceInLac < 50;
                } else if (selectedPrice === '50 Lac - 1 Cr') {
                    matchesPrice = priceInLac >= 50 && priceInLac <= 100;
                } else if (selectedPrice === '1 Cr - 2 Cr') {
                    matchesPrice = priceInLac > 100 && priceInLac <= 200;
                } else if (selectedPrice === 'Above 2 Cr') {
                    matchesPrice = priceInLac > 200;
                }
            }

            return matchesCity && matchesType && matchesBhk && matchesPrice;
        });

        setFilteredProperties(filtered);
        setCurrentPage(1); // Reset to first page when filtering changes
    }, [city, type, price, bhk]);

    const handleApplyFilters = () => {
        setCity(localFilters.city);
        setFilters({
            type: localFilters.type,
            price: localFilters.price,
            bhk: localFilters.bhk
        });

        // Auto-close filters on mobile after applying
        setIsMobileFiltersOpen(false);
    };

    return (
        <div className="container section-padding animate-fade-in">
            <div className="search-layout">

                {/* Sidebar Filters */}
                <Filters
                    localFilters={localFilters}
                    setLocalFilters={setLocalFilters}
                    handleApplyFilters={handleApplyFilters}
                    isMobileFiltersOpen={isMobileFiltersOpen}
                    setIsMobileFiltersOpen={setIsMobileFiltersOpen}
                />

                {/* Results List */}
                <main>
                    {/* Mobile Filter Toggle */}
                    {!isMobileFiltersOpen && (
                        <button
                            className="btn-outline btn-slim mobile-only mobile-filter-btn"
                            onClick={() => setIsMobileFiltersOpen(true)}
                        >
                            <Filter size={18} /> Show Filters
                        </button>
                    )}

                    <div className="search-page-header">
                        <h2>Properties in <span className="search-city-highlight">{city || 'India'}</span></h2>
                        <span>Found {filteredProperties.length} Results</span>
                    </div>

                    <div className="property-list-container">
                        {filteredProperties.length > 0 ? (
                            <>
                                {filteredProperties.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map(property => (
                                    <div key={property.id} className="property-card property-card-slim">
                                        <img
                                            src={property.image}
                                            alt="Home"
                                        />
                                        <div className="card-content property-card-content-wrapper">
                                            <div className="property-card-header">
                                                <div>
                                                    <h3 className="property-title">{property.title}</h3>
                                                    <p className="property-location">{property.location}</p>
                                                </div>
                                                <div className="property-price">
                                                    <IndianRupee size={18} /> {property.price}
                                                </div>
                                            </div>

                                            <div className="property-features">
                                                <span><strong>{property.beds}</strong> BHK</span>
                                                <span><strong>{property.baths}</strong> Baths</span>
                                                <span><strong>{property.sqft}</strong> sqft</span>
                                            </div>

                                            <div className="card-actions">
                                                <button className="btn-primary btn-slim property-action-btn">Contact Owner</button>
                                                <button className="btn-outline btn-slim property-action-btn">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Pagination Controls */}
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={Math.ceil(filteredProperties.length / itemsPerPage)}
                                    onPageChange={setCurrentPage}
                                />
                            </>
                        ) : (
                            <div className="no-results-container">
                                <h3 className="no-results-title">No properties found matching your criteria.</h3>
                                <p className="no-results-message">Try adjusting your filters (Location, Price, BHK) to see more results.</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default SearchPage;
