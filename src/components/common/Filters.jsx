import React from 'react';
import { Filter, X } from 'lucide-react';
import CitySearch from './CitySearch';
import './Common.css';
const Filters = ({ localFilters, setLocalFilters, handleApplyFilters, isMobileFiltersOpen, setIsMobileFiltersOpen }) => {
    return (
        <aside className={`glass filters-sidebar ${isMobileFiltersOpen ? 'show-mobile-filters' : ''}`}>
            <div className="filter-header filter-header-flex">
                <h3 className="filter-header-title">
                    <Filter size={18} /> Filters
                </h3>
                <button
                    className="mobile-only filter-close-btn"
                    onClick={() => setIsMobileFiltersOpen(false)}
                    aria-label="Close filters"
                >
                    <X size={20} />
                </button>
            </div>

            <div className="filter-group">
                <label>Location</label>
                <CitySearch onSelect={(c) => setLocalFilters(prev => ({ ...prev, city: c }))} initialValue={localFilters.city} />
            </div>

            <div className="filter-group">
                <label>Price Range</label>
                <select
                    className="glass preset-select"
                    value={localFilters.price}
                    onChange={(e) => setLocalFilters(prev => ({ ...prev, price: e.target.value }))}
                >
                    <option value="Select Price">Select Price</option>
                    <option value="Under 50 Lac">Under 50 Lac</option>
                    <option value="50 Lac - 1 Cr">50 Lac - 1 Cr</option>
                    <option value="1 Cr - 2 Cr">1 Cr - 2 Cr</option>
                    <option value="Above 2 Cr">Above 2 Cr</option>
                </select>
            </div>

            <div className="filter-group">
                <label>Bedrooms (BHK)</label>
                <div className="bhk-buttons">
                    {['1', '2', '3', '4', '5', '6', '7+'].map(b => (
                        <button
                            key={b}
                            onClick={() => setLocalFilters(prev => ({ ...prev, bhk: localFilters.bhk === b ? '' : b }))}
                            className={`bhk-btn ${localFilters.bhk === b ? 'active' : ''}`}
                        >
                            {b}
                        </button>
                    ))}
                </div>
            </div>

            <div className="filter-group">
                <label>Property Type</label>
                <select
                    className="glass preset-select"
                    value={localFilters.type}
                    onChange={(e) => setLocalFilters(prev => ({ ...prev, type: e.target.value }))}
                >
                    {['All', 'Apartment', 'Villa', 'Independent House', 'Plot'].map(t => (
                        <option key={t} value={t}>{t}</option>
                    ))}
                </select>
            </div>

            <button onClick={handleApplyFilters} className="btn-primary apply-filters-btn">Apply Filters</button>
        </aside>
    );
};

export default Filters;
