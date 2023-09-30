import React from 'react';
import "../../Styles/AboutUs.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import {CCard,CCol,CCardImage,CCardBody,CCardTitle,CCardText,CRow} from "@coreui/react";
function Founders({name, number, fimage})
{
    return ( <CCard className="mb-3 founders_section" style={{ maxWidth: '20%',backgroundColor:"#EEEEEE3B",borderRadius:30, height:"400px"}} >
    <CRow className="g-0">
      <CCol md={8} style={{margin:"0 auto",}} className='card_image rounded'>
      <div>

      <CCardImage src={fimage} />
      </div>
        {/* <AccountCircleIcon sx={{height:"200px", width:"200px", color:"white", margin:"8px 0 0 0" }} /> */}
      </CCol>
      <CCol md={8}style={{width:"100%"}}>
        <CCardBody >
        <div className='textcenter'>
          <CCardTitle className="about_us_fname">{name}</CCardTitle>
          <CCardText className="about_us_fnum">{number}</CCardText>
        </div>

         
        </CCardBody>
      </CCol>
    </CRow>
  </CCard> );
}

export default Founders;

