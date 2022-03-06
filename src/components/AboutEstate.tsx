import React from "react";
import styled from "styled-components";

import AboutEstateImg from "../images/wiz_1_4K 1.png";

const AboutEstate= () => {
    return (
        <About id="estate">
            <AboutEstateContainer>
                <img src={AboutEstateImg}></img>
                <div>
                    <h2>O osiedlu</h2>
                    <p>
                       Budynki wykonano w zgodzie z najnowocześniejszymi technologiami i z wykorzystaniem ekologach materiałów. Wyróżniają się trwałością, bardzo dobrą izolacją termiczną oraz akustyczną. Położone zostały tradycyjne fundamenty, wykonano stropy żelbetowe nad parterem oraz nad piętrem, dach skośny pokryty został betonowa dachówką a ściany zewnętrze i konstrukcje powstały z cegieł w innowacyjnej technologii Porotherm Dryfix. W domach na parterze i na piętrze znajduje się ogrzewanie podłogowe zasilane pompą ciepła.
                    </p>
                </div>
            </AboutEstateContainer>
        </About>
    );
};
  
export default AboutEstate;

const About = styled.section`
  padding: 0px 15px;
`

const AboutEstateContainer = styled.div`
  /* display: flex; */
  /* flex-wrap:wrap; */
  /* justify-content: center; */
  position:relative;
  width:100%;
  max-width: 1274px;
  margin: 50px auto;
  &>div {
    position:absolute;
    top:50%;
    right: 0%;
    transform:translate(0%, -50%);
    background: #739143;
    border-radius:15px;
    padding: 60px;
    text-align: left;
    max-width:600px;
    &>h2 {
        font-family: 'Work Sans';
        font-weight: 700;
        font-size: 43px;
        line-height:50px;
        color: #ffff;
        margin-bottom: 20px;
    }
    &>p {
        font-family: 'Work Sans';
        font-weight: 400;
        font-size: 18px;
        line-height:21px;
        color: #ffff;
    }
  }
  &>img {
      border-radius:15px;
  }
`