import React from "react";
import styled from "styled-components";

import logoImg from "../images/logo 1.png";

const Menu = () => {
    return (
      <nav style={menuStyles}>
          <div style={menuContainerStyles}>
            <a href="/">
              <img height="53.33px" width="176px" src={logoImg} alt="logo"></img>
            </a>
            <MenuUl>
              <MenuLi>
                <a href="#start">Start</a>
              </MenuLi>
              <MenuLi>
                <a href="#estate">O osiedlu</a>
              </MenuLi>
              <MenuLi>
                <a href='#location'>Lokalizacja</a>
              </MenuLi>
              <MenuLi>
                <a href="#aboutus">O nas</a>
              </MenuLi>
            </MenuUl>
            <MenuButton>Kontakt</MenuButton>
          </div>
      </nav>
    );
};

export default Menu;

const menuStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '128px',
  width: '100%',
}

const menuContainerStyles = {
  display: 'flex',
  alignItems: 'center',
  height: '53.33px',
  width: '100%',
  maxWidth: '1274px',
  margin: '0 auto',
  padding: '0px 15px',
}

const MenuUl = styled.ul`
  display: flex;
  flex-grow: 1;
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
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    text-decoration: none;
  }
`

const MenuButton = styled.button`
  font-family: 'Work Sans';
  height: 46.65px;
  width: 128px;
  border-radius: 5px;
  background: #739143;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight:500;
  font-size:20px;
  line-height:23px;
  color: #ffff;
`