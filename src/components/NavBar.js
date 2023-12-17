import React from 'react'
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  let location = useLocation();

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{ backgroundColor: 'white' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-newspaper mx-2 mb-1 ml-5" viewBox="0 0 16 16">
            <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
            <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z" />
          </svg><span className='m-1 font-monospace'>Newspedia</span></Link>
          <form className='d-flex font-monospace'>
            <button style={{border:"0"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {console.log(location.pathname)}
                  <Link id="myactive" className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
                </li>
                <li className="nav-item"><Link id="myactive" className={`nav-link ${location.pathname === "/Business" ? "active" : ""} `} to="/Business">Business</Link></li>
                <li className="nav-item"><Link id="myactive" className={`nav-link ${location.pathname === "/Entertainment" ? "active" : ""} `} to="/Entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link id="myactive" className={`nav-link ${location.pathname === "/Health" ? "active" : ""} `} to="/Health">Health</Link></li>
                <li className="nav-item"><Link id="myactive" className={`nav-link ${location.pathname === "/Science" ? "active" : ""} `} to="/Science">Science</Link></li>
                <li className="nav-item"><Link id="myactive" className={`nav-link ${location.pathname === "/Sports" ? "active" : ""} `} to="/Sports">Sports</Link></li>
                <li className="nav-item"><Link id="myactive" className={`nav-link ${location.pathname === "/Technology" ? "active" : ""} `} to="/Technology">Technology</Link></li>
              </ul>

            </div>
          </form>
        </div>
      </nav>
    </div>
  )

}

export default NavBar