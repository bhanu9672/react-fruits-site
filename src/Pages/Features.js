import Navbar from "../Components/Navbar";
import Header_Section from "../Components/Header_Section";
import Features_Section from "../Components/Features_Section";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Features() {
  return (
    <>
      <div>

        <Navbar />

        <Header_Section Current_Page_Title="Features" />

        <Features_Section />

        <Footer />

      </div>
    </>
  );
}

export default Features;
