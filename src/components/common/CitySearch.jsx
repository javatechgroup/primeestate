import React, { useState, useEffect, useRef } from 'react';
import { MapPin, X } from 'lucide-react';
import './Common.css';
const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Surat',
    'Pune', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal',
    'Visakhapatnam', 'Pimpri-Chinchwad', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana'
];

const localities = {
    'Bangalore': ['HSR Layout', 'Whitefield', 'Indiranagar', 'Koramangala', 'Electronic City', 'Sarjapur'],
    'Mumbai': ['Andheri', 'Bandra', 'Juhu', 'Worli', 'Powai', 'Colaba'],
    'Delhi': ['Dwarka', 'Saket', 'Rohini', 'Vasant Kunj', 'Janakpuri', 'Karol Bagh'],
    'Hyderabad': ['Gachibowli', 'Madhapur', 'Banjara Hills', 'Jubilee Hills', 'Kukatpally'],
    'Pune': ['Hinjewadi', 'Wakad', 'Baner', 'Kothrud', 'Hadapsar']
};

const CitySearch = ({ onSelect, initialValue = '', error }) => {
    const [query, setQuery] = useState(initialValue);
    const [suggestions, setSuggestions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.length > 1) {
            const filteredCities = cities.filter(city =>
                city.toLowerCase().includes(value.toLowerCase())
            );

            let filteredLocalities = [];
            Object.keys(localities).forEach(city => {
                localities[city].forEach(loc => {
                    if (loc.toLowerCase().includes(value.toLowerCase())) {
                        filteredLocalities.push(`${loc}, ${city}`);
                    }
                });
            });

            setSuggestions([...filteredCities, ...filteredLocalities].slice(0, 8));
            setIsOpen(true);
        } else {
            setSuggestions([]);
            setIsOpen(false);
        }
    };

    const handleSelect = (suggestion) => {
        setQuery(suggestion);
        setIsOpen(false);
        if (onSelect) onSelect(suggestion);
    };

    return (
        <div ref={wrapperRef} className="city-search-wrapper">
            <div className={`city-search-input-container ${error ? 'error' : ''}`}>
                <MapPin size={20} color={error ? '#ff4d4f' : 'var(--primary)'} />
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder={error ? "⚠ City is required" : "Enter City, Locality"}
                    className={`city-search-input ${error ? 'error-placeholder error' : ''}`}
                />
                {query && (
                    <X
                        size={16}
                        className="city-search-clear-icon"
                        onClick={() => { setQuery(''); setSuggestions([]); onSelect(''); }}
                    />
                )}
            </div>

            {isOpen && suggestions.length > 0 && (
                <div className="glass city-search-dropdown">
                    {suggestions.map((s, i) => (
                        <div
                            key={i}
                            onClick={() => handleSelect(s)}
                            className="city-search-item"
                        >
                            {s}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CitySearch;
