import React from 'react';
import { IndianRupee } from 'lucide-react';
import '../../pages/SearchPage.css'; // Inheriting styles

const PropertyCard = ({ property }) => {
    return (
        <div className="property-card property-card-slim">
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
    );
};

export default PropertyCard;
