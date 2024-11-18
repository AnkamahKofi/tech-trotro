import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='navbar'>
      <Link to="/"><h2>Tech Trotro</h2></Link>
      <ul>
        <li><Link to="/BlogPage">Blog</Link></li>
        <li><Link to="/ShopPage">Shop</Link></li>
        <li><Link to="/contact">Contact Us</Link></li> 
      </ul>
    </nav>
  );
}

export default NavBar;
