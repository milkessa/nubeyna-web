import React from "react";
import "../../styles/blog.css";
const Blog = () => {
  return (
    <section>
      <div className='container'>
        <div className='blog__top-content'>
          <h6 className='subtitle'>Our blog</h6>
          <h2>
            Let's have a look from our
            <span className='highlight'>recent blog</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Blog;
