import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <>
      <div className="container mt-2 fs-5 fw-bold">
        <div className="card bg-primary">
          <div className="card-body">
            <nav class="navbar navbar-expand-lg   bg-primary" data-bs-theme="dark">
              <div class="container-fluid">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNavDropdown">
                  <ul class="navbar-nav ">
                    <li class="nav-item ">
                      <Link to='/' class="nav-link active " aria-current="page" href="#">
                        Home
                      </Link>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link active dropdown-toggle "
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Type Writing Courses
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <Link to='/JuniorGradeinTamil' class="dropdown-item ">
                            Junior Grade in Tamil
                          </Link>
                        </li>
                        <li>
                          <Link to='/JuniorGradeinEnglish' class="dropdown-item ">
                            Junior Grade in English
                          </Link>
                        </li>
                        <li>

                          <Link to='/SeniorGradeinTamil' class="dropdown-item ">
                            Senior Grade in Tamil
                          </Link>
                        </li>
                        <li>
                        <Link to='/SeniorGradeinEnglish' class="dropdown-item ">
                            Senior Grade in English
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link active dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        ShortHand Writing Courses
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                        <Link to='/JuniorGradeinTamil1' class="dropdown-item ">
                           Junior Grade in Tamil
                          </Link>
                        </li>
                        <li>
                        <Link to='/JuniorGradeinEnglish1' class="dropdown-item ">
                           Junior Grade in English
                          </Link>
                        </li>
                        <li>
                        <Link to='/InterGradeinEnglish' class="dropdown-item ">
                          Inter Grade in English
                          </Link>
                        </li>
                        <li> 
                          <Link to='/SeniorGradeinTamil1' class="dropdown-item ">
                         Senior Grade in Tamil 
                          </Link>
                        </li>
                        <li>
                        <Link to='/SeniorGradeinEnglish1' class="dropdown-item ">
                         Senior Grade in English 
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link  dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Computer Courses
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            XL
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Word
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            DCA
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <span class="navbar-text">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link to='/Staff' class="nav-link active" aria-current="page" href="#">
                        Staff
                      </Link>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">
                        Gallary
                      </a>
                    </li>
                    <li class="nav-item">
                    <Link to='/ContactUs' class="nav-link active" aria-current="page" href="#">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </span>
              </div>
            </nav>
          </div>
        </div>

      </div>
    </>
  );
};

export default NavBar;
