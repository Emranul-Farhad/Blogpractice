import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom';
import Blog from './Components/Blog/Blog';
import BlogDetails from './Components/BlogDetails/BlogDetails';
import Test from './Components/Tes/Test';
import { createContext, useContext, useState } from 'react';
import NotFound from './Components/Not Found/NotFound';

import Videos from './Components/Videos/Videos';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';


export const shirtData = createContext()

function App() {
  const [blogs, setBlogs] = useState([])
  return (


    <div className="App">
      <shirtData.Provider value={[blogs, setBlogs]}>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Test></Test>} ></Route>
          <Route path='/Blogs' element={<Home></Home>} ></Route>
          <Route path='/blog/:ID' element={<BlogDetails></BlogDetails>}> </Route>
          <Route path='/login' element={<Login></Login>} > </Route>
          <Route path='/signup' element={<Signup></Signup>} ></Route>
          {/* <Route path='/videos' element={<Videos></Videos>} ></Route> */}
          <Route path='*' element={<NotFound> </NotFound>}  ></Route>
        </Routes>
      </shirtData.Provider>
    </div>
  );
}

export default App;
