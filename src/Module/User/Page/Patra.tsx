
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../Layout/Component/Navbar'
import Footer from '../../Layout/Component/Footer'
import Letter1 from '../../UI/Page/Letter1'
import { Letter2 } from '../../UI/Page/Letter2'
import Letter4 from '../../UI/Page/Letter4'
import Letter3 from '../../UI/Page/Letter3'
import IYC_logo from "../../../Assets/IYC_logo2.jpg"
import Indian_National_Congress_hand_logo from "../../../Assets/congress-logo-png.png"
import rozgar_nyay_patra_image1 from "../../../Assets/rozgar_nyay_patra_image1.png"
import QrCode from "../../../Assets/QRCodeImage.png"
import congresslogo from "../../../Assets/congress-logo.jpg"
import BharatJODOYatra1 from "../../../Assets/BharatJODOYatra1.png"
import Signature_of_Rahul_Gandhi from "../../../Assets/Signature_of_Rahul_Gandhi.png"
import logoIYC from "../../../Assets/IYC_logo1.jpg"
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as UserReducer from "../../../Redux/User/User.reducer"
import { useSelector } from 'react-redux'
import { RootState } from '../../../Redux/store'
import { assemblyAction, createUserAction, getOTPAction, lokSabhaAction, validateOTPAction } from '../../../Redux/User/User.action'
import toast from 'react-hot-toast'
import OTPInput from 'react-otp-input'
import { useReactToPrint } from 'react-to-print'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { image } from 'html2canvas/dist/types/css/types/image'
import '../../../App.css'; 
import { RingLoader } from 'react-spinners'
import spinner2 from "../../../Assets/spinner2.gif"




