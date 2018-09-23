import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Header({ auth }) {
  console.log('****** auth ******', auth);
  return (
    <nav>
      <div className="nam-wrapper">
        <Link to="/" className="brand-logo">SSR</Link>
        <ul className="right">
          <li><Link to="/users">users</Link></li>
          <li><Link to="/admins">admins</Link></li>
          <li>{auth ? (
            <a href="/api/logout">Logout</a>
          ) : (
            <a href="/api/auth/google">Log in</a>
          )}</li>
        </ul>
      </div>
    </nav>
  );
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
