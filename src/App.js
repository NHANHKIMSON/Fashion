import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Contact from "./Contact";

function App() {
  return (
    <>
  {/* Start Top Nav */}
  <nav
    className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"
    id="templatemo_nav_top"
  >
    <div className="container text-light">
      <div className="w-100 d-flex justify-content-between">
        <div>
          <i className="fa fa-envelope mx-2" />
          <a
            className="navbar-sm-brand text-light text-decoration-none"
            href="mailto:info@company.com"
          >
            info@company.com
          </a>
          <i className="fa fa-phone mx-2" />
          <a
            className="navbar-sm-brand text-light text-decoration-none"
            href="tel:010-020-0340"
          >
            010-020-0340
          </a>
        </div>
        <div>
          <a
            className="text-light"
            href="https://fb.com/templatemo"
            target="_blank"
            rel="sponsored"
          >
            <i className="fab fa-facebook-f fa-sm fa-fw me-2" />
          </a>
          <a
            className="text-light"
            href="https://www.instagram.com/"
            target="_blank"
          >
            <i className="fab fa-instagram fa-sm fa-fw me-2" />
          </a>
          <a className="text-light" href="https://twitter.com/" target="_blank">
            <i className="fab fa-twitter fa-sm fa-fw me-2" />
          </a>
          <a
            className="text-light"
            href="https://www.linkedin.com/"
            target="_blank"
          >
            <i className="fab fa-linkedin fa-sm fa-fw" />
          </a>
        </div>
      </div>
    </div>
  </nav>
  {/* Close Top Nav */}
  {/* Header */}
  <nav className="navbar navbar-expand-lg navbar-light shadow">
    <div className="container d-flex justify-content-between align-items-center">
      <a
        className="navbar-brand text-success logo h1 align-self-center"
        href="index.html"
      >
        Zay
      </a>
      <button
        className="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#templatemo_main_nav"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
        id="templatemo_main_nav"
      >
        <div className="flex-fill">
          <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Shop">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar align-self-center d-flex">
          <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="inputMobileSearch"
                placeholder="Search ..."
              />
              <div className="input-group-text">
                <i className="fa fa-fw fa-search" />
              </div>
            </div>
          </div>
          <a
            className="nav-icon d-none d-lg-inline"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#templatemo_search"
          >
            <i className="fa fa-fw fa-search text-dark mr-2" />
          </a>
          <a
            className="nav-icon position-relative text-decoration-none"
            href="#"
          >
            <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1" />
            <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
              7
            </span>
          </a>
          <a
            className="nav-icon position-relative text-decoration-none"
            href="#"
          >
            <i className="fa fa-fw fa-user text-dark mr-3" />
            <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
              +99
            </span>
          </a>
        </div>
      </div>
    </div>
  </nav>
  {/* Close Header */}

  {/* Modal */}
  <div
    className="modal fade bg-white"
    id="templatemo_search"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg" role="document">
      <div className="w-100 pt-1 mb-5 text-right">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <form
        action=""
        method="get"
        className="modal-content modal-body border-0 p-0"
      >
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control"
            id="inputModalSearch"
            name="q"
            placeholder="Search ..."
          />
          <button
            type="submit"
            className="input-group-text bg-success text-light"
          >
            <i className="fa fa-fw fa-search text-white" />
          </button>
        </div>
      </form>
    </div>
  </div>



  {/* Infor  */}
  <section>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path="About" element={<About/>}></Route>
      <Route path="Shop" element={<Shop/>}></Route>
      <Route path="Contact" element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
  </section>

  {/* end  Infor  */}

  {/* Start Footer */}
  <footer className="bg-dark" id="tempaltemo_footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4 pt-5">
          <h2 className="h2 text-success border-bottom pb-3 border-light logo">
            Zay Shop
          </h2>
          <ul className="list-unstyled text-light footer-link-list">
            <li>
              <i className="fas fa-map-marker-alt fa-fw" />
              123 Consectetur at ligula 10660
            </li>
            <li>
              <i className="fa fa-phone fa-fw" />
              <a className="text-decoration-none" href="tel:010-020-0340">
                010-020-0340
              </a>
            </li>
            <li>
              <i className="fa fa-envelope fa-fw" />
              <a
                className="text-decoration-none"
                href="mailto:info@company.com"
              >
                info@company.com
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 pt-5">
          <h2 className="h2 text-light border-bottom pb-3 border-light">
            Products
          </h2>
          <ul className="list-unstyled text-light footer-link-list">
            <li>
              <a className="text-decoration-none" href="#">
                Luxury
              </a>
            </li>
            <li>
              <a className="text-decoration-none" href="#">
                Sport Wear
              </a>
            </li>
            <li>
              <a className="text-decoration-none" href="#">
                Men's Shoes
              </a>
            </li>
            <li>
              <a className="text-decoration-none" href="#">
                Women's Shoes
              </a>
            </li>
            <li>
              <a className="text-decoration-none" href="#">
                Popular Dress
              </a>
            </li>
            <li>
              <a className="text-decoration-none" href="#">
                Gym Accessories
              </a>
            </li>
            <li>
              <a className="text-decoration-none" href="#">
                Sport Shoes
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 pt-5">
          <h2 className="h2 text-light border-bottom pb-3 border-light">
            Further Info
          </h2>
          <ul className="list-unstyled text-light footer-link-list">
            <li>
              <a className="text-decoration-none" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-decoration-none" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="text-decoration-none" href="#">
                Shop Locations
              </a>
            </li>
            <li>
              <a className="text-decoration-none" href="#">
                FAQs
              </a>
            </li>
            <li>
              <a className="text-decoration-none" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row text-light mb-4">
        <div className="col-12 mb-3">
          <div className="w-100 my-3 border-top border-light" />
        </div>
        <div className="col-auto me-auto">
          <ul className="list-inline text-left footer-icons">
            <li className="list-inline-item border border-light rounded-circle text-center">
              <a
                className="text-light text-decoration-none"
                target="_blank"
                href="http://facebook.com/"
              >
                <i className="fab fa-facebook-f fa-lg fa-fw" />
              </a>
            </li>
            <li className="list-inline-item border border-light rounded-circle text-center">
              <a
                className="text-light text-decoration-none"
                target="_blank"
                href="https://www.instagram.com/"
              >
                <i className="fab fa-instagram fa-lg fa-fw" />
              </a>
            </li>
            <li className="list-inline-item border border-light rounded-circle text-center">
              <a
                className="text-light text-decoration-none"
                target="_blank"
                href="https://twitter.com/"
              >
                <i className="fab fa-twitter fa-lg fa-fw" />
              </a>
            </li>
            <li className="list-inline-item border border-light rounded-circle text-center">
              <a
                className="text-light text-decoration-none"
                target="_blank"
                href="https://www.linkedin.com/"
              >
                <i className="fab fa-linkedin fa-lg fa-fw" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-auto">
          <label className="sr-only" htmlFor="subscribeEmail">
            Email address
          </label>
          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control bg-dark border-light"
              id="subscribeEmail"
              placeholder="Email address"
            />
            <div className="input-group-text btn-success text-light">
              Subscribe
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-100 bg-black py-3">
      <div className="container">
        <div className="row pt-2">
          <div className="col-12">
            <p className="text-left text-light">
              Copyright © 2021 Company Name | Designed by{" "}
              <a rel="sponsored" href="https://templatemo.com" target="_blank">
                TemplateMo
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* End Footer */}
</>
  );
}

export default App;
