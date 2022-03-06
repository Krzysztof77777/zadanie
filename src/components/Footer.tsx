import React from "react";
import styled from "styled-components";

import FooterLogoImg from "../images/Group 696.svg";

const FooterComponent = () => {
    return (
        <Footer>
            <FooterContainer>
              <a href="/">
                <img height="64.71px" width="213.57px" src={FooterLogoImg} alt="logo"></img>
              </a>
              <MenuUl>
                <MenuLi>
                  <a href="#start">Start</a>
                </MenuLi>
                <MenuLi>
                  <a href="#estate">O osiedlu</a>
                </MenuLi>
                <MenuLi>
                  <a href="#location">Lokalizacja</a>
                </MenuLi>
                <MenuLi>
                  <a href="#aboutus">O nas</a>
                </MenuLi>
              </MenuUl>
            </FooterContainer>
        </Footer>
    );
};
  
export default FooterComponent;

const Footer = styled.footer`
  display:flex;
  align-items:center;
  height: 128px;
  width: 100%;
  background: #2A4819;
`

const FooterContainer = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1274px;
  margin: 0 auto;
  padding: 0px 15px;
`

const MenuUl = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  & li:last-of-type {
    margin: 0;
  }
`

const MenuLi = styled.li`
  margin-right: 55px;
  cursor: pointer;
  &> a {
    font-family: 'Work Sans';
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    text-decoration: none;
  }
`