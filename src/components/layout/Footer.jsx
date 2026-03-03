import { Home, Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';
import './Layout.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <div className="footer-logo-wrapper">
                            <Home /> PrimeEstate
                        </div>
                        <p className="footer-description">
                            Your trusted partner in finding the perfect home or selling your property with ease and transparency.
                        </p>
                    </div>

                    <div className="footer-links-row">
                        <div>
                            <h4 className="footer-heading">Quick Links</h4>
                            <ul className="footer-list">
                                <li className="footer-list-item"><a href="/search" className="footer-link">Search Properties</a></li>
                                <li className="footer-list-item"><a href="/pricing" className="footer-link">Listing Plans</a></li>
                                <li className="footer-list-item"><a href="/signup" className="footer-link">Post Property</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="footer-heading">Contact Us</h4>
                            <p className="footer-contact-item">
                                <Mail size={16} /> support@primeestate.com
                            </p>
                            <p className="footer-contact-item last">
                                <Phone size={16} /> +91 1234 567 890
                            </p>
                        </div>
                    </div>
                </div>

                <div className="copyright-text footer-copyright">
                    © {new Date().getFullYear()} PrimeEstate. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
