import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { FileText, BarChart3, Plus } from 'lucide-react';
import Pagination from '../../components/common/Pagination';
import './Dashboard.css';

const PosterDashboard = () => {
    const { user } = useContext(AuthContext);

    // Mock Data Generation
    const allListings = Array.from({ length: 25 }).map((_, i) => ({
        id: i + 1,
        title: `Property Listing ${i + 1}`,
        location: ['Whitefield, Bangalore', 'Andheri West, Mumbai', 'Connaught Place, Delhi', 'Banjara Hills, Hyderabad'][i % 4],
        date: `Oct ${10 + (i % 20)}, 2023`,
        status: i % 5 === 0 ? 'PENDING' : 'ACTIVE',
        statusColor: i % 5 === 0 ? '#fff3e0' : '#e1f5fe',
        statusText: i % 5 === 0 ? '#e65100' : '#01579b'
    }));

    const allEnquiries = Array.from({ length: 25 }).map((_, i) => ({
        id: i + 1,
        name: ['Sarah Jenkins', 'Rahul Sharma', 'Amit Patel', 'Priya Singh', 'John Doe'][i % 5],
        property: `Property Listing ${(i % 10) + 1}`,
        date: `Nov ${10 + (i % 20)}, 2023`
    }));

    // Pagination State
    const [listingsPage, setListingsPage] = useState(1);
    const [enquiriesPage, setEnquiriesPage] = useState(1);
    const itemsPerPage = 10;

    // Pagination Calculations
    const totalListingsPages = Math.ceil(allListings.length / itemsPerPage);
    const totalEnquiriesPages = Math.ceil(allEnquiries.length / itemsPerPage);

    const currentListings = allListings.slice((listingsPage - 1) * itemsPerPage, listingsPage * itemsPerPage);
    const currentEnquiries = allEnquiries.slice((enquiriesPage - 1) * itemsPerPage, enquiriesPage * itemsPerPage);

    const stats = [
        { label: 'Active Listings', value: '3', icon: <FileText color="var(--primary)" />, targetId: 'recent-listings' },
        { label: 'Total Enquiries', value: '42', icon: <BarChart3 color="#22c55e" />, targetId: 'total-enquiries' }
    ];

    const handleStatClick = (targetId) => {
        if (targetId) {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };



    return (
        <div className="container section-padding animate-fade-in">
            <div className="dashboard-header poster-header-container">
                <div>
                    <h1 className="dashboard-title-large">Welcome, {user?.name || 'Seller'}</h1>
                    <p className="dashboard-subtitle">Manage your property listings and track performance</p>
                </div>
                <div className="dashboard-actions dashboard-actions-group">
                    <button
                        className="btn-outline dashboard-switch-btn-large"
                        onClick={() => window.location.href = '/dashboard/searcher'}
                    >
                        Switch to Searcher
                    </button>
                    <button className="btn-primary dashboard-switch-btn-large">
                        <Plus size={20} /> Post New Property
                    </button>
                </div>
            </div>

            <div className="stats-row">
                {stats.map((s, i) => (
                    <div
                        key={i}
                        className={`glass ${s.targetId ? 'stat-clickable' : ''} poster-stat-card`}
                        onClick={() => handleStatClick(s.targetId)}
                    >
                        <div className="poster-stat-icon-wrapper">{s.icon}</div>
                        <div>
                            <div className="poster-stat-label">{s.label}</div>
                            <div className="poster-stat-value">{s.value}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div id="recent-listings" className="glass table-container">
                <h3 className="poster-section-title">Your Recent Listings</h3>
                <div className="table-responsive">
                    <table className="dashboard-table">
                        <thead>
                            <tr>
                                <th>Property</th>
                                <th>Location</th>
                                <th>Posted Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentListings.map(listing => (
                                <tr key={listing.id} className="table-row">
                                    <td data-label="Property">
                                        <div className="table-property-title">{listing.title}</div>
                                    </td>
                                    <td data-label="Location">
                                        <div className="table-property-location">{listing.location}</div>
                                    </td>
                                    <td data-label="Posted Date">{listing.date}</td>
                                    <td data-label="Status">
                                        <span className="status-badge" style={{ backgroundColor: listing.statusColor, color: listing.statusText }}>
                                            {listing.status}
                                        </span>
                                    </td>
                                    <td data-label="Actions">
                                        <div className="action-buttons-container">
                                            <button className="action-btn-primary">Edit</button>
                                            <button className="action-btn-danger">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Listings Pagination Controls */}
                <Pagination
                    currentPage={listingsPage}
                    totalPages={totalListingsPages}
                    onPageChange={setListingsPage}
                    targetId="recent-listings"
                />
            </div>

            <div id="total-enquiries" className="glass table-container table-container-margin">
                <h3 className="poster-section-title">Recent Enquiries</h3>
                <div className="table-responsive">
                    <table className="dashboard-table">
                        <thead>
                            <tr>
                                <th>Contact Name</th>
                                <th>Property Interested</th>
                                <th>Date</th>
                                <th>Contact Info</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentEnquiries.map(enquiry => (
                                <tr key={enquiry.id} className="table-row">
                                    <td data-label="Contact Name" className="table-contact-name">{enquiry.name}</td>
                                    <td data-label="Property Interested" className="table-contact-property">{enquiry.property}</td>
                                    <td data-label="Date">{enquiry.date}</td>
                                    <td data-label="Contact Info">
                                        <div className="action-buttons-container">
                                            <button className="action-btn-outline">View Details</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Enquiries Pagination Controls */}
                <Pagination
                    currentPage={enquiriesPage}
                    totalPages={totalEnquiriesPages}
                    onPageChange={setEnquiriesPage}
                    targetId="total-enquiries"
                />
            </div>

        </div>
    );
};

export default PosterDashboard;
