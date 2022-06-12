import Navbar from "../Components/Navbar";
import Header_Section from "../Components/Header_Section";
import Blog_Section from "../Components/Blog_Section";
import Footer from "../Components/Footer";

function Blog() {
  return (
    <>
      <div>
        <Navbar />

        <Header_Section Current_Page_Title="Blog Grid" />

        <Blog_Section />

        <Footer />
      </div>
    </>
  );
}

export default Blog;
