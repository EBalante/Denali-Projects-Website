import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import "./CareersPage.css"


const CareersPage = () => {
  
  const [hover,setHover] = useState(false);
  const button = {
    color: "#374f59",
    marginLeft: '5%',
    marginTop:"40px",
    marginBottom:"100px",
    backgroundColor:"white",
    border: "0px",
    width:"400px",
    height:"90px",
    fontSize: "25pt",
    cursor: "pointer",
    ...(hover?{
      boxShadow: "1px 1px 20px #000000",
    }:null),
  };
  return (
    <div style = {background}>
      <div className = "text">
        <p style={{ fontSize: '60pt', marginTop :"100px" }}>
          <b>Your Future With Denali</b>
        </p>
        <p style={{ fontSize: '1.5em' }}>
          Let's build the future of energy together.
        </p>
        <p style={{ fontSize: '1.5em' }}>
          Are you ready to power up your career with a dynamic and innovative
          company in the energy sector? At Denali, you will work on exciting
          projects that drive sustainable solutions, collaborate with industry
          experts, and grow your career in a supportive and forward-thinking
          environment. If you're passionate about making a real impact and eager
          to be a part of a company that values creativity, integrity, and
          excellence, Denali is the perfect place for you.
        </p>
      </div>
      <Link to = "/CareerOpportunities" >
        <button onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)} style = {button}>Career Opportunities</button>
      </Link>
    </div>
  );
};

export default CareersPage;

const background={
  color: "pink",
  backgroundColor: "#374f59",
  margin: '0px',
  padding: '0px',
}
