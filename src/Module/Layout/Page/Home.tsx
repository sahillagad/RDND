import React from 'react'
import rozgar_nyay_patra_image2 from "../../../Assets/rozgar_nyay_patra_image2.png"
import BharatJODOYatra1 from "../../../Assets/BharatJODOYatra1.png"
import Volunteer_Image from "../../../Assets/Volunteer_Image.png"
import rozgar_naya_patra_participate from "../../../Assets/rozgar_naya_patra_participate.png"
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { useTranslation } from 'react-i18next'
import Patra from '../../User/Page/Patra'


const Home = () => {

  let {t} = useTranslation();


  return (
    <React.Fragment>
 




 <Navbar/>

     <div className='container-fluid '>
  
      
        <Patra/>
        {/* <div className='row pt-4 pb-4 bg-custom1'>
          <div className='col-sm-10 m-auto'>
              <div className='card'>
                  <div className='card-body '>
                   <div className='row pt-3 pb-3'>
                      <div className='col-sm-4'> 
                         <img src={rozgar_nyay_patra_image2} className='w-100' height={400} alt="rozgar_nyay_patra_image" />
                      </div>
                      <div className='col-sm-8'>
                      <h6 className='fw-bold fs-3'>{t("about-Info")} </h6>
                      <p className='text-muted'>
                      {t("about-para1")}
                         </p>
                         <p className='text-muted'> 
                         {t("about-para2")}
                         </p>
                         <p className='text-muted'>
                         {t("about-para3")}
                         </p>
                         <button className="btn btn-custom " type="submit">{t('apply-patra')} <i className="bi bi-chevron-right ms-1 fw-bolder"></i></button>

                      </div>
                   </div>
                  </div>
              </div>
          </div>
        </div> */}
    
        <div className='row pb-4 mt-4 bg-custom2'>
          <div className='col-sm-10 m-auto'>
             <div className='row d-flex justify-content-between'> 
                <div className='col-lg-6 mt-4 ms-lg-0'>
                     <div className='card h-100 rounded-0'>
                        <div className='card-body pb-3'>
                            <div className='row'>
                              <div className='col-4 col-sm-2'>
                                <img src={BharatJODOYatra1} className=' w-100 border-custom' height={90} alt="" />
                              </div>
                              <div className='col-5 col-sm-6 d-flex flex-column justify-content-center '>
                                <span className='fw-bold fs-5'> {t('Join-Nyay-Yoddha-part1')}</span>
                                <span className='fw-bold fs-5 text-custom'>{t('Join-Nyay-Yoddha-part2')}</span>
                              </div>
                              <div className='col-3 col-sm-4 d-flex justify-content-center align-items-center'>
                          <a href="https://bharatjodonyayyatra.com/en/nyayyoddha" target='_blank'>
                          <button  className='btn btn-custom2'>{t('Join-Now')} </button>

                          </a>
                              </div>
                            </div>
                        </div>
                     </div>
                </div>
                <div className='col-lg-6  mt-4 ms-lg-0 '>
                     <div className='card h-100 rounded-0'>
                        <div className='card-body pb-3'>
                            <div className='row'>
                              <div className='col-4 col-sm-2'>
                                <img src={Volunteer_Image} className=' w-100 border-custom  pe-2' height={90} alt="" />
                              </div>
                              <div className='col-5 col-sm-6 d-flex flex-column justify-content-center '>
                                <span className='fw-bold fs-5'>{t('Join-Volunteer-part1')} </span>
                                <span className='fw-bold fs-5 text-custom'>{t('Join-Volunteer-part2')}  </span>
                              </div>
                              <div className='col-3 col-sm-4  d-flex justify-content-center align-items-center'>
                              <a target='_blank' href="https://iyc.in/intern/">
                              <button className='btn btn-custom2'>{t('Join-Now')}  </button>

                              </a>
                              </div>
                            </div>
                        </div>
                     </div>
                </div>
             </div>
          </div>
        </div>
     </div>

<Footer/>

    </React.Fragment>
  )
}

export default Home;