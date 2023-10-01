/*import React from 'react';
import "../../Styles/AboutUs.css";

import {CCard,CCol,CCardImage,CCardBody,CCardTitle,CCardText,CRow} from "@coreui/react";
function AboutUs_card(props)
{
    return ( <CCard className="mb-3 about_us_card" style={{ maxWidth: '80%',backgroundColor:'grey',borderRadius:50,margin:50}}>
    <CRow className="g-0">
      <CCol md={4}>
        <CCardImage src={props.image} className="card_image" style={{width:250,height:250}} />
      </CCol>
      <CCol md={8}>
        <CCardBody>
          <CCardTitle className="about_us_title">{props.title}</CCardTitle>
          <CCardText className="about_us_text">
         {props.text}

          </CCardText>
         
        </CCardBody>
      </CCol>
    </CRow>
  </CCard> );
}

export default AboutUs_card;*/

import React from 'react';
import "../../Styles/AboutUs.css";

import {CCard,CCol,CCardImage,CCardBody,CCardTitle,CCardText,CRow} from "@coreui/react";
function AboutUs_card(props)
{
    return ( <div className='w-full mx-auto my-2' ><CCard className="mb-3 about_us_card" style={{ maxWidth: '80%',backgroundColor:"#EEEEEE3B",borderRadius:50, margin:"4px auto"}} >
    <CRow className="g-0">
      <CCol md={4}>
        <CCardImage src={props.image} className="card_image" style={{width:250,height:250}} />
      </CCol>
      <CCol md={8}>
        <CCardBody>
          <CCardTitle className="about_us_title">{props.title}</CCardTitle>
          <CCardText className="about_us_text">
         {props.text}

          </CCardText>
         
        </CCardBody>
      </CCol>
    </CRow>
  </CCard></div> );
}

export default AboutUs_card;

