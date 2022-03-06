import React from "react";
import styled from "styled-components";

import locationImg from "../images/Warstwa 4.svg";
import spaceImg from "../images/Warstwa 2.svg";
import economyImg from "../images/Warstwa 3.svg";

const Benefits = () => {
    return (
      <BenefitsStyles>
          <div>
              <img src={locationImg}></img>
              <p>Znakomita<br></br>lokalizacja</p>
          </div>
          <div>
              <img src={spaceImg}></img>
              <p>Wygodna<br></br>przestrzeń</p>
          </div>
          <div>
              <img src={economyImg}></img>
              <p>Wygoda<br></br>i oszczędność</p>
          </div>
      </BenefitsStyles>
    );
};
  
export default Benefits;

const BenefitsStyles = styled.section`
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  padding: 20px 0px;
  background: #F8F8F8;
  &> div {
      display:flex;
      flex-direction: column;
      align-items:center;
      justify-items:center;
      margin-right: 155px;
      &>p {
          font-family: 'Work Sans';
          font-weight: 700;
          font-size: 24px;
          line-height: 28px;
          color:#2A4819;
          text-align:center;
          margin-top:15px;
      }
      &> img {
          width: 122px;
          height: 96px;
      }
  }
  &>div:last-of-type {
      margin: 0;
  }
`