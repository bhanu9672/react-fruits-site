import carousel_img from "../img/carousel-2.jpg";
import about_img from "../img/about.jpg";
import icon_img_1 from "../img/icon-1.png";
import icon_img_2 from "../img/icon-1.png";
import icon_img_3 from "../img/icon-3.png";

import product_img_1 from "../img/product-1.jpg";
import product_img_2 from "../img/product-2.jpg";
import product_img_3 from "../img/product-3.jpg";
import product_img_4 from "../img/product-4.jpg";
import product_img_5 from "../img/product-5.jpg";
import product_img_6 from "../img/product-6.jpg";
import product_img_7 from "../img/product-7.jpg";
import product_img_8 from "../img/product-8.jpg";

import blog_img_1 from "../img/blog-1.jpg";
import blog_img_2 from "../img/blog-2.jpg";
import blog_img_3 from "../img/blog-3.jpg";


import Navbar from "../Components/Navbar";
import Carousel_Section from "../Components/Carousel_Section";
import About_Section from "../Components/About_Section";
import Features_Section from "../Components/Features_Section";
import Products_Section from "../Components/Products_Section";
import Firm_Section from "../Components/Firm_Section";
import Blog_Section from "../Components/Blog_Section";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>

        <Navbar />

        <Carousel_Section />

        <About_Section />

        <Features_Section />

        <Products_Section />

        <Firm_Section />

        <Blog_Section />

        <Footer />
      </div>
    </>
  );
}

export default Home;
