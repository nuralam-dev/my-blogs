import { useState } from "react";
import "./App.css";
import Blogs from "./componentes/Blogs/Blogs";
import Navbar from "./componentes/Navbar/Navbar";

function App() {
  const [bookMarked, setBookMarked]=useState([])
const [readingCount, setReadingCount]=useState(0)
  
  const handleBookMark = (blog) => {
    setBookMarked([...bookMarked,blog])
    
  };

  const handleMarksAsRead =(time, id)=>{
      const newTime=readingCount+time;
      setReadingCount(newTime);
      handleRemoveFromBookMark(id)
      // console.log(id)
    };
  const handleRemoveFromBookMark=(id)=>{
const remainingBookMark=bookMarked.filter((mark)=>mark.id !==id);
setBookMarked(remainingBookMark)
  }


  return (
    <>
      <Navbar></Navbar>
      <div className="div-container flex">
        <div className="left-container w-[70%] text-center">
          <Blogs handleBookMark={handleBookMark} handleMarksAsRead={handleMarksAsRead}></Blogs>
        </div>
        <div className="right-container w-[30%] text-center">
          <h1>Reading Time : {readingCount}</h1>
          <h1>Bookmarked Count : {bookMarked.length}</h1>
          <div>
            {
            bookMarked.map((marked)=><p className="key={blog.id} border backdrop-blur-3xl mt-5 bg-amber-100 rounded-sm">{marked.title}</p>)
          }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