const Patra = () => {

      
  let dispatch=useDispatch();
  let navigate=useNavigate();
  let [errorDetails,setErrorDetails]=useState<string>("");
  let userState:UserReducer.InitialState=useSelector((store:RootState)=>{
      return store[UserReducer.userFeatureKey]
  })
  

  
  let {loading,errorMassage,stateList,assemblyList,lokSabhaList,user,successInfo,errorInfo,createInfo} =userState;  
  let {t,i18n} = useTranslation();


  useEffect(()=>{

     return(()=>{
      dispatch({
        type:`${UserReducer.handleEmptyUserInput}`,
      
      })
      
     })
  },[])


  const handleUserStateInput=(event:React.ChangeEvent<HTMLInputElement|HTMLSelectElement>)=>{
   dispatch({
      type:`${UserReducer.handleUserInput}`,
      payload:{"event":event}
    })


    if(event.target.name === "STATE_CODE"){
      dispatch({
        type:`${UserReducer.handleEmptyParliamentAssemblyCodeInput}`,
      })


      dispatch(lokSabhaAction({"state":event.target.value}))
    
    }
   else if(event.target.name === "PARLIAMENT_CODE" && user?.STATE_CODE !== ""){
 
    dispatch({
      type:`${UserReducer.handleEmptyParliamentCodeInput}`,
    })




      dispatch(assemblyAction({state:user?.STATE_CODE,lokSabha:event.target.value}))
   }


  }


  const handleUserAspirationStateInput=(event:React.ChangeEvent<HTMLInputElement|HTMLSelectElement>)=>{
    dispatch({
       type:`${UserReducer.handleUserAspirationInput}`,
       payload:{"event":event}
     })
   }

   let [time,setTime]=useState<number>(60)

   useEffect(()=>{


    

   },[])


   const handleResendOtpTime=(time:number)=>{
     
    let myInterval=setInterval(() => {
    
        if(time>=1){
            setTime(time=time-1)
        }
        else{
            clearInterval(myInterval);
           
        }
       }, 1000);
       
 }


  
  
  const handleUserVolunteerStateInput=(event:React.ChangeEvent<HTMLInputElement|HTMLSelectElement>)=>{
    dispatch({
       type:`${UserReducer.handleUserVolunteerInput}`,
       payload:{"event":event}
     })
   }


   const [otp, setOtp] = useState('');
  // let [mobileNumberValidate,setMobileNumberValidate]=useState<boolean>(false);
  let [submitBtnPress,setSubmitBtnPress]=useState<boolean>(false);
  let [optSendMobile,setOptSendMobile]=useState(false)
let [userCreated,setUserCreated]=useState(false);
const [DownloadSpinner, setDownloadSpinner] = useState(false);

   const handleCraeteUserState=(event:React.FormEvent<HTMLFormElement>)=>{
    event?.preventDefault()
    setSubmitBtnPress(true)
   
    if(user?.NAME === undefined || user?.NAME === "" ||
     user?.MOBILE ===undefined || user?.MOBILE === "" ||
     user?.AGE ===undefined ||   user?.AGE === "" ||  
     user?.GENDER ===undefined || user?.GENDER === "" ||
     user?.STATE_CODE ===undefined || user?.STATE_CODE === "" ||
     user?.PARLIAMENT_CODE ===undefined || user?.PARLIAMENT_CODE === "" ||
     user?.ASSEMBLY_CODE ===undefined  || user?.ASSEMBLY_CODE === ""
     ){
     
      i18n.language === "en" ?
      setErrorDetails("Please Enter Mandatory Field") 
       : setErrorDetails("कृपया अनिवार्य फ़ील्ड दर्ज करें")
   

      return 
   }
   else{

    if(otp !== ""){
      if(otp?.length === 6){
        let OTPVerificationCheck=validateOTP(otp);
        if(OTPVerificationCheck === true){
          dispatch(validateOTPAction({"OTPValidation":{ "number": user?.MOBILE,"otp": otp}})).then((result:any) => {
            if(result?.payload?.success){
             

              dispatch(createUserAction({"user":{...user,"ROZGAAR_NYAY_CODE":otp}})).then((result:any) => {
                setSubmitBtnPress(false)
                setUserCreated(true)
         
            })

        
            }
            
          })        
        }  
          else{

              
                i18n.language === "en" ?
                
                setErrorDetails("Please Enter valid Rozgaar Nyay Code")
                :
                setErrorDetails("कृपया वैध रोज़गार न्याय कोड दर्ज करें")
          
                
              

            
          }
       }
      else{
        i18n.language === "en" ?

        setErrorDetails("Please Enter valid Rozgaar Nyay Code")
          
        :
        setErrorDetails("कृपया वैध रोज़गार न्याय कोड दर्ज करें")
        
        
      }
      }
    else{

      i18n.language === "en" ?
      setErrorDetails("Please Enter 6 digits Rozgaar Nyay Code")
   
      :
      setErrorDetails("कृपया 6 अंकों का रोज़गार न्याय कोड दर्ज करें")
      
    }



   } 
   }


      // validate mobile number input 
      function validateIndianMobileNumber(phoneNumber:string) {
        var regex = /^[6789]\d{9}$/;
        phoneNumber = phoneNumber.replace(/\D/g, '');  
        let ans= regex.test(phoneNumber);
        return ans
      }
    

   const handleGetOtp=()=>{
    
     if(user?.MOBILE !== "" && user?.MOBILE !== undefined){
         if(user?.MOBILE?.length === 10){
          let mobileNumberCheck=validateIndianMobileNumber(user?.MOBILE);
            if(mobileNumberCheck === true){
              dispatch(getOTPAction({"number":user?.MOBILE})).then((result:any) => {
                if(result?.payload?.success){       
                  setTime(60)
                  handleResendOtpTime(60)
                  setOptSendMobile(true);
                 }

              })
            } 
            else{
              i18n.language === "en" ? setErrorDetails("Please enter valid mobile number") : setErrorDetails("कृपया वैध मोबाइल नंबर दर्ज करें")
            }  
         }
         else{

          i18n.language === "en" ? setErrorDetails("Please enter valid mobile number") : setErrorDetails("कृपया वैध मोबाइल नंबर दर्ज करें")
         }
     }
     else{
      i18n.language === "en" ?
      setErrorDetails("Please Enter 10 digits Mobile Number")
     
       :
       setErrorDetails("कृपया 10 अंकों का मोबाइल नंबर दर्ज करें")
      }
  
     

   }


   function validateOTP(otp: string): boolean {
    // Check if the OTP is a 6-digit number
    const otpRegex = /^\d{6}$/;
    
    return otpRegex.test(otp);
  }


  //  const handleVerifyOtp=()=>{
  //   if(otp !== ""){
  //     if(otp?.length === 6){
  //       let OTPVerificationCheck=validateOTP(otp);
  //       if(OTPVerificationCheck === true){
  //         dispatch(validateOTPAction({"OTPValidation":{ "number": user?.MOBILE,"otp": otp}})).then((result:any) => {
  //           if(result?.payload?.success){
  //             setMobileNumberValidate(true)
  //           }
  //         })        
  //       }  
  //         else{
  //           toast.error("Please Enter valid Rozgaar Nyay Code")
  //         }
  //      }
  //     else{
  //       toast.error("Please Enter valid Rozgaar Nyay Code")
  //     }
  //     }
  //   else{
  //     toast.error("Please Enter 6 digits Rozgaar Nyay Code")
  //   }
  //  }


   const handleResendOtp=()=>{
   
    // setOptSendMobile(false)
    setOtp("");  
    if(user?.MOBILE !== ""){
      if(user?.MOBILE?.length === 10){
       let mobileNumberCheck=validateIndianMobileNumber(user?.MOBILE);
         if(mobileNumberCheck === true){
           dispatch(getOTPAction({"number":user?.MOBILE})).then((result:any) => {
             if(result?.payload?.success){       
              setTime(60)
              handleResendOtpTime(60)
               setOptSendMobile(true);
              }

           })
         } 
         else{
          i18n.language === "en" ? setErrorDetails("Please enter valid mobile number") : setErrorDetails("कृपया वैध मोबाइल नंबर दर्ज करें")
         }  
      }
      else{
        i18n.language === "en" ? setErrorDetails("Please enter valid mobile number") : setErrorDetails("कृपया वैध मोबाइल नंबर दर्ज करें")
      }
  }
  else{
    i18n.language === "en" ?
    setErrorDetails("Please Enter 10 digits Mobile Number")
  
    :
    setErrorDetails("कृपया 10 अंकों का मोबाइल नंबर दर्ज करें")
   
  }
   }

   

  

  const componentPDF = useRef<HTMLDivElement | null>(null);

  const generatePDF = async () => {

    setDownloadSpinner(true);

    if (componentPDF.current) {
      try {
        // Capture HTML content to an image
        const canvas = await html2canvas(componentPDF.current, { scale: 2 });
        const imageData = canvas.toDataURL('image/png');
  
        // Calculate the width and height of the captured image
        const imageWidth = canvas.width;
        const imageHeight = canvas.height;
  
        // Create a PDF document with the size of the captured image
        const pdf = new jsPDF('p', 'pt', [imageWidth, imageHeight]);
  
        // Add the image to the PDF
        pdf.addImage(imageData, 'PNG', 0, 0, imageWidth, imageHeight);
  
        // Save or open the PDF
        pdf.save('ROZGAR_NYAY_PATRA.pdf');
      } catch (error) {
        console.error('Error generating PDF:', error);
      }finally {
        setDownloadSpinner(false);

        
    dispatch({
      type:`${UserReducer.handleCreateInfoEmpty}`,
    })

    setOtp("")


    dispatch({
      type:`${UserReducer.handleEmptyUserInput}`,
    })

      }
    }
  };



 




   const handleErrorDetails=()=>{
    setErrorDetails("")
   }


   const handleErrorInfoStateEmpty=()=>{
    dispatch({
      type:`${UserReducer.handleErrorInfoEmpty}`,
    })
   }

   const handleSuccessInfoStateEmpty=()=>{
    dispatch({
      type:`${UserReducer.handleSuccessInfoEmpty}`,
    })
   }

  

  const handlrCreateInfoStateEmpty=()=>{
    dispatch({
      type:`${UserReducer.handleCreateInfoEmpty}`,
    })

    setOtp("")


    dispatch({
      type:`${UserReducer.handleEmptyUserInput}`,
    })
  }

  
  


  return (
    <>


    {
      (successInfo.length !== 0 && successInfo !== "" ) && <>
       <div className="modal d-block " tabIndex={-1} role="dialog" data-backdrop="static"  data-keyboard="false">
       <div className="modal-dialog  " role="document">
        
         <div className="modal-content shadow-lg ">
         <div className='modal-header bg-success p-1'>
</div>  
           <div className="modal-body border-0">
           <h4 className='fs-4  '><i className="bi bi-check-circle me-1 text-success"></i> <span className=''>Success</span> </h4>
           <small className='text-muted '>{successInfo}</small>
           </div>
           <div className="modal-footer border-0">
        
             <button type="button" className="btn btn-sm btn-secondary" onClick={()=>{handleSuccessInfoStateEmpty()}} >
               OK
             </button>
           </div>
         </div>
       </div>
     </div>
      </>
    }

   {
    (createInfo.length !== 0 && createInfo !== "" ) && <>
<div className="modal d-block " tabIndex={-1} role="dialog" data-backdrop="static"  data-keyboard="false">
       <div className="modal-dialog  " role="document">
        
         <div className="modal-content shadow-lg ">
         <div className='modal-header bg-warning p-1'>
</div>  
           <div className="modal-body border-0">
           <h4 className='fs-4  '><i className="bi bi-award-fill me-1 text-warning"></i> <span className=''>Congratulations</span> </h4>
           <small className='text-muted '>{createInfo}</small>
           </div>
           <div className="modal-footer border-0">
        
             <button type="button" className="btn btn-sm btn-secondary" onClick={()=>{handlrCreateInfoStateEmpty()}} >
               OK
             </button>
             <button className='btn btn-warning btn-sm text-white'  onClick={()=>generatePDF()}>DOWNLOAD ROZGAR NAYA PATRA</button>
           </div>
         </div>
       </div>
     </div>    
    
    </>
   }



  {
      (errorInfo.length !== 0 && errorInfo !== "" ) && <>
       <div className="modal d-block " tabIndex={-1} role="dialog" data-backdrop="static"  data-keyboard="false">
       <div className="modal-dialog " role="document">
        
         <div className="modal-content shadow-lg ">
         <div className='modal-header bg-danger p-1'>
</div>  
           <div className="modal-body border-0">
           <h4 className='fs-4  '><i className="bi bi-exclamation-triangle me-1 text-danger"></i> <span className=''>Error</span> </h4>
           <small className='text-muted '>{errorInfo}</small>
           </div>
           <div className="modal-footer border-0">
        
             <button type="button" className="btn btn-sm btn-secondary" onClick={()=>{handleErrorInfoStateEmpty()}} >
               OK
             </button>
           </div>
         </div>
       </div>
     </div>
      </>
    }

  {
    ( errorDetails.length !== 0 &&  errorDetails !== "" ) &&  <>
      <div className="modal d-block " tabIndex={-1} role="dialog" data-backdrop="static"  data-keyboard="false">
       <div className="modal-dialog " role="document">
        
         <div className="modal-content shadow-lg ">
         <div className='modal-header bg-danger p-1'>
</div>  
           <div className="modal-body border-0">
           <h4 className='fs-4  '><i className="bi bi-exclamation-triangle me-1 text-danger"></i> <span className=''>Error</span> </h4>
           <small className='text-muted '>{errorDetails}</small>
           </div>
           <div className="modal-footer border-0">
        
             <button type="button" className="btn btn-sm btn-secondary" onClick={()=>{handleErrorDetails()}} >
               OK
             </button>
           </div>
         </div>
       </div>
     </div>

    </>
  }


{DownloadSpinner && (
      
<div className="loading-box d-flex justify-content-center align-items-center">
<img src={spinner2} className='loading border-0' alt="" />

</div>
    
      )}






  {/* <pre>{JSON.stringify(user)}</pre> */}
       <div className='container-fluid  mt-4' ref={componentPDF}>

    

       <form className='row  needs-validation'   onSubmit={(event)=>  handleCraeteUserState(event)}>

            <div className='col-sm-12 center-content  ' style={{ pageBreakAfter: 'always' }}>
            <div className=' h-100 w-100 d-flex justify-content-center align-items-center'>
    <div className="container envelope  pt-0 pb-0">
        <div className='row  d-flex justify-content-between'>
          <div className='col-3  pt-2 pb-2  col-sm-3 col-lg-2  d-flex justify-content-center align-items-center'>
           <img src={IYC_logo} className='img-fluid imgh' alt="" />
          </div>
          <div className='col-6 col-sm-6 col-lg-6    d-flex justify-content-center align-items-center rounded-bottom-3 bg-custom' >
          <div  className=' fw-bolder   fontsize text-center pt-2 pb-2 fs-2 text-white ' > 
            <span className='text-uppercase'> {t('patra-title')}</span>
          </div>
          </div>
         <div className='col-3 col-sm-3  pt-2 pb-2  col-lg-2 d-flex justify-content-center align-items-center'>

          
         <img src={Indian_National_Congress_hand_logo} className='img-fluid imgh'  alt="" />

         </div>

        </div>
        <div className='row mt-3 '>
             <div className='col-12 d-flex justify-content-center align-content-center'>
      <img src={rozgar_nyay_patra_image1} className='img-fluid' alt="" />
             </div>
        </div>
        <div className='row bg-custom  pt-4 pb-4 d-flex justify-content-between '>
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
                  <h3 className='fs-3'>8860812345</h3>
                </div>
            </div>
           </div>
        </div>
  </div>
    </div>
            </div>

            <div className='col-sm-12  mt-4' style={{ pageBreakAfter: 'always' }}>
            <div className=' h-100 w-100 d-flex justify-content-center align-items-center'>
      <div className="container envelope ">
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

          <small className='text-muted'><span className='text-danger'>*</span> {t('Mandatory-Field')} </small>



  <label htmlFor="inputName" className="col-lg-1 col-form-label fw-bolder fs-6  text-custom mt-2 ">{t('Patra-Name')}<span className='text-danger'>*</span> </label>
    <div className="col-lg-11">
      
    <input type="text"  
  
className={`form-control ps-0  rounded-0 shadow-none  mb-3   mb-3   ${ (submitBtnPress === true && (user?.NAME=== ""|| user?.NAME === undefined) ) ? "text-danger border-dotted-custom1 is-invalid " :"border-custom1" }`} 
value={user?.NAME}  
name="NAME" 
onChange={(event)=>handleUserStateInput(event)} required id="inputName" aria-describedby="helpId" placeholder="" />

      {/* <input type="text" className="form-control ps-0 border-custom1 rounded-0 shadow-none  mb-3   mb-3" value={user?.NAME}  name="NAME" onChange={(event)=>handleUserStateInput(event)} required id="inputName" aria-describedby="helpId" placeholder="" /> */}

    </div>
    <label htmlFor="inputAge" className="col-lg-1 col-form-label fw-bolder fs-6  text-custom mt-2">{t('Patra-Age')}<span className='text-danger'>*</span>  </label>
    <div className="col-lg-3">
      <input type="number"  className={`form-control ps-0  rounded-0 shadow-none  mb-3   mb-3   ${ (submitBtnPress === true &&  (user?.AGE=== ""|| user?.AGE === undefined) ) ? "text-danger border-dotted-custom1 is-invalid " :"border-custom1" }`} value={user?.AGE}  name="AGE" onChange={(event)=>handleUserStateInput(event)} required id="inputAge" aria-describedby="helpId" placeholder="" />
    </div>
    <label htmlFor="inputGender" className="col-lg-1 col-form-label fw-bolder fs-6  text-custom   mt-2" >{t('Patra-gender')}<span className='text-danger'>*</span> </label>
    <div className="col-lg-3   mb-3 ">
   
      <select
                      
                            id="inputCategory"
                            className={`form-select  shadow-none rounded-0 ${ (submitBtnPress === true &&  (user?.GENDER === ""|| user?.GENDER === undefined)  ) ? "text-danger border-dotted-custom1 is-invalid " :"border-custom1" }`}  name="GENDER" value={user?.GENDER} onChange={(event)=>handleUserStateInput(event)}
                          >
                            <option className="fw-bold" value={""}>{t('Select-Menu')}</option>
                            <option value={"Male"}>Male</option>
                            <option value={"Female"}>Female</option>
                            <option value={"Other"}>Other</option>
                          </select>
                      
    
    </div>
    <label htmlFor="inputCategory" className="col-lg-1 col-form-label fw-bolder fs-6  text-custom  mt-2">{t('Patra-Category')} </label>
    <div className="col-lg-3   mb-3 ">    
      <select 
                            className="form-select form-select-custom  shadow-none rounded-0 "
                            id="inputCategory"
                            name="CATEGORY"
                            value={user?.CATEGORY}
                            onChange={(event)=>handleUserStateInput(event)} 
                          >
                            {/* {t('Select-Category')} */}
                            <option className="fw-bold"> {t('Select-Menu')}</option>
                            <option value={"GEN"}>GEN</option>
                            <option value={"OBC"}>OBC</option>
                            <option value={"SC"}>SC</option>
                            <option value={"ST"}>ST</option>
                            <option value={"MINORITY"}>Minority</option>
                            <option value={"OTHER"}>Other</option>
                          </select>
                      

    </div>



    <label htmlFor="inputMobile" className="col-lg-1 col-form-label fw-bolder fs-6  text-custom  mt-2">{t('Patra-Mobile-No')}<span className='text-danger'>*</span> </label>
    <div className="col-lg-5">

      <input type="text" 
         className={`form-control ps-0  rounded-0 shadow-none  mb-3   mb-3   ${ (submitBtnPress === true && (user?.MOBILE=== "" || user?.MOBILE === undefined) ) ? "text-danger border-dotted-custom1 is-invalid " :"border-custom1" }`}
      
      maxLength={10} minLength={10} value={user?.MOBILE}  name="MOBILE" onChange={(event)=>handleUserStateInput(event)} id="inputMobile" required aria-describedby="helpId" placeholder="" />
    </div>


  

    <label htmlFor="inputEmail" className=" col-lg-1 col-form-label fw-bolder fs-6  text-custom  mt-2">{t('Patra-Email')} </label>
    <div className="col-lg-5">
      <input type="email"  className="form-control ps-0 border-custom1 rounded-0 shadow-none  mb-3   mb-3" value={user?.EMAIL}  name="EMAIL" onChange={(event)=>handleUserStateInput(event)} id="inputEmail" aria-describedby="helpId" placeholder="" />
    </div>



    <label htmlFor="inputVoterId" className=" col-lg-1 col-form-label fw-bolder fs-6  text-custom  mt-2">{t('Patra-VoterId')} </label>
    <div className="col-lg-5">
      <input type="text"   className="form-control ps-0 border-custom1 rounded-0 shadow-none  mb-3   mb-3" value={user?.VOTER_ID}  name="VOTER_ID" onChange={(event)=>handleUserStateInput(event)} id="inputVoterId" aria-describedby="helpId" placeholder="" />
    </div>

 {/*Patra-State  */}
 <label htmlFor="inputState "  className=" col-lg-1 col-form-label fw-bolder fs-6  text-custom  mt-2">{t('Patra-State')}<span className='text-danger'>*</span>  </label>
    <div className="col-lg-5   mb-3 ">

    <select

    required
                            className={`form-select shadow-none rounded-0
                             ${ (submitBtnPress === true &&  (user?.STATE_CODE=== "" || user?.STATE_CODE === undefined)  ) ? "form-select-custom1  is-invalid " :"form-select-custom" }`}
                            id="inputState"
                            name="STATE_CODE"
                            value={user?.STATE_CODE}
                            onChange={(event)=>{
                              
                              handleUserStateInput(event)
                              
                            }}

                          >
                            {/* {t('Select-Category')} */}
                            <option className="fw-bold" value={""}> {t('Select-Menu')}</option>
                         {
                          stateList?.map((stateInfo,index)=>{
                              return(
                                <option key={index} value={stateInfo.code}>{stateInfo.name}</option>
                              )
                          })
                         }

                        

                          </select>

      {/* <input type="text" className="form-control ps-0 border-custom1 rounded-0 shadow-none  mb-3   mb-3" name="" id="inputState" aria-describedby="helpId" placeholder="" /> */}
    </div>
 
         <label htmlFor="inputLokSabha" className="col-lg-1 col-form-label fw-bolder fs-6  text-custom  ">{t('Patra-Parliamentary-Constituency')}<span className='text-danger'>*</span>  </label>
    <div className="col-lg-11   mb-3 ">
      <select 
                            className={`form-select ${ (submitBtnPress === true &&   (user?.PARLIAMENT_CODE=== "" || user?.PARLIAMENT_CODE === undefined) ) ? "form-select-custom1  is-invalid " :"form-select-custom" } shadow-none rounded-0`}
                            id="inputLokSabha"
                            name="PARLIAMENT_CODE"
                            value={user?.PARLIAMENT_CODE}
                            onChange={(event)=>handleUserStateInput(event)} 
                           required
                          >
                           
                            <option className="fw-bold" value={""}> {t('Select-Menu')}</option>
                         {
                          lokSabhaList?.map((lokSabhaInfo,index)=>{
                              return(
                                <option key={index} value={lokSabhaInfo.LS_CODE}>{lokSabhaInfo.LS_NAME}</option>

                              )
                          })
                         }

                        

                          </select>
    
    </div>
    
 


    
<label htmlFor="inputVidhanSabha" className="col-lg-1 col-form-label fw-bolder fs-6  text-custom  ">{t('Patra-Assembly-Constituency')}<span className='text-danger'>*</span>  </label>
    <div className="col-lg-11   mb-3 ">

    <select 
                            className={`form-select ${ (submitBtnPress === true && (user?.ASSEMBLY_CODE=== "" || user?.ASSEMBLY_CODE === undefined) ) ? "form-select-custom1  is-invalid " :"form-select-custom" }  shadow-none rounded-0`}
                            id="inputLokSabha"
                            name="ASSEMBLY_CODE"
                            value={user?.ASSEMBLY_CODE}
                            onChange={(event)=>handleUserStateInput(event)} 
                            required
                          >
                            
                            <option className="fw-bold" value={""}> {t('Select-Menu')}</option>
                         {
                          assemblyList?.map((assemblyInfo,index)=>{
                              return(
                                <option key={index} value={assemblyInfo.AS_CODE}>{assemblyInfo.AS_NAME}</option>

                              )
                          })
                         }
                          </select>
    </div>



 <label htmlFor="inputEducation" className="col-lg-2 col-form-label fw-bolder fs-6  text-custom  ">{t('Patra-Highest-Educational-Qualification')} </label>
    <div className="col-lg-10   mb-3 ">


    <select               className={`form-select form-select-custom  shadow-none rounded-0`}
                            id="inputEducation"
                            name="HIGHEST_EDUCATIONAL_QUALIFICATION"
                            value={user?.HIGHEST_EDUCATIONAL_QUALIFICATION}
                            onChange={(event)=>handleUserStateInput(event)} 
                          >

         <option className="fw-bold " value={""}> {t('Select-Menu')}</option>
    <option value="Less_Than_10th">
                              Less Than 10th
                            </option>
                            <option value="10th_Pass">10th Pass</option>
                            <option value="Diploma_ITI">Diploma / ITI</option>
                            <option value="Graduate">Graduate</option>
                            <option value="Post_Graduate">Post Graduate</option>
                            <option value="PHD_And_Above">PHD and Above</option>
                            <option value="Other">Other</option>
                          </select>

    </div>
 

  </div>
    </div>
      </div>
                 </div>




                 <div className='col-sm-12 mt-4 ' style={{ pageBreakAfter: 'always' }} >
                 <div className=' h-100 w-100 d-flex justify-content-center align-items-center'>
    <div className="container envelope">
        <div className='row  '>
   <div className='col-md-12 '>
       <h6 className='text-custom fs-6 fw-bolder'> {t('Patra-Select-Aspiring')}</h6>
      </div>
      </div>
      <div className='row mt-2'>
        <div className='col-sm-4'>
        <div className="form-check">
           <input className="form-check-input " 
         
            type="checkbox" 
            id="flexCheckDefault"  
            name="Armed_Services"
            checked={user?.ASPIRATION?.Armed_Services}
            onChange={(event)=>handleUserAspirationStateInput(event)} 
           />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault">{t('Armed-Services')} </label>
       </div>
       <div className="form-check">
           <input className="form-check-input" 
         
           type="checkbox"  id="flexCheckDefault1" 
           name="Civil_Services"
           checked={user?.ASPIRATION?.Civil_Services}
           onChange={(event)=>handleUserAspirationStateInput(event)} 
           />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault1">{t('Civil-Services')} </label>
       </div>
       <div className="form-check">
           <input className="form-check-input" type="checkbox" 
         
            name="Teaching"
            checked={user?.ASPIRATION?.Teaching}
            onChange={(event)=>handleUserAspirationStateInput(event)} 
           id="flexCheckDefault2" />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault2">{t('Teaching')}  </label>
       </div>
       <div className="form-check">
           <input className="form-check-input" type="checkbox"  id="flexCheckDefault3"
       
                  name="Police_officer"
                  checked={user?.ASPIRATION?.Police_officer}
                  onChange={(event)=>handleUserAspirationStateInput(event)} 
           />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault3">{t('Police-officer')}   </label>
       </div>
       </div>
       <div className='col-sm-4'>
   
       <div className="form-check">
           <input className="form-check-input" type="checkbox"   id="flexCheckDefault4" 
             name="Railway_Bank"
             checked={user?.ASPIRATION?.Railway_Bank}
             onChange={(event)=>handleUserAspirationStateInput(event)} 
           />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault4">{t('Railway-Bank')}   </label>
       </div>
       <div className="form-check">
           <input className="form-check-input"   type="checkbox"  id="flexCheckDefault5"
             name="Lekhpal_Patwari_Tehsildar"
             checked={user?.ASPIRATION?.Lekhpal_Patwari_Tehsildar}
             onChange={(event)=>handleUserAspirationStateInput(event)} 
           />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault5">{t('Lekhpal-Patwari-Tehsildar')}   </label>
       </div>
       <div className="form-check">
           <input className="form-check-input"   type="checkbox"  id="flexCheckDefault6"
           name="Nurse_Asha_Anganwadi"
           checked={user?.ASPIRATION?.Nurse_Asha_Anganwadi}
           onChange={(event)=>handleUserAspirationStateInput(event)} 
           />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault6">{t('Nurse-Asha-Anganwadi')}  </label>
       </div>
       <div className="form-check">
           <input className="form-check-input"   type="checkbox" id="flexCheckDefault7" 
              name="Doctor_Engineer_Lawyer"
              checked={user?.ASPIRATION?.Doctor_Engineer_Lawyer}
              onChange={(event)=>handleUserAspirationStateInput(event)} 
           />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault7">{t('Doctor-Engineer-Lawyer')}    </label>
       </div>
   
    
        </div>
        <div className='col-sm-4'>
      
       
        <div className="form-check">
           <input className="form-check-input"   type="checkbox"  id="flexCheckDefault8" 
              name="Accountant_Marketing_Data_Entry"
              checked={user?.ASPIRATION?.Accountant_Marketing_Data_Entry}
              onChange={(event)=>handleUserAspirationStateInput(event)} 
           />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault8">{t('Accountant-Marketing-Data-Entry')}     </label>
       </div>
       <div className="form-check">
           <input className="form-check-input"   type="checkbox"  id="flexCheckDefault9"
           name="Start_up_business"
           checked={user?.ASPIRATION?.Start_up_business}
           onChange={(event)=>handleUserAspirationStateInput(event)} 

           />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault9">{t('Start-up-business')}     </label>
       </div>
       <div className="form-check">
           <input className="form-check-input" type="checkbox"    id="flexCheckDefault10" 
              name="Others"
              checked={user?.ASPIRATION?.Others}
              onChange={(event)=>handleUserAspirationStateInput(event)} 
           />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault10">{t('Others')}   </label>
       </div>
  </div>
      </div>
      <div className='row mt-3'>
       <div className='col-sm-12'>
        {/* readyVolunteer */}
        <h6 className='text-custom fs-6 fw-bolder'>{t('readyVolunteer')} </h6>
       <div className="form-check mt-2">
           <input className="form-check-input"
            type="checkbox"
              name="VOLUNTEER"
        
            checked={user?.VOLUNTEER}
            onChange={(event)=>handleUserVolunteerStateInput(event)}   id="flexCheckDefault23" />
           <label className="form-check-label text-custom" htmlFor="flexCheckDefault23">  {t('Patra-volunteer-concent')} </label>
       </div>
       </div>
      </div>
      <div className='row  mt-3'>
   <div className='col-md-12 '>
    <div>
    <h6 className='text-custom fs-6 fw-bolder'>{t('Patra-Rozgaar-Nyay-Code')} </h6>

<div className=''>

<div className=''>

<OTPInput
  value={otp}

  onChange={setOtp}
  inputStyle={{width:"35px",height:"35px",marginRight:"4px",marginTop:"5px",border:"1px solid #115f80"}}
  numInputs={6}
  renderSeparator={<span> </span>}
  renderInput={(props) => <input {...props} />}
/>


</div>
 
   <div className='mt-2'>

     {

optSendMobile=== false ? 
 <>
 
 <button className='btn btn-custom btn-sm ' type="button" onClick={()=>{handleGetOtp()}}>{t('getRozgaarNyayCode')}</button>

 </>
:
<>

{
                                                        time ===0  ? <> 
                                                                                           

                                                     <button className="btn btn-custom btn-sm " type='button' style={{cursor: "pointer"}} onClick={()=>{
                                                    handleResendOtp()
                                                    }}> {t('ResendRozgaarNyayCode')} </button>        

                                                        </> : <>
                                                        <span className="text-custom " style={{cursor: "pointer",fontSize:"12px"}} onClick={()=>{
                                                   toast.error(` ${t('waitRozgarCode')}`)
                                                  }}>{t('RozgaarNyayCodeAgain')} {`${time?.toString().length===2 ? "00 : "+time : "00 : 0"+time}`} </span>   
                                                        </>
                                                    }

{/*  <button className='btn btn-custom btn-sm' type='button' onClick={()=>{handleVerifyOtp()}}> {t('verifyRozgaarNyayCode')}</button>
 
  */}
</>
      }


</div>
</div>
<small id="helpId" className="form-text text-muted" >{t('OTPMessage')} </small>






    </div>
   
     

     
      </div>
      </div>

      <div className='row  mt-3 d-flex justify-content-end'>
   <div className='col-7 col-sm-4  col-md-4 col-lg-3  text-center'>
       <small className='text-custom fs-6 fw-bolder '>{t('patra-para5')}</small>
       
       <input disabled={true} type="text" className="form-control fs-5 text-center ps-0 border-custom1 rounded-0 shadow-none  mb-3  signature mb-3" value={user?.NAME} required id="inputName" aria-describedby="helpId" placeholder="" />

       

     
      </div>
      </div>
      <div className='row   d-flex justify-content-center align-items-center'>
      <div className='col-12 text-center mt-4'>
        <button className='btn btn-custom'  type='submit' onClick={()=>setSubmitBtnPress(true)}>{t('Submit')} </button>
 

       </div>
       </div>
      </div>
      </div>
                 </div>

                 <div className='col-sm-12 mt-4 ' style={{ pageBreakAfter: 'always' }}>
                 <div className=' h-100 w-100 d-flex justify-content-center align-items-center'>
    <div className="container envelope">
        <div className='row  mt-4 mb-4'>
   <div className='col-md-6 border-custom'>
    <div className='row  d-flex justify-content-between text-custom' style={{fontSize:"13px"}}>
      <div className='col-8 text-start' > 

   {
    i18n.language === "en" ?  
     <><em>January</em>, 14<sup>th</sup> 2024</>
    :
     <>  14 <em>जनवरी</em> 2024 </>
    }

<h6 className='fw-bolder mt-2'>{t('DearYoungFriend')}</h6>
<p className='mt-2 fs-6' >{t('patra-para6')}</p>
      </div>
      <div className='col-4   text-end'>
       {/* पौष विक्रम संवत */}
       <div className="stamp mb-0 ">
<img src={logoIYC} className='' alt='BharatJODOYatra' height={60} width={60} />
</div>
      </div>
    </div>
    <div className='row mt-2 text-custom'>
   
  
    <p  className='text-align-justify'>{t('patra-para7')}</p>
    <p className='text-align-justify'>{t('patra-para8')} <br />{t('patra-para9')}</p>
    </div>
   </div>

<div className='col-md-6 text-end '>
    <div className='row d-flex '>
    <div className='col-sm-2 mb-2 d-block d-sm-none'> 
       <div className="stamp ">
<img src={BharatJODOYatra1} className='' alt='BharatJODOYatra' height={60} width={60} />
</div>
       </div>
       <div className='col-md-7 col-lg-9 mt-3 mt-sm-0 '>
       <p className='text-align-justify text-custom'>
{t('patra-para10')}
</p>
       </div>
       <div className='col-md-5 col-lg-3 d-none d-sm-block'> 
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
                 </div>

            </form>
            
          


        </div>
   

   


    </>
    )
}

export default Patra

