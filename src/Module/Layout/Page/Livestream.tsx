import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom';
import axios from 'axios';
import pam_eng from "../../../Assets/pam-eng.png"
import pam_hin from "../../../Assets/pam-hin.png"
import sticker_eng from "../../../Assets/sticker-eng.png"
import sticker_hin from "../../../Assets/sticker-hin.png"
import logo_eng from "../../../Assets/logo-eng.png"
import logo_hin from "../../../Assets/logo-hin.png"
import { useTranslation } from 'react-i18next';

const Livestream = () => {

    
  let {t,i18n} = useTranslation();


  const onButtonClick = () => {
    const pdfUrl = "bjny-pamphlet-english.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  const handleDownloadpaneng = () => {
    const pdfUrl = "bjny-pamphlet-english.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "bjny-pamphlet-english.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadpanhin = () => {
    const pdfUrl = "bjny-pamphlet-hindi.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "bjny-pamphlet-hindi.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const handleDownloadstickereng = () => {
    const pdfUrl = "bjny-stickers-eng.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadstickerhin = () => {
    const pdfUrl = "bjny-stickers-hin.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  const handleDownloadlogoen = () => {
    const pdfUrl = "bjny-logo-english.jpg";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "bjny-logo-english.jpg"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadlogohin = () => {
    const pdfUrl = "bjny-logo-hindi.jpg";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "bjny-logo-hindi.jpg"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


    return (
      <React.Fragment>
            
            <Navbar/>
            <div className='container-fluid ' style={{marginBottom:"100px"}}>
            <div className='row '>
         <div className='col-sm-12 w-100 p-0 m-0 d-flex flex-column  justify-content-center align-items-start ' style={{height:"500px"}}>
         <iframe className='w-100 h-100' src="https://www.youtube.com/embed/4Uk2ijhzn28" title="LIVE: Bharat Jodo Nyay Yatra" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
     
         </div>
            </div>
             <div className='row mt-4'>
               <div className='col-sm-10 m-auto'>
               <h6 className='fw-bold fs-3 text-center text-uppercase'>   {t("resources")}</h6>
                
                  <div className='row mt-4'>
          {/* i18n.language === 'hi' */}
          

                     <div className='col-sm-4'>

{/*    डाउनलोड पैम्फलेट    */}

            {
              i18n.language === 'en' ?  
               
              <>
              <div className='d-flex flex-column justify-content-center align-items-center'>

              <img src={pam_eng} className='img-fluid' alt="pam_eng" />
               <button className='btn btn-custom mt-4' onClick={handleDownloadpaneng}>
      Download PDF
    </button>
              </div>
          
              </>:<>
              
              <div className='d-flex flex-column justify-content-center align-items-center'>

<img src={pam_hin} className='img-fluid' alt="pam_eng" />
 <button className='btn btn-custom mt-4' onClick={handleDownloadpanhin}>
 डाउनलोड पैम्फलेट    
</button>
</div>

              </>
            }




       

                  
                     </div>

                     <div className='col-sm-4'>

{/*    डाउनलोड पैम्फलेट    */}

            {
              i18n.language === 'en' ?  
               
              <>
              <div className='d-flex flex-column justify-content-center align-items-center'>

              <img src={sticker_eng} className='img-fluid' alt="sticker_eng" />
               <button className='btn btn-custom mt-4' onClick={handleDownloadstickereng}>
               Download Stickers    </button>
              </div>
          
              </>:<>
              
              <div className='d-flex flex-column justify-content-center align-items-center'>

<img src={sticker_hin} className='img-fluid' alt="sticker_hin" />
 <button className='btn btn-custom mt-4' onClick={handleDownloadstickerhin}>
 डाउनलोड स्टिकर 
</button>
</div>

              </>
            }

</div>
<div className='col-sm-4'>

{
              i18n.language === 'en' ?  
               
              <>
              <div className='d-flex flex-column justify-content-center align-items-center'>

              <img src={logo_eng} className='img-fluid' alt="sticker_eng" />
               <button className='btn btn-custom mt-4' onClick={handleDownloadlogoen}>
               Download Logo    </button>
              </div>
          
              </>:<>
              
              <div className='d-flex flex-column justify-content-center align-items-center'>

<img src={logo_hin} className='img-fluid' alt="sticker_hin" />
 <button className='btn btn-custom mt-4' onClick={handleDownloadlogohin}>
 डाउनलोड प्रतीक चिन्ह
</button>
</div>

              </>
            }


                  
                     </div>
                  </div>
               </div>
             </div>
            </div>
        <Footer/>
      </React.Fragment>
  )
}

export default Livestream