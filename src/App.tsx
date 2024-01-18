import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Letter1 from "./Module/UI/Page/Letter1";
import { Letter2 } from "./Module/UI/Page/Letter2";
import Letter3 from "./Module/UI/Page/Letter3";
import Letter4 from "./Module/UI/Page/Letter4";
import Home from "./Module/Layout/Page/Home";
import Support from "./Module/Layout/Page/ContactUs";
import WhoAreWe from "./Module/Layout/Page/WhoAreWe";
import FAQs from "./Module/Layout/Page/FAQs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./Module/Layout/Page/ContactUs";
import Patra from "./Module/User/Page/Patra";
import Livestream from "./Module/Layout/Page/Livestream";
import Gallery from "./Module/Layout/Page/Gallery";
import { I18nextProvider, useTranslation } from "react-i18next";
import { Toaster } from "react-hot-toast";
import ProfileCard from "./Module/User/Page/ProfileCard";

function App() {

  
  const [showFixedTab, setShowFixedTab] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY || window.scrollTo || document.getElementsByTagName("html")[0].scrollTop;
      setShowFixedTab(scrollPos > 500);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

 let {t,i18n} = useTranslation();



 const onClickLanguageChange=(event:React.ChangeEvent<HTMLSelectElement>)=>{
const language=event.target.value;
i18n.changeLanguage((language)) // Here Change language
}

  return (
    <>

       <BrowserRouter>
       <Toaster/>
      <div className="container-fluid bg-custom">
        <div className="row  d-flex  justify-content-end p-2 ">
           <div className=" col  d-flex  justify-content-end">
        <select className=" form-control-sm" name="" id="" onChange={(event)=>{onClickLanguageChange(event)}}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
           </div>
        </div>
      </div>
   
       <I18nextProvider i18n={i18n}>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/FAQs" element={<FAQs/>}/>
          <Route path="/Contact-Us" element={<ContactUs/>}/>
          <Route path="/Who-Are-We" element={<WhoAreWe/>}/>
          <Route path="/Patra" element={<Patra/>}/>
          <Route path="/livestream" element={<Livestream/>}/>
          <Route path="/Gallery" element={<Gallery/>}/>
          <Route path="/ProfileCard" element={<ProfileCard/>}/>
         </Routes>
       </I18nextProvider>
         
         {showFixedTab && (
        <div className="fixed-tab" onClick={scrollToTop}>
          <button className="btn btn-custom"><i className="bi bi-chevron-up"></i></button>
        </div>
      )}
        </BrowserRouter>

      
      {/* <Letter1/>
     <br />
     <br />
     <br />
     <Letter2/>
     <br />
     <br />
     <br />
     <Letter3/>
     <br />
     <br />
     <br />
     <Letter4/> */}

    </>
  );
}

export default App;
