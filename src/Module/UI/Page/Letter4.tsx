import React from 'react'
import IYC_logo from "../../../Assets/IYC_logo2.jpg"
import Indian_National_Congress_hand_logo from "../../../Assets/congress-logo-png.png"
import rozgar_nyay_patra_image1 from "../../../Assets/rozgar_nyay_patra_image1.png"
import QrCode from "../../../Assets/QRCodeImage.png"
import { useTranslation } from 'react-i18next'
const Letter4 = () => {


  let {t,i18n} = useTranslation();

 
  return (
    <React.Fragment>
    <div className=' h-100 w-100 d-flex justify-content-center align-items-center'>
    <div className="container envelope pt-0 pb-0">
        <div className='row  d-flex justify-content-between'>
          <div className='col-3  pt-2 pb-2  col-sm-3 col-lg-2  d-flex justify-content-center align-items-center'>
           <img src={IYC_logo} className='img-fluid imgh' alt="" />
          </div>
          <div className='col-6 col-sm-6 col-lg-6    d-flex justify-content-center align-items-center rounded-bottom-3 bg-custom' >
          <div  className=' fw-bolder   fontsize text-center pt-2 pb-2 text-white ' > 
            <span className='text-uppercase'> {t('patra-title')}</span>
          </div>
          </div>
         <div className='col-3 col-sm-3  pt-2 pb-2  col-lg-2 d-flex justify-content-center align-items-center'>

          
         <img src={Indian_National_Congress_hand_logo} className='img-fluid imgh'  alt="" />

         </div>

        </div>
        <div className='row mt-3'>
             <div className='col-12 d-flex justify-content-center align-content-center'>
      <img src={rozgar_nyay_patra_image1} className='img-fluid' alt="" />
             </div>
        </div>
        <div className='row bg-custom pt-4 pb-4 d-flex justify-content-between '>
           <div className='col-lg-6 d-flex flex-column justify-content-center align-content-end'>
           <div  className=' fw-bolder   button-53' > 
    <em >{t('patra-para4')}</em>
   </div>
           </div>
           <div className='col-lg-6 mt-4 mt-lg-0  text-white'>
            <div className='row '>
            <h5 className='fs-4 ' style={{fontStretch:"expanded"}}>  {t('patra-para1')} </h5>

            </div>
            <div className='row '>
                <div className='col-sm-6  mt-3 mt-sm-0 border-5 border-end border-white'>
                  <div className='row d-flex justify-content-between align-items-center'>
                      <div className='col-6 text-start'>
                      <h6 className='fs-5 '> {t('patra-para2')} </h6>
                      </div>
                      <div className='col-6 text-center'>
              
                <img src={QrCode} className='img-fluid imgh' alt="" />
                      </div>
                  </div>
    
                </div>
                <div className='col-sm-6 mt-3 mt-sm-0'> 
                  <small> {t('patra-para3')}</small>
                  <h3 className='fs-3'>9999999999</h3>
                </div>
            </div>
           </div>
        </div>
  </div>
    </div>
     

  </React.Fragment>
  )
}

export default Letter4