import React from 'react';

const Blog = ({blog}) => {
    
console.log(blog)
    return (
        <div>
            
           <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={blog.cover}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{blog.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-between flex">
      <button className="btn">mark as read</button>
      <button className="btn">add bookmark</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;