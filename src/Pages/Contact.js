import Navbar from "../Components/Navbar";
import Header_Section from "../Components/Header_Section";
import Contact_Section from "../Components/Contact_Section";
import Map_Section from "../Components/Map_Section";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import blog_img_d3 from "../img/blog-3.jpg";

function Contact() {
  return (
    <>
      <div>

        <Navbar />

        <Header_Section Current_Page_Title="Contact Us" />

        <Contact_Section />

        <Map_Section />
        
        <Footer />

      </div>
    </>
  );
}

export default Contact;
