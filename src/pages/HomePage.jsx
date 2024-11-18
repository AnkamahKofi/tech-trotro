import React from 'react';
import ArticleCard from '../components/ArticleCard';
import ProductCard from '../components/ProductCard';


function HomePage() {
  return (
    <>
      <div className='hero'>
        <p className='hero-text' >All The Tech Knowledge You Need To Know</p>
        <button>Explore</button>
      </div>
      <div className='blogfeed'>
        <h1>Blog Feed</h1>
        <p>Browse for continuous insights on technology and the latest gadgets</p>
        <ArticleCard /><br />
      </div>
      <div className='featured-products'>
        <h1>Featured Products</h1>
        <p>Explore our top picks for this season</p>
        <ProductCard />
      </div>
      <div className="about">
        <h1>About Us</h1>
        <p>
        <strong>Tech Trotro! </strong>- your ultimate destination for everything tech! Whether you're a gadget enthusiast, a developer, or someone simply exploring the tech world, we’ve got you covered
          Our mission is to make technology accessible and exciting for everyone. We’re passionate about exploring the latest innovations, sharing in-depth reviews, and curating products that redefine convenience and creativity.
          At <strong>Tech Trotro</strong>, we believe in empowering our community with knowledge. That’s why we’ve combined a tech blog with a shop, giving you insights and access to the tools and gadgets you need.
        </p>
        <p>
          Thank you for joining us on this journey. Dive in, explore, and let’s make tech work for you! Driver Wolɜ!
        </p>
      </div>
    </>
  );
}

export default HomePage;