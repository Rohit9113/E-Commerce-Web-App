import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  let total = useSelector((state) => state.totalCart);

  return (
    <nav className="navbar navbar-expand-lg p-4 align-items-center" style={style.nav}>
      <div className="container-fluid">
        {/* Brand Logo and name */}
        <Link className="navbar-brand fs-3" to="/" style={style.navHead}>
          APISeller
        </Link>

        {/* Toggle button for collapsed navigation */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible navigation */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Products link */}
            <li className="nav-item">
              <Link to="/" className="nav-link active text-light" href="#">
                Products
              </Link>
            </li>

            {/* Add product link */}
            <li className="nav-item">
              <Link to="/addproducts" className="nav-link active text-light">
                Add a product
              </Link>
            </li>
          </ul>

          {/* Cart and Profile icons */}
          <div className="d-flex gap-5 position-relative">
            {/* Cart icon */}
            <img
              src="Images/cart-icon.png"
              alt="error"
              width={"40rem"}
              onClick={() => navigate("/cart")}
              style={{ cursor: "pointer" }}
            />

            {/* Total cart count */}
            {total ? (
              <p
                className="bg-white rounded-circle position-absolute d-flex align-items-center justify-content-center"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  top: "21%",
                  left: "20%",
                }}
              >
                {total}
              </p>
            ) : (
              ""
            )}

            {/* Profile icon */}
            <img
              src="Images/Profile-icon.jpg"
              alt="error"
              width={"40rem"}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

const style = {
  nav: {
    backgroundColor: "black",
  },
  navHead: {
    fontFamily: "var(--fontStyle)",
    color: "#f47289",
  },
};
