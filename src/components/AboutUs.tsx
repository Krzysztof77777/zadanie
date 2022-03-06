import React from "react";
import styled from "styled-components";

import AboutImg from "../images/wiz_1_4K 2.png";

const AboutUs = () => {
    return (
        <About id="aboutus">
            <AboutContainer>
                <img src={AboutImg}></img>
                <div>
                    <h2>O nas</h2>
                    <p>Budujemy nowoczesne osiedla mieszkaniowe w otoczeniu zieleni o najwyższych standardach jakości i komfortu.</p>
                    <p>Głównym zadaniem, do którego została powołana spółka KDM Nieruchomości, jest świadczenie szerokiego zakresu usług zdeweloperskich.</p>
                    <p>Nasze inwestycje to wyjątkowe, pojedyncze realizacje o niepowtarzalnym charakterze, realizowane dla indywidualnych klientów – małych i średnich przedsiębiorstw.</p>
                </div>
            </AboutContainer>
        </About>
    );
};
  
export default AboutUs;

const About = styled.section`
  padding: 0px 15px;
`

const AboutContainer = styled.div`
  /* display: flex; */
  /* flex-wrap:wrap; */
  /* justify-content: center; */
  position:relative;
  width:100%;
  max-width: 1274px;
  margin: 50px auto;
  text-align:center;
  &>div {
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,0%);
    max-width: 874px;
    background: #739143;
    border-radius:15px;
    padding: 40px 60px;
    width:90%;
    &> h2 {
        font-family: 'Work Sans';
        font-weight: 700;
        font-size: 43px;
        line-height: 50px;
        text-align:center;
        color: #FFFFFF;
        margin-bottom: 20px;
    }
    & p {
        font-family: 'Work Sans';
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        text-align:center;
        color: #FFFFFF;
    }
    &>p:nth-of-type(2) {
        margin: 20px 0px;
    }
  }
  &>img {
      border-radius:15px;
      width:100%;
      object-fit:cover;
      height:556px;
  }
`