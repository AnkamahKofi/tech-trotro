import React from 'react';
import GYTS from '../images/GYTS.png';
import AMD from '../images/AMD.png';
import CnC from '../images/CnC.png';
import '../styles/index.css'


const articles = [
  {
    id: 1,
    title: "Ghana Youth Tech Summit 2024",
    description: "Discover the forefront of technological innovation at Ghana Youth Tech Summit 2024, where industry leaders, tech enthusiasts, and innovators come together to unveil cutting-edge gadgets, explore groundbreaking ideas, and inspire the next generation of creators. Whether you're a tech enthusiast or a budding entrepreneur, this summit promises to ignite your passion for technology like never before.",
    image: GYTS,
    author: "Ahiabor John",
    date: "November 10, 2024"
  },
  {
    id: 2,
    title: "The Gaming Legend Continues",
    description: "Witness the future of gaming with the AMD Ryzen 7 9800X3D processor, a marvel of engineering designed to redefine performance and elevate your gaming experience. Packed with innovative features and unparalleled speed, this next-generation chip is every gamer's dream come true. Dive into the details of what makes this processor a true legend in the gaming industry.",
    image: AMD,
    author: "Jerry Smith",
    date: "September 2, 2024"
  },
  {
    id: 3,
    title: "Code n Cocktail",
    description: "Unwind and connect at 'Code n Cocktail,' an exclusive evening of tech talks, interactive games, and delightful refreshments. Perfect for developers, tech lovers, and innovators, this event blends knowledge-sharing with a laid-back vibe, making it the ultimate networking experience. Don't miss this fusion of learning, fun, and inspiration.",
    image: CnC,
    author: "Samuel Osarfo",
    date: "November 5, 2024"
  }
];


function BlogPage() {
  return (
    <div className="blogpage-container">
      <h1 className="blog-title">Welcome to the blog Chale!</h1>
      <p className="blog-description">
        Dive into the latest trends, insights, and innovations in technology.
      </p>
      <div className="blog-cards">
        {articles.map(article => (
          <div key={article.id} className="blog-card">
            <img src={article.image} alt={article.title} className="blog-card-image" />
            <div className="blog-card-content">
              <h2 className="blog-card-title">{article.title}</h2>
              <p className="blog-card-description">{article.description}</p>
              <p className="blog-card-meta">
                <span>{article.author}</span> | <span>{article.date}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="comment-section">
        <h2>Leave a Comment</h2>
        <form className="comment-form">
          <textarea
            rows="4"
            placeholder="Write your comment here..."
            className="comment-input"
          ></textarea>
          <button type="submit" className="comment-submit">Post Comment</button>
        </form>
      </div>
    </div>
  );
}

export default BlogPage;
