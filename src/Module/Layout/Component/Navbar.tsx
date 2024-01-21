import React from 'react'
import IYC_logo from "../../../Assets/IYC_logo.png"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Navbar = () => {

  let {t}=useTranslation();

  return (
    
   <>

<nav className="navbar navbar-expand-lg  ">

<div className="container-fluid">
<Link className="navbar-brand" to="/">
    <img src={IYC_logo} alt="IYC_logo" height="80" />
  </Link>
  
  <div>
    {/* <Link to={"/Patra"}> 
    <button className="btn  btn-custom d-lg-none me-2" type="submit">{t('apply-patra')} <i className="bi bi-chevron-right ms-1 fw-bolder"></i></button>
    </Link> */}
  <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation"> 
    <span className="navbar-toggler-icon"></span>
  </button>
  </div>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link active  nav-hover " aria-current="page" to="/">{t('nav-home')}</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link nav-hover " aria-current="page"  to="/livestream">{t('nav-live stream')} </Link>
      </li>
      {/* <li className="nav-item">
        <Link className="nav-link  nav-hover" aria-current="page" to="/Contact-Us">{t('nav-ContactUs')}</Link>
      </li> */}
  
    

        <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      {t('nav-More')}
      </a>
      <ul className="dropdown-menu">
      
        <li><span className="dropdown-item" > 
         <Link className="dropdown-item   text-decoration-none " aria-current="page"  to="/Who-Are-We"> {t('nav-WhoAreWe')}</Link></span></li>
         <li><span className='dropdown-item'>
         <Link className="dropdown-item   text-decoration-none" aria-current="page"  to="/ProfileCard"> {t('nav-Profile')}</Link>
          </span></li>
        <li><span className="dropdown-item" > <Link className="dropdown-item   text-decoration-none" aria-current="page"  to="/Gallery"> {t('nav-Gallery')}</Link></span></li>

      </ul>
    </li>

    </ul>
    {/* <div className='d-flex d-none d-lg-block'>
      
    <Link to={"/Patra"}> 
    <button className="btn btn-sm btn-custom " type="submit">{t('apply-patra')} <i className="bi bi-chevron-right ms-1 fw-bolder"></i></button>
      </Link>
    </div> */}
    {/* <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-sm btn-custom" type="submit">JOIN NOW</button>
    </form> */}
  </div>
</div>
</nav> 
   </>

  )
}

export default Navbar