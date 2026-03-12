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

  const handleMarksAsRead =(time)=>{
      const newTime=readingCount+time;
      setReadingCount(newTime);
    };
  


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
          <div className="border backdrop-blur-3xl">
            {
            bookMarked.map((marked)=><p>{marked.title}</p>)
          }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
