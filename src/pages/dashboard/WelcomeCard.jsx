import React from 'react';

const WelcomeCard = ({
    title,
    subtitle,
    titleClass = "dashboard-title-large",
    subtitleClass = "dashboard-subtitle",
    containerClass = "",
    actionsClass = "dashboard-actions-group",
    children
}) => {
    return (
        <div className={`dashboard-header glass dashboard-header-container ${containerClass}`.trim()}>
            <div>
                <h1 className={titleClass}>{title}</h1>
                <p className={subtitleClass}>{subtitle}</p>
            </div>
            <div className={`dashboard-actions ${actionsClass}`.trim()}>
                {children}
            </div>
        </div>
    );
};

export default WelcomeCard;
