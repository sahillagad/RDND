import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { useTranslation } from 'react-i18next';

const WhoAreWe = () => {
  let {t} = useTranslation();
  return (
    <React.Fragment>
       <Navbar/>

       <div className='container-fluid  ' >
            <div className='row ' style={{marginTop:"100px",marginBottom:"100px"}}>
            <div className="col-12 col-sm-9 col-md-8 col-lg-6  m-auto ">
            <h6 className='fw-bold fs-3 text-center text-uppercase'>   {t("nav-WhoAreWe")}</h6>
            <div className="mb-3 mt-3">
                         <p className='text-muted'> {t("WhoAreWe-para1")}</p>
                          <p className='text-muted'>
                          {t("WhoAreWe-para2")}
                          </p>
                           </div>
                      </div>
            </div>
            </div>

            <Footer/>
  
    </React.Fragment>
  )
}

export default WhoAreWe