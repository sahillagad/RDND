import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { useTranslation } from 'react-i18next';
import image from "../../../Assets/Carousel_Image (1).jpeg";
import image1 from "../../../Assets/Carousel_Image (1).jpg";
import image2 from "../../../Assets/Carousel_Image (2).jpg";
import image3 from "../../../Assets/Carousel_Image (3).jpg";
import image4 from "../../../Assets/Carousel_Image (4).jpg";
import image5 from "../../../Assets/Carousel_Image (5).jpg";
import image6 from "../../../Assets/Carousel_Image (6).jpg";


const Gallery = () => {
    let {t} = useTranslation();

  return (
    <React.Fragment>
        <Navbar/>
        <div className='container-fluid  ' >
            <div className='row ' style={{marginTop:"100px",marginBottom:"100px"}}>
            <div className="col-12  m-auto ">
            <h6 className='fw-bold fs-3 text-center'> {t("Gallery")} </h6>
           <div className='row mt-4'>
           
             <div className='col-sm-3 mb-4'>
             <div className='card shadow-sm h-100'>
                    <div className='card-body'>
                    <img src={image2}  className='img-fluid rounded-2' alt="" />
                    </div> 
                </div>
             </div>
             <div className='col-sm-3 mb-4'>
             <div className='card shadow-sm h-100'>
                    <div className='card-body'>
                    <img src={image3}  className='img-fluid rounded-2' alt="" />
                    </div> 
                </div>
             </div>
             <div className='col-sm-3 mb-4'>
             <div className='card  shadow-sm h-100'>
                    <div className='card-body'>
                    <img src={image4}  className='img-fluid rounded-2' alt="" />
                    </div> 
                </div>
             </div>
             <div className='col-sm-3 mb-4'>
             <div className='card shadow-sm h-100'>
                    <div className='card-body'>
                    <img src={image5}  className='img-fluid rounded-2' alt="" />
                    </div> 
                </div>
             </div>
             <div className='col-sm-3 mb-4'>
             <div className='card h-100'>
                    <div className='card-body'>
                    <img src={image6}  className='img-fluid rounded-2' alt="" />
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

export default Gallery