import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" className={(navData) => (navData.isActive ? "active" : 'none')} exact="true">Dashboard</NavLink>
        <NavLink to="/create" className={(navData) => (navData.isActive ? "active" : 'none')}>Create Expense</NavLink>
        <NavLink to="/help" className={(navData) => (navData.isActive ? "active" : 'none')}>Help</NavLink>
    </header>
);

export default Header;