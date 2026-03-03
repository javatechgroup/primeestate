import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';
import './Auth.css';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '', role: 'searcher' });
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock login logic: use the selected role
        const type = formData.role;
        const mockUser = { id: 1, name: 'John Doe', email: formData.email, type };
        login(mockUser);
        navigate(type === 'poster' ? '/dashboard/poster' : '/dashboard/searcher');
    };

    return (
        <div className="flex-center section-padding auth-page-wrapper">
            <div className="glass auth-card-login">
                <div className="auth-header">
                    <h1 className="auth-title">Welcome Back</h1>
                    <p className="auth-subtitle">Login to access your dashboard</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="auth-radio-group">
                        <label className="auth-radio-label">
                            <input
                                type="radio"
                                name="role"
                                value="searcher"
                                checked={formData.role === 'searcher'}
                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            />
                            Looking to Buy/Rent
                        </label>
                        <label className="auth-radio-label">
                            <input
                                type="radio"
                                name="role"
                                value="poster"
                                checked={formData.role === 'poster'}
                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            />
                            Looking to Sell/Rent
                        </label>
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
                        <LogIn size={20} className="auth-btn-icon" /> Login
                    </button>
                </form>

                <p className="auth-footer-text">
                    Don't have an account? <Link to="/signup" className="auth-footer-link">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
