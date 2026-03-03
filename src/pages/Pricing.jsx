import React from 'react';
import { Check, Star, Zap, ShieldCheck } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
    const plans = [
        {
            name: 'Basic',
            price: 'Free',
            features: ['1 Property Listing', 'Valid for 30 Days', 'Standard Visibility', 'Owner Contact Details'],
            icon: <Zap size={40} color="var(--text-muted)" />,
            btn: 'Start Free'
        },
        {
            name: 'Premium',
            price: '₹2,999',
            features: ['5 Property Listings', 'Valid for 90 Days', 'Featured Badge', 'Top Search Result Position', 'Priority Support'],
            recommended: true,
            icon: <Star size={40} color="var(--secondary)" />,
            btn: 'Go Premium'
        },
        {
            name: 'Professional',
            price: '₹7,999',
            features: ['Unlimited Listings', 'Valid for 365 Days', 'Dedicated Manager', 'Professional Shoot', 'Social Media Marketing'],
            icon: <ShieldCheck size={40} color="var(--primary)" />,
            btn: 'Get Professional'
        }
    ];

    return (
        <div className="container section-padding animate-fade-in">
            <div className="pricing-header-container">
                <h1 className="pricing-main-title">Choose Your Plan</h1>
                <p className="pricing-subtitle">Boost your property visibility and sell faster with PrimeEstate Premium</p>
            </div>

            <div className="pricing-grid">
                {plans.map((plan, i) => (
                    <div key={i} className={`glass pricing-card ${plan.recommended ? 'recommended' : ''}`}>
                        {plan.recommended && (
                            <div className="pricing-badge">
                                MOST POPULAR
                            </div>
                        )}

                        <div className="pricing-card-header">
                            <div className="pricing-icon">{plan.icon}</div>
                            <div className="pricing-title">
                                <h2>{plan.name}</h2>
                                <div className="price">{plan.price}</div>
                            </div>
                        </div>

                        <ul className="pricing-features">
                            {plan.features.map((f, j) => (
                                <li key={j}>
                                    <Check size={18} color="#22c55e" /> {f}
                                </li>
                            ))}
                        </ul>

                        <button className={`pricing-btn ${plan.recommended ? 'btn-primary' : 'btn-outline'}`}>
                            {plan.btn}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
