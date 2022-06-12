import Navbar from "../Components/Navbar";
import Header_Section from "../Components/Header_Section";
import About_Section from "../Components/About_Section";
import Features_Section from "../Components/Features_Section";
import Firm_Section from "../Components/Firm_Section";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

import product_img_111 from "../img/product-1.jpg";

function About_Page() {
  return (
    <>
      <div>
        <Navbar />

        <Header_Section Current_Page_Title="About Us" />

        <About_Section />

        <Firm_Section />

        <Features_Section />

        <Footer />
      </div>
    </>
  );
}

export default About_Page;
