import React from 'react'
import "../Navbar/Navbar.css"
import mySB from '../../images/favicon.jpg'
import{MdArrowDropDown} from 'react-icons/md'
import { Link } from 'react-router-dom'


export default function Navbar(props) {

  return (
    <>
    <div className="container" id="navigation">
      <nav className="navbar navbar-expand-md justify-content-center">
        <Link className="navbar-brand" to="/"><img src={mySB} alt="site_logo" width="70" height="70"/></Link>
          <a className="navbar-toggler px-2 py-1 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <h4>Menu <MdArrowDropDown/></h4>
          </a>
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item text-center px-2 py-1">
                <Link className="nav-link text-C0C0C0" to="/"><h4>Home</h4></Link>
              </li>
              <li className="nav-item text-center px-2 py-1">
                <Link className="nav-link text-C0C0C0" to="/about"><h4>About</h4></Link>
              </li>
              <li className="nav-item text-center dropdown px-2 py-1">
                <Link className="nav-link text-C0C0C0" to="/gallery"><h4>Gallery</h4></Link>  						
              </li>
              <li className="nav-item text-center px-2 py-1">
                <Link className="nav-link text-C0C0C0" to="/videos"><h4>Videos</h4></Link>  						
              </li>
              <li className="nav-item text-center px-2 py-1">
                <Link className="nav-link text-C0C0C0" to="/contact"><h4>Contact</h4></Link>
              </li>    
            </ul>
          </div>  
      </nav>
    </div>
    </>
  )
}
