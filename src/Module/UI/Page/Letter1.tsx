import React from 'react'
import congresslogo from "../../../Assets/congress-logo.jpg"
import { useTranslation } from 'react-i18next';
const Letter1 = () => {


  let {t,i18n} = useTranslation();


  return (
    <React.Fragment>
      <div className=' h-100 w-100 d-flex justify-content-center align-items-center'>
      <div className="container envelope postcard">
          <div className='row  '>
 <div className='col-7 col-md-10 col-lg-10 pt-2 pb-2 ptext-center d-flex justify-content-center align-items-start'>
   <div  className=' fw-bolder HeaderRazgar  fs-5' > 
    <em >    {t('patra-title')} </em>
   </div>
 </div>
<div className='col-5 col-md-2 col-lg-2 text-end '>
<div className="stamp ">

<img src={congresslogo} height={60} width={60} />


</div>
</div>
          </div>
          <div className="mb-3 mt-3 row">
  <label htmlFor="inputName" className="col-lg-1 col-form-label fw-bolder fs-6  text-custom mt-2 ">{t('Patra-Name')}: </label>
    <div className="col-lg-11">
      
      <input type="text" className="form-control ps-0 border-custom1 rounded-0 shadow-none mb-lg-2   mb-3" name="" id="inputName" aria-describedby="helpId" placeholder="" />

    </div>
    <label htmlFor="inputAge" className="col-lg-1 col-form-label fw-bolder fs-6  text-custom mt-2">{t('Patra-Age')}: </label>
    <div className="col-lg-3">
      <input type="number" className="form-control ps-0 border-custom1 rounded-0 shadow-none mb-lg-2   mb-3" name="" id="inputAge" aria-describedby="helpId" placeholder="" />
    </div>
    <label htmlFor="inputGender" className="col-lg-1 col-form-label fw-bolder fs-6  text-custom   mt-2">{t('Patra-gender')}: </label>
    <div className="col-lg-3">
      <input type="text" className="form-control ps-0 border-custom1 rounded-0 shadow-none  mb-lg-2  mb-3" name="" id="inputGender" aria-describedby="helpId" placeholder="" />
    </div>
    <label htmlFor="inputCategory" className="col-lg-1 col-form-label fw-bolder fs-6  text-custom  mt-2">{t('Patra-Category')}: </label>
    <div className="col-lg-3">
      <input type="text" className="form-control ps-0 border-custom1 rounded-0 shadow-none  mb-lg-2  mb-3" name="" id="inputCategory" aria-describedby="helpId" placeholder="" />
    </div>



    <label htmlFor="inputMobile" className="col-lg-1 col-form-label fw-bolder fs-6  text-custom  mt-2">{t('Patra-Mobile-No')}: </label>
    <div className="col-lg-5">
      <input type="text" className="form-control ps-0 border-custom1 rounded-0 shadow-none mb-lg-2   mb-3" name="" id="inputMobile" aria-describedby="helpId" placeholder="" />
    </div>
    <label htmlFor="inputEmail" className=" col-lg-1 col-form-label fw-bolder fs-6  text-custom  mt-2">{t('Patra-Email')}: </label>
    <div className="col-lg-5">
      <input type="text" className="form-control ps-0 border-custom1 rounded-0 shadow-none mb-lg-2   mb-3" name="" id="inputEmail" aria-describedby="helpId" placeholder="" />
    </div>


 

 
         <label htmlFor="inputLokSabha" className="col-lg-1 col-form-label fw-bolder fs-6  text-custom  ">{t('Patra-Parliamentary-Constituency')}:  </label>
    <div className="col-lg-11">
      <input type="text" className="form-control ps-0 border-custom1 rounded-0 shadow-none mb-lg-2  mb-3" name="" id="inputLokSabha" aria-describedby="helpId" placeholder="" />
    </div>
    
 


    
<label htmlFor="inputVidhanSabha" className="col-lg-1 col-form-label fw-bolder fs-6  text-custom  ">{t('Patra-Assembly-Constituency')}:  </label>
    <div className="col-lg-11">
      <input type="text" className="form-control ps-0 border-custom1 rounded-0 shadow-none  mb-lg-2  mb-3 " name="" id="inputVidhanSabha" aria-describedby="helpId" placeholder="" />
    </div>



 <label htmlFor="inputEducation" className="col-lg-2 col-form-label fw-bolder fs-6  text-custom  ">{t('Patra-Highest-Educational-Qualification')}: </label>
    <div className="col-lg-10">
      <input type="text" className="form-control ps-0 border-custom1 rounded-0 shadow-none mb-lg-2  mb-3" name="" id="inputEducation" aria-describedby="helpId" placeholder="" />
    </div>
 
  

  </div>
    </div>
      </div>
       

    </React.Fragment>
  )
}

export default Letter1