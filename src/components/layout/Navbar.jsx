import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, Menu, X, Home, Plus, LayoutDashboard, LogOut, ChevronRight } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';
import './Layout.css';

const Navbar = () => {
    const { user, logout } = React.useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="glass navbar-sticky">
            <div className="container navbar-container">
                <Link to="/" className="brand-logo">
                    <Home size={32} />
                    <span>Prime<span className="brand-highlight">Estate</span></span>
                </Link>

                {/* Desktop Links */}
                <div className="desktop-only desktop-links-container">
                    <Link to="/search">Search Properties</Link>
                    <Link to="/pricing">Listing Plans</Link>

                    {user ? (
                        <>
                            <Link to={user.type === 'poster' ? '/dashboard/poster' : '/dashboard/searcher'} className="nav-link-btn">
                                <LayoutDashboard size={20} /> Dashboard
                            </Link>
                            <button onClick={handleLogout} className="btn-outline nav-logout-btn">
                                <LogOut size={20} /> Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup" className="btn-primary">Post Property</Link>
                        </>
                    )}
                </div>

                {/* Mobile Actions */}
                <div className="mobile-only flex-center gap-1">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-toggle-btn">
                        {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Uniform Boxed Mobile Menu (Slim) */}
            {isMenuOpen && (
                <div className="mobile-only animate-fade-in mobile-menu-wrapper">
                    <Link to="/search" onClick={() => setIsMenuOpen(false)} className="mobile-link">
                        Search Properties
                    </Link>
                    <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className="mobile-link">
                        Listing Plans
                    </Link>

                    {user ? (
                        <>
                            <Link to={user.type === 'poster' ? '/dashboard/poster' : '/dashboard/searcher'} onClick={() => setIsMenuOpen(false)} className="mobile-link-primary">
                                Dashboard
                            </Link>
                            <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="mobile-link-danger">
                                Logout
                            </button>
                        </>
                    ) : (
                        <div className="mobile-links-group">
                            <Link to="/login" onClick={() => setIsMenuOpen(false)} className="mobile-link">
                                Login
                            </Link>
                            <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="mobile-link-primary">
                                Post Property Free
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
