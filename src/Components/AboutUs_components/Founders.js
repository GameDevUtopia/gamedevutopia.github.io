import React from 'react';
import "../../Styles/AboutUs.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import {CCard,CCol,CCardImage,CCardBody,CCardTitle,CCardText,CRow} from "@coreui/react";
function Founders({name, number})
{
    return ( <CCard className="mb-3 founders_section" style={{ maxWidth: '20%',backgroundColor:"#EEEEEE3B",borderRadius:50, height:"400px"}} >
    <CRow className="g-0">
      <CCol md={1} style={{margin:"0 auto", display:"flex",}} >
      
        <AccountCircleIcon sx={{height:"200px", width:"200px", color:"white", margin:"8px 0 0 0" }} />
      </CCol>
      <CCol md={8}>
        <CCardBody>
          <CCardTitle className="about_us_fname">{name}</CCardTitle>
          <CCardText className="about_us_fnum">
         {number}

          </CCardText>
         
        </CCardBody>
      </CCol>
    </CRow>
  </CCard> );
}

export default Founders;

