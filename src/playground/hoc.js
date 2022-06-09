// Higher Order Component (HOC) - A component that renders another component.
// Reuse code
// Render hijacking
// Abstract state

import React from 'react';
import { createRoot } from 'react-dom/client';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

// component starts with uppercase letter
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please login to view the info.</p>
            )}
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

//createRoot(document.getElementById('app')).render(<AdminInfo isAdmin={false} info="These are the details." />);
createRoot(document.getElementById('app')).render(<AuthInfo isAuthenticated={true} info="These are the details." />);