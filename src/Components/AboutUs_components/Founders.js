import React from 'react';
import "../../Styles/AboutUs.css";

import {CCard,CCol,CCardImage,CCardBody,CCardTitle,CCardText,CRow} from "@coreui/react";
function Founders({name, number, fimage})
{
    return (
      <div className='m-4 lg:m-10 lg:w-80 sm:w-56 lg:h-96 md:h-80 sm:h-72 w-56 min-[320px]:h-80 min-[320px]:rounded-xl ' >
       <CCard className="mb-3 " style={{backgroundColor:"#EEEEEE3B", height:"100%", width:"100%", borderRadius:"15px" }} >
    <CRow className="g-0">
      <CCol md={8} style={{margin:"0 auto" }} className='card_image'>
      <div className=' lg:h-40 md:h-36 md:w-36 lg:w-full  '>

      <CCardImage src={fimage}  style={{}} className='min-[320px]:max-md:h-40 min-[320px]:max-md:w-20 px-4 pb-4'/>
      </div>
        {/* <AccountCircleIcon sx={{height:"200px", width:"200px", color:"white", margin:"8px 0 0 0" }} /> */}
      </CCol>
      <CCol md={8}style={{width:"100%"}}>
        <CCardBody >
        <div className='textcenter'>
          <CCardTitle className="text-yellow-400 sm:text-sm md:text-xl lg:text-3xl min-[320px]:mt-28 md:mt-2">{name}</CCardTitle>
          <CCardText className="sm:text-xs md:text-sm lg:text-base text-white  ">{number}</CCardText>
        </div>

         
        </CCardBody>
      </CCol>
    </CRow>
  </CCard></div> );
}

export default Founders;

