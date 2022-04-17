import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link, NavLink } from "react-router-dom";
import { shirtData } from "../../App";
import "./BlogDetails.css";
// import { BsChevronLeft } from "react-icons/bs";

const BlogDetails = () => {

  const { ID } = useParams();
  console.log(ID);
  const backb = useNavigate()
  const [blogs] = useContext(shirtData)
  // console.log(blogs, ID);




  const blog = blogs?.find((blog) => blog?._id == ID);
  console.log(blog);

  return (



    <>




      <div className='header-gradient' />

      <button onClick={() => backb(`/`)} > back </button>


      <div>
        <div className='blog-details'>
          <div className='blog-image'>
            <img src={blog?.imageURL} alt='' />
          </div>
          <h1> {blog?.title} </h1>
          <p>  </p>
        </div>

      </div>

    </>
  );
};

export default BlogDetails;
