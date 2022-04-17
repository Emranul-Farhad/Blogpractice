import React, { useEffect, useState, useContext } from "react";
import Blog from "../Blog/Blog";
import "./Home.css";
import { shirtData } from "../../App";


const Home = () => {
  const [blogs, setBlogs] = useContext(shirtData);


  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (

    <div className='blogs-container'>
      <p>Okay adddec</p>
      {
        blogs.map((blog, index) => <Blog key={index} blog={blog} > </Blog>)
      }
    </div>

  )
};

export default Home;
