import React, { useEffect, useState } from 'react'
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
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as UserReducer from "../../../Redux/User/User.reducer"
import { RootState } from '../../../Redux/store'
import { getallImageServiceAction, getallcategorysAction } from '../../../Redux/User/User.action';

const Gallery = () => {


  let dispatch=useDispatch();
  let navigate=useNavigate();
  let [errorDetails,setErrorDetails]=useState<string>("");
  let userState:UserReducer.InitialState=useSelector((store:RootState)=>{
      return store[UserReducer.userFeatureKey]
  })
  
  let [galleryTypenName,setGalleryTypenName]=useState<string>("Rozgardo_list");

  
  let {loading,errorMassage,categoryGallery,imageGallery} =userState;  
  let {t,i18n} = useTranslation();


  useEffect(()=>{
    dispatch(getallcategorysAction());
    dispatch(getallImageServiceAction({typeGallery:galleryTypenName}))
  },[])


  const handlegalleryTypenName=(event:React.ChangeEvent<HTMLSelectElement>)=>{
     setGalleryTypenName(event.target.value);
     dispatch(getallImageServiceAction({typeGallery:event.target.value}))
  }


  return (
    <React.Fragment>
        <Navbar/>
        <div className='container-fluid  ' >
            <div className='row ' style={{marginTop:"100px",marginBottom:"100px"}}>
           
            <div className="col-12  m-auto ">
            <h6 className='fw-bold fs-3 text-center'> {t("Gallery")} </h6>
            <div className=" col  d-flex  justify-content-end">
            <select className="form-control-sm" aria-label="Default select example" value={galleryTypenName} name='galleryTypenName' onChange={(event)=>handlegalleryTypenName(event)}>
               {
                categoryGallery?.map((categoryInfo,index)=>{
                     return(
                    
                   <option className='text-capitalize' key={index} value={categoryInfo}>{categoryInfo?.replace("_"," ")}</option>           
                      
                     )
                })
               }
           
         
            </select>
           </div>
          
             <div className='row mt-4'>
           
           {
            imageGallery?.map((imageurl,index)=>{
          
               return(
                <div key={index} className='col-sm-3 mb-4'>
                <div className='card shadow-sm h-100'>
                       <div className='card-body'>
                       <img src={imageurl}  className='img-fluid rounded-2' alt={"imageurl"+index} />
                       </div> 
                   </div>
                </div>
               )
              
            })
           }

          
           
           </div>
    
               
                      </div>
            </div>
            </div>
        <Footer/>
    </React.Fragment>
  )
}

export default Gallery