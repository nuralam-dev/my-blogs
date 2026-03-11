import { FaBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleBookMark }) => {
  // console.log(handleBookMark)
  console.log(blog);
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={blog.cover} />
        </figure>
        <div className="flex justify-around items-center">
          <h3>{blog.author}</h3>
          <img className="w-16" src={blog.author_img} alt="" />
          <button onClick={() => handleBookMark(blog)}>
            <FaBookmark size={25} />
          </button>
        </div>
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <div className="flex">
            {blog.hashtags.map((has) => (
              <p>{has}</p>
            ))}
          </div>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
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
