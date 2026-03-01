import { useEffect, useState } from "react";



const Blogs = () => {
const [blogs, setBlogs]= useState([])

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then(data => console.log(data));
  }, []);

  console.log(blogs)

  return <div></div>;
};

export default Blogs;
