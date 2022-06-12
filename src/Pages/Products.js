import Navbar from "../Components/Navbar";
import Header_Section from "../Components/Header_Section";
import Products_Section from "../Components/Products_Section";
import Firm_Section from "../Components/Firm_Section";
import Footer from "../Components/Footer";

function Products() {
  return (
    <>
      <div>

        <Navbar />

        <Header_Section Current_Page_Title="Products" />
        
        <Products_Section />

        <Firm_Section />

        <Footer />
        
      </div>
    </>
  );
}

export default Products;
