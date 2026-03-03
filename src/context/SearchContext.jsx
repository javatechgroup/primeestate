import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchState, setSearchState] = useState({
        city: 'Bangalore',
        price: '',
        type: '',
        bhk: ''
    });

    const setCity = (city) => {
        setSearchState(prev => ({ ...prev, city }));
    };

    const setFilters = (newFilters) => {
        setSearchState(prev => ({ ...prev, ...newFilters }));
    };

    return (
        <SearchContext.Provider value={{ ...searchState, setCity, setFilters }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
};
