import React from 'react';
import './article.css';

// eslint-disable-next-line
const Article = ({ imgUrl, tags, description, name, htmlname }) => (
  <div>
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image" style={{ background: `url(${imgUrl})` }} />
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>Tags: {tags.join(', ')}</p>
          <h3>{name}</h3>
          <h5>{description}</h5>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  </div>
);

export default Article;
