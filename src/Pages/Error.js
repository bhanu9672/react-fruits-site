import Navbar from "../Components/Navbar";
import Header_Section from "../Components/Header_Section";
import Error_Section from "../Components/Error_Section";
import Footer from "../Components/Footer";

function Error() {
  return (
    <>
      <div>

        <Navbar />

        <Header_Section Current_Page_Title="404 Error" />

        <Error_Section />

        <Footer />

      </div>
    </>
  );
}

export default Error;
