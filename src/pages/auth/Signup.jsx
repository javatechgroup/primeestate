import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, UserPlus } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';
import './Auth.css';

const Signup = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', type: 'searcher' });
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const mockUser = { id: Date.now(), ...formData };
        login(mockUser);
        navigate(formData.type === 'poster' ? '/dashboard/poster' : '/dashboard/searcher');
    };

    return (
        <div className="flex-center section-padding auth-page-wrapper">
            <div className="glass auth-card-signup">
                <div className="auth-header">
                    <h1 className="auth-title">Create Account</h1>
                    <p className="auth-subtitle">Join PrimeEstate today</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="auth-role-toggle">
                        <button
                            type="button"
                            className={`auth-role-btn ${formData.type === 'searcher' ? 'active' : ''}`}
                            onClick={() => setFormData({ ...formData, type: 'searcher' })}
                        >
                            I want to Buy/Rent
                        </button>
                        <button
                            type="button"
                            className={`auth-role-btn ${formData.type === 'poster' ? 'active' : ''}`}
                            onClick={() => setFormData({ ...formData, type: 'poster' })}
                        >
                            I want to Sell/Post
                        </button>
                    </div>

                    <div className="auth-input-group">
                        <input
                            type="text" placeholder="Full Name" required
                            className="auth-input"
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="auth-input-group">
                        <input
                            type="email" placeholder="Email Address" required
                            className="auth-input"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div className="auth-input-group-last">
                        <input
                            type="password" placeholder="Password" required
                            className="auth-input"
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>

                    <button type="submit" className="btn-primary auth-submit-btn">
                        Sign Up
                    </button>
                </form>

                <p className="auth-footer-text">
                    Already have an account? <Link to="/login" className="auth-footer-link">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
