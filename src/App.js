import React from "react";
import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Features from "./Pages/Features";
import Blog from "./Pages/Blog";
import Error from "./Pages/Error";
import About_Page from "./Pages/About_Page";

import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter >

        {/* <nav>
          <Link to="/"> Home </Link>
          <Link to="contact"> Contact </Link>
        </nav> */}

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/products" element={ <Products /> } />
          <Route path="/features" element={ <Features /> } />
          <Route path="/blog" element={ <Blog /> } />
          <Route path="/error" element={ <Error /> } />
          <Route path="/about_page" element={ <About_Page /> } />
          
          <Route path="/contact" element={ <Contact /> } />

        </Routes>

      </BrowserRouter>


      


    </>
  );
}

export default App;
