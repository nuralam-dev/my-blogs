import "./App.css";
import Blogs from "./componentes/Blogs/Blogs";
import Navbar from "./componentes/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="div-container flex">
        <div className="left-container w-[70%] text-center">
          <Blogs></Blogs>
        </div>
        <div className="right-container w-[30%] text-center">
          <h1>Reading Time : 0</h1>
          <h1>Bookmarked Count : 0</h1>
        </div>
      </div>
      
    </>
  );
}

export default App;
