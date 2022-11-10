import { Link } from "react-router-dom";

function Header_Section({ Current_Page_Title }) {
  return (
    <>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <h1 className="display-3 mb-3 animated slideInDown"> { Current_Page_Title }</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link className="text-body" to={"/"}>Home</Link>
              </li>
              <li
                className="breadcrumb-item text-dark active"
                aria-current="page"
              >
                { Current_Page_Title }
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}
    </>
  );
}

export default Header_Section;
