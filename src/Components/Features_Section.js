import { Link } from "react-router-dom";

import icon_img_1 from "../img/icon-1.png";
import icon_img_2 from "../img/icon-1.png";
import icon_img_3 from "../img/icon-3.png";

function Features_Section() {
  return (
    <>
      {/* Feature Start */}
      <div className="container-fluid bg-light bg-icon my-5 py-6">
        <div className="container">
          <div
            className="section-header text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <h1 className="display-5 mb-3">Our Features</h1>
            <p>
              Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
              justo sed rebum vero dolor duo.
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src={icon_img_1} alt />
                <h4 className="mb-3">Natural Process</h4>
                <p className="mb-4">
                  Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
                  diam justo sed vero dolor duo.
                </p>
                <Link
                  className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill"
                  to="/features"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src={icon_img_2} alt />
                <h4 className="mb-3">Organic Products</h4>
                <p className="mb-4">
                  Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
                  diam justo sed vero dolor duo.
                </p>
                <Link
                  className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill"
                  to="/features"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src={icon_img_3} alt />
                <h4 className="mb-3">Biologically Safe</h4>
                <p className="mb-4">
                  Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
                  diam justo sed vero dolor duo.
                </p>
                <Link
                  className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill"
                  to="/features"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}
    </>
  );
}

export default Features_Section;
