import React from 'react';
import { NavLink } from 'react-router';

function Navigation({ user }) {
  return (
    <nav>
      <NavLink to="/books">Home</NavLink>
      {user ? (
        <>
          <NavLink to="/account">Account</NavLink>
          <NavLink to="/logout">Logout</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      )}
    </nav>
  );
}

export default Navigation