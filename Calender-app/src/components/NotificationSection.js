import React from 'react';
import { useSelector } from 'react-redux';

const NotificationSection = () => {
    const companies = useSelector((state) => state.companies);

    const overdueCommunications = companies.filter(company => /* logic to determine overdue */);
    const dueTodayCommunications = companies.filter(company => /* logic to determine due today */);

    return (
        <div>
            <h2>Notifications</h2>
            <h3>Overdue Communications</h3>
            <ul>
                {overdueCommunications.map((company, index) => (
                    <li key={index}>{company.name}</li>
                ))}
            </ul>
            <h3>Today's Communications</h3>
            <ul>
                {dueTodayCommunications.map((company, index) => (
                    <li key={index}>{company.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationSection;