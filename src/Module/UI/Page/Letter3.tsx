import React from 'react'
import { useTranslation } from 'react-i18next';

const Letter3 = () => {

    let {t,i18n} = useTranslation();

  return (
    <React.Fragment>
       <div className=' h-100 w-100 d-flex justify-content-center align-items-center'>
    <div className="container envelope">
        <div className='row  '>
   <div className='col-md-12 border-custom'>
       <h6 className='text-custom fs-6 fw-bolder'> {t('Patra-Select-Aspiring')}</h6>
      </div>
      </div>
      <div className='row mt-3'>
        <div className='col-sm-4'>
        <div className="form-check">
           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault">{t('Armed-Services')} </label>
       </div>
       <div className="form-check">
           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault1">{t('Civil-Services')} </label>
       </div>
       <div className="form-check">
           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault2">{t('Teaching')}  </label>
       </div>
       <div className="form-check">
           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault3">{t('Police-officer')}   </label>
       </div>
       <div className="form-check">
           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault4">{t('Railway')}   </label>
       </div>
       <div className="form-check">
           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5" />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault5">{t('Bank')}   </label>
       </div>
       <div className="form-check">
           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault6" />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault6">{t('Lekhpal')}  </label>
       </div>

       <div className="form-check">
           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault7" />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault7">{t('Patwari')}    </label>
       </div>
       
    
        </div>
        <div className='col-sm-4'>
        <div className="form-check">
           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault8" />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault8">{t('Tehsildar')}     </label>
       </div>
       <div className="form-check">
           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault9" />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault9">{t('Nurse')}     </label>
       </div>
       <div className="form-check">
           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault10" />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault10">{t('Asha')}   </label>
       </div>
       <div className="form-check">
           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault11">{t('Anganwadi')}   </label>
       </div>
       <div className="form-check">
           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault12" />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault12">{t('Doctor')}  </label>
       </div>
       <div className="form-check">
           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault13" />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault13">{t('Engineer')}  </label>
       </div>
       <div className="form-check">
           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault14" />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault14">{t('Lawyer')}   </label>
       </div>
       <div className="form-check">
           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault15" />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault15">{t('Accountant')}   </label>
       </div>
        </div>
        <div className='col-sm-4'>
        <div className="form-check">
           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault16" />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault16">{t('Marketing')}   </label>
       </div>
       <div className="form-check">
           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault17" />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault17">{t('Data-Entry')}   </label>
       </div>
       <div className="form-check">
           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault18" />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault18">{t('Start-up')}    </label>
       </div>
       <div className="form-check">
           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault19" />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault19"> {t('business')} </label>
       </div>
       <div className="form-check">
           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault20" />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault20">{t('Others')}  </label>
       </div>
  

        </div>
      </div>
      <div className='row  mt-3'>
   <div className='col-md-12 border-custom'>
       <h6 className='text-custom fs-6 fw-bolder'>{t('Patra-Rozgaar-Nyay-Code')} </h6>
       <div className="form-check">
           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault23" />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault23">  {t('Patra-volunteer-concent')} </label>
       </div>

     
      </div>
      </div>

      <div className='row  mt-3'>
   <div className='col-md-12 border-custom text-end'>
       <small className='text-custom fs-6 fw-bolder'>{t('patra-para5')}</small>
      

     
      </div>
      </div>
      {/* MUJHE NYAY CHAHIYE! */}
      </div>
      </div>
       

    </React.Fragment>
  )
}

export default Letter3