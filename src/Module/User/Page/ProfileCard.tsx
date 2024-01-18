import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ROZGAR_DO_NYAY_DO__Profile_en from "../../../Assets/ROZGAR_DO_NYAY_DO__Profile_en.png"
import ROZGAR_DO_NYAY_DO__Profile_hi from "../../../Assets/ROZGAR_DO_NYAY_DO__Profile_hi.png"
import html2canvas from 'html2canvas';
import { useTranslation } from 'react-i18next';
import Footer from '../../Layout/Component/Footer';
import Navbar from '../../Layout/Component/Navbar';
import avtarimage from "../../../Assets/empty-avatar.png";
import toast from 'react-hot-toast';
const ProfileCard: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);



  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      if (file.size > 10000000) {
        {
          i18n.language === "en" ? 
           toast.error("File size should be less than 10 MB")
          :
          toast.error('फ़ाइल का आकार 10 एमबी से कम होना चाहिए');          
         
        }

      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
          setImageSrc(reader.result as string);
        };
      }
    }
  };


  const htmlRef = useRef<HTMLDivElement>(null);

  const handleConvertToImage = async () => {
    if (htmlRef.current) {
      const canvas = await html2canvas(htmlRef.current);
      const dataUrl = canvas.toDataURL('image/png');

      // Create a temporary link element
      const downloadLink = document.createElement('a');
      downloadLink.href = dataUrl;
      downloadLink.download = 'html_to_image.png';

      // Append the link to the body and trigger the download
      document.body.appendChild(downloadLink);
      downloadLink.click();

      // Remove the link from the body
      document.body.removeChild(downloadLink);
    }
  };

  let {t,i18n} = useTranslation();



  return (
<>

<Navbar />
    <div className='container-fluid'>
      <div className='row '  style={{marginTop:"100px",marginBottom:"100px"}}>
          <div className='col-sm-12'>
          <h6 className='fw-bold fs-3 text-center text-uppercase'>{t('profilePara1')} </h6>
          <h6 className='fw-bold fs-3 text-center text-uppercase'>{t('profilePara2')} </h6>
          <h6 className='fw-bold fs-3 text-center text-uppercase'>{t('profilePara3')} </h6>
          </div>

          <div className='col-sm-10 m-auto mt-4'>
             <div className='row'>
                 <div className='col-md-6 d-flex justify-content-center align-items-center'>
          <div className='row card card-body shadow-sm d-flex flex-column  justify-content-center align-items-center '  style={{maxWidth:"311px"}} >
          <div className='position-relative p-0 m-0 ' ref={htmlRef} style={{maxWidth:"311px",minHeight:"350px"}} >
                       
                    
                       {
                                  imageSrc === null ? 
                                   <>
                    <img src={avtarimage} className='w-100 h-100' style={{maxWidth:"311px",minHeight:"350px"}} alt="" />
                                          <div className="position-absolute  bottom-0 start-0">
                  
                                            {
                                              i18n.language === "en" ? 
                                              
                                              <img src={ROZGAR_DO_NYAY_DO__Profile_en} className='img-fluid' alt="" />
                                              
                                              :
                                              <img src={ROZGAR_DO_NYAY_DO__Profile_hi} className='img-fluid' alt="" />
                  
                                              }
                                          </div>      
                                   
                                   </>
                                  :
                  
                                  <>
                                <img src={imageSrc} className='w-100 h-100' style={{maxWidth:"311px",minHeight:"350px"}} alt="" />
                                          <div className="position-absolute  bottom-0 start-0">
                  
                                            {
                                              i18n.language === "en" ? 
                                              
                                              <img src={ROZGAR_DO_NYAY_DO__Profile_en} className='img-fluid' alt="" />
                                              
                                              :
                                              <img src={ROZGAR_DO_NYAY_DO__Profile_hi} className='img-fluid' alt="" />
                  
                  }
                                          </div>      
                                  
                                  </>
                                }
                     
                                         
                                         
                     </div>
                     <div className='row mt-3 p-0 m-0 d-flex justify-content-between'>
                  <div className='col-7 p-0 m-0   '>
                  <input type="file" className='custom-file-input ' onChange={(event)=>handleImageChange(event)} />

                  </div>
                  <div className='col-4 p-0 m-0'>
                  <button className='btn  btn-custom btn-sm' onClick={()=>handleConvertToImage()}>Download</button>

                  </div>
               </div>   
             
          </div>
    
                         


                 </div>
                 <div className='col-md-6 d-flex flex-column justify-content-center align-content-centeri'>
                   <h6 className='fw-bold fs-6'>{t('profileDownload1')}</h6>
                  <ul className='' style={{listStyleType:"disc"}} >
                      <li className=''>{t('profileDownload2')} </li>
                      <li className=''>{t('profileDownload3')} </li>
                      <li className=''>{t('profileDownload4')} </li>
                  </ul>
                  <h6 className='fs-6'> <span className='fw-bold'>{t('profileDownload5')} </span>  {t('profileDownload6')} </h6>
                 </div>
             </div>
            </div>
      </div>
       

    </div>
    <Footer/>

   
</>
  
  );
};

export default ProfileCard;
