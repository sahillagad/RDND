import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {

    let [message,setMessage]=useState<string>("");
    let [subject,setsubject]=useState<string>("");

     const handlesubject=(event:React.ChangeEvent<HTMLInputElement>)=>{
      setsubject(event.target.value);
     }
     const handleMessage=(event:React.ChangeEvent<HTMLTextAreaElement>)=>{
       setMessage(event.target.value);
     }

     let {t} = useTranslation();

  return (
    <React.Fragment>
          <Navbar/>
            <div className='container-fluid  ' >
            <div className='row ' style={{marginTop:"100px",marginBottom:"100px"}}>
            <div className="col-12 col-sm-9 col-md-8 col-lg-6  m-auto ">
            <h6 className='fw-bold fs-3 text-center'> {t('Join-Now')}</h6>
                           <div className="mb-3 mt-3">
                            <input type="text"
                             className="form-control bg-secondary-subtle" id="exampleInputText1" aria-describedby="textHelp" 
                             placeholder={`${t("contact-Subject")}`} 
                             value={subject}
                              onChange={(event)=>handlesubject(event)} />
                           </div>
    
                  <div className="mb-3 mt-3">
                    <textarea className="form-control bg-secondary-subtle" 
                    id="exampleFormControlTextarea1"  
                    placeholder={`${t("contact-Message")}`}  rows={3} value={message} onChange={(event)=>handleMessage(event)} ></textarea>
                  </div>
 
                    <div className=" mt-3 text-end">
                    <a href={`mailto:${"support@iyc.in"}?  
                                   &subject= ${subject}
                                   &body=${message}`}>  
                                 <button className="btn btn-custom1 ">{t("Submit")}</button>
                                   </a>  
                           
                    </div>
                      </div>
            </div>
            </div>
            <Footer/>
    </React.Fragment>
  )
}

export default ContactUs