import React from 'react';
import { Link } from 'react-router-dom';

import CnC from "../images/CnC.png";
import AMD from "../images/AMD.png";
import GYTS from "../images/GYTS.png"

const articles = [
  {
    id: 1,
    title: "Ghana Youth Tech Summit 2024",
    description: "Explore the most innovative gadgets released this year and why they’re a must-have.",
    image: GYTS,
    author: "Ahiabor John",
    date: "November 10, 2024"
  },
  {
    id: 2,
    title: "The Gaming Legend Continues",
    description: "AMD Introduces Next-Generation AMD Ryzen 7 9800X3D Processor.",
    image: AMD,
    author: "Jerry Smith",
    date: "September 2, 2024"
  },
  {
    id: 3,
    title: "Code n Cocktail",
    description: "Experience lightning talks, engage in interactive games, and savor delectable food and drinks. An evening crafted for everyone awaits.",
    image: CnC,
    author: "Samuel Osarfo",
    date: "November 5, 2024"
  },
  {
  id: 2,
  title: "The Gaming Legend Continues",
  description: "AMD Introduces Next-Generation AMD Ryzen 7 9800X3D Processor.",
  image: AMD,
  author: "Sylvester Agyiri",
  date: "November 18, 2024"
  },
 /*  {
    id: 1,
    title: "Ghana Youth Tech Summit 2024",
    description: "Explore the most innovative gadgets released this year and why they’re a must-have.",
    image: GYTS,
    author: "John Doe",
    date: "November 10, 2024"
  },
  {
    id: 3,
    title: "Code n Cocktail",
    description: "Experience lightning talks, engage in interactive games, and savor delectable food and drinks. An evening crafted for everyone awaits.",
    image: CnC,
    author: "Jane Smith",
    date: "November 5, 2024"
  } */
];

function ArticleCard() {
  return (
    <div className="articles">
      <div className="article-card-container">
        {articles.map(article => (
          <div key={article.id} className="article-card">
            <img src={article.image} alt={article.title} className="article-card-img" />
            <div className="article-card-content">
              <h4>{article.title}</h4>
              <p>{article.description}</p>
              <div className="article-card-meta">
                <span>{article.author}</span> | <span>{article.date}</span>
              </div>
              <Link to={`/BlogPage`} className="read-more">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticleCard;
