import React from 'react'
import BharatJODOYatra1 from "../../../Assets/BharatJODOYatra1.png"
import Signature_of_Rahul_Gandhi from "../../../Assets/Signature_of_Rahul_Gandhi.png"
import { useTranslation } from 'react-i18next';
export const Letter2 = () => {

  let {t,i18n} = useTranslation();



  return (
    <React.Fragment>
    <div className=' h-100 w-100 d-flex justify-content-center align-items-center'>
    <div className="container envelope">
        <div className='row  mt-4 mb-4'>
   <div className='col-md-6 border-custom'>
    <div className='row  d-flex justify-content-between text-custom' style={{fontSize:"13px"}}>
      <div className='col text-start' > 

   {
    i18n.language === "en" ?  
     <><em>January</em>, 14<sup>th</sup> 2024</>
    :
     <>  14 <em>जनवरी</em> 2024 </>
    }

      
      </div>
      <div className='col text-end'>
       पौष विक्रम संवत

      </div>
    </div>
    <div className='row mt-2 text-custom'>
    <h6 className='fw-bolder'>{t('DearYoungFriend')}</h6>
    <p className='mt-2 fs-6' >{t('patra-para6')}</p>
    <p  className='text-align-justify'>{t('patra-para7')}</p>
    <p className='text-align-justify'>{t('patra-para8')} <br />{t('patra-para9')}</p>
    </div>
   </div>

<div className='col-md-6 text-end '>
    <div className='row d-flex '>
    <div className='col-sm-2 d-block d-sm-none'> 
       <div className="stamp ">
<img src={BharatJODOYatra1} className='' alt='BharatJODOYatra' height={60} width={60} />
</div>
       </div>
       <div className='col-md-8 col-lg-10 mt-3 mt-sm-0 '>
       <p className='text-align-justify text-custom'>
{t('patra-para10')}
</p>
       </div>
       <div className='col-md-4 col-lg-2 d-none d-sm-block'> 
       <div className="stamp ">
<img src={BharatJODOYatra1} className='' alt='BharatJODOYatra' height={60} width={60} />
</div>
       </div>
       <div className='col-12'>
       <p className='text-align-justify text-custom'>{t('patra-para11')}</p>
       </div>
       <div className='col-12 text-start mt-4'>
        <small className='text-custom fs-6'>{t('patra-para13')}</small> <br />
        <img src={Signature_of_Rahul_Gandhi} alt="Signature_of_Rahul_Gandhi"  width={100} height={50}/><br />
        <h6 className='fw-bolder text-custom mb-0'>{t('patra-para14')}</h6>
       </div>
    </div>


</div>
        </div>
  </div>
    </div>
     

  </React.Fragment>
  )
}
