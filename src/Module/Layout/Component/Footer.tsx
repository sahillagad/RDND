import React from 'react'
import { useTranslation } from 'react-i18next';

const Footer = () => {

  
  let {t} = useTranslation();



  return (
    <React.Fragment>
{/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
<div className="container-fluid  ps-0 pe-0">
  {/* <!-- Footer --> */}
  <footer
          className="text-center text-lg-start "
          style={{backgroundColor: `#f5f5f5`}}
          >
    {/* <!-- Grid container --> */}
    <div className="container p-4 pb-0">
      {/* <!-- Section: Links --> */}
      <section className="">
        {/* <!--Grid row--> */}
        <div className="row">
          {/* <!-- Grid column --> */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold fw-bold">
            {t('footer-Head1')} 
            </h6>
            <p className='text-align-justify'>
            {t('footer-para1')} 
            </p>
          </div>
          {/* <!-- Grid column --> */}

          <hr className="w-100 clearfix d-md-none" />

          {/* <!-- Grid column --> */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 mb-4">
            <h6 className="text-uppercase mb-2 fw-bold font-weight-bold">   {t('footer-Head2')} </h6>
            <p className='mb-1'>
              <a className="text-dark text-decoration-none">{t('CSD')}</a>
            </p>
            <p className='mb-1'>
              <a className="text-dark text-decoration-none">{t('IYC')}</a>
            </p>
            <p className='mb-1'>
              <a className="text-dark text-decoration-none">{t('AIM')}</a>
            </p>
            <p className='mb-1'>
              <a className="text-dark text-decoration-none">{t('INTUC')}</a>
            </p>
            <p className='mb-1'>
              <a className="text-dark text-decoration-none">{t('NSUI')}</a>
            </p>
          </div>
          {/* <!-- Grid column --> */}

          <hr className="w-100 clearfix d-md-none" />


          {/* <!-- Grid column --> */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold fw-bold">{t('footer-Head3')}</h6>
            <p><i className="fas fa-home mr-3"></i>  {t('footer-address')} </p>
            <p><i className="fas fa-envelope mr-3"></i> socialmedia@iyc.in</p>
            <p><i className="fas fa-phone mr-3"></i> +91 11 2335 2472</p>
            <p><i className="fas fa-print mr-3"></i> +91 11 2331 8533</p>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold fw-bold">{t('footer-Head4')}</h6>

            {/* <!-- Facebook --> */}
            <a
               className="btn btn-primary btn-floating m-1"
               style={{backgroundColor: `#3b5998`}}
               href="https://www.facebook.com/indianyouthcongress/"
     
              role="button"
            
               ><i className="bi bi-facebook"></i></a>

            {/* <!-- Twitter --> */}
            <a
               className="btn btn-primary btn-floating m-1"
               style={{backgroundColor: `#55acee`}}
               href="https://twitter.com/IYC"
               role="button"
               rel='noreferrer'
               ><i className="bi bi-twitter-x"></i></a>

    
            <a
               className="btn btn-primary btn-floating m-1"
               style={{backgroundColor: `#f00086`}}
               href="https://www.instagram.com/indianyouthcongress/"
               role="button"
               ><i className="bi bi-instagram"></i></a>

            {/* <!-- Linkedin --> */}
            <a
               className="btn btn-primary btn-floating m-1"
               style={{backgroundColor: `#0082ca`}}
               href="https://www.linkedin.com/company/indian-youth-congress/"
               role="button"
               ><i className="bi bi-linkedin"></i
              ></a>
           
            <a
               className="btn btn-primary btn-floating m-1"
               style={{backgroundColor: `#6be197`}}
               href="https://www.whatsapp.com/channel/0029Va5dVeU0G0XidNVHiY1Z"
               role="button"
               ><i className="bi bi-whatsapp"></i></a>
          </div>
        </div>
        {/* <!--Grid row--> */}
      </section>
      {/* <!-- Section: Links --> */}
    </div>
    {/* <!-- Grid container --> */}

    {/* <!-- Copyright --> */}
    <div
         className="text-center p-3 text-white mt-3"
         style={{backgroundColor: `black`}}
         >
{t('Copyright1')}
      <a className="text-decoration-none text-white" href="https://mdbootstrap.com/"
         >  {t('Copyright2')}</a
        >
    </div>
    {/* <!-- Copyright --> */}
  </footer>
  {/* <!-- Footer --> */}
</div>

    </React.Fragment>
  )
}

export default Footer