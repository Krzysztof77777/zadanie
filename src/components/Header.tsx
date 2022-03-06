import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Menu from "./Menu";

interface HeaderProps {
  sliderImages: any,
}

const Header = ({sliderImages}: HeaderProps) => {
    return (
      <header id="start">
        <Menu></Menu>
        <Container>
        <HeaderContainer>
          <HeaderTitle>
            <span>Zamieszkaj</span>
            <span>Na osiedlu Bliskie</span>
          </HeaderTitle>
          <HeaderDescriptionDiv>
            <p>
              Wybierz wygodny dom łączący ekologiczne rozwiązania i energooszczędne technologie!
            </p>
            <button>Sprawdź</button>
          </HeaderDescriptionDiv>
          <HeaderSlider>
            <div>
            <Swiper
              slidesPerView={1}
              loop={true}
              navigation={false}
              pagination={{
                clickable: true
              }}
              autoplay={{
                delay: 7000,
                disableOnInteraction: false,
              }}
              modules= {[Navigation, Pagination, Autoplay]}
              className= {"mySwiper"}
            >
              {sliderImages.nodes[0].gallery.map(element=> {
                return <SwiperSlide key={element.url}><img src={element.url}></img></SwiperSlide>
              })}
            </Swiper>
            </div>
          </HeaderSlider>
        </HeaderContainer>
        </Container>
      </header>
    );
};
  
export default Header;

const HeaderContainer = styled.div`
  position:relative;
  max-width: 1274px;
  height: calc(100vh - 128px);
  margin: 0 auto;
  padding: 10px 15px;
  & .swiper-pagination {
    left:60%;
    bottom:6.5%;
    width: auto !important;
  }
  & .swiper_slide {
    &> img {
      width:100%;
      height:90%;
    }
  }
`

const HeaderTitle = styled.h1`
  display:inline-flex;
  flex-direction:column;
  justify-content:center;
  height:60%;
  font-family: 'Work Sans';
  &>span:nth-of-type(1) {
    color: #000000;
    font-size:54px;
    font-weight:700;
    line-height:63px;
    margin-left: 10px;
  }
  &>span:nth-of-type(2) {
    position:relative;
    font-weight:400;
    font-size:54px;
    line-height:63px;
    color:#000000;
    margin-left:30px;
    &:after {
      content: "";
      position:absolute;
      left:0;
      bottom:12%;
      height: 13px;
      width:100%;
      background: #9AC259;
      border-radius: 5px;
      z-index: -1;
    }
  }
`

const HeaderDescriptionDiv = styled.div`
  position:absolute;
  left:0;
  top: 50%;
  right: 18%;
  bottom:10%;
  background: #9AC259;
  border-radius: 20px;
  padding: 25px 60px;
  &>p {
    max-width:500px;
    font-family: 'Work Sans';
    font-weight: 700;
    font-size: 32px;
    line-height: 37px;
    color: #ffffff;
  }
  &>button {
    background: #739143;
    text-transform: uppercase;
    border: none;
    outline:none;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-weight:600;
    font-family: 'Work Sans';
    font-size: 20px;
    line-height:23px;
    color: #ffffff;
    margin-top: 15px;
    padding: 10px 15px;
    cursor:pointer;
  }
`

const HeaderImg = styled.img`
  position: absolute;
  top:0;
  right:0;
  border-radius: 15px;
  object-fit:cover;
`

const HeaderSlider = styled.div`
  position: absolute;
  right:0;
  top:0;
  width: 550px;
  height:550px;
  border-radius: 15px;
  &>div:nth-of-type(1) {
    width:100%;
    height:100%;
    & .swiper {
    width:100%;
    height:100%;
    & .swiper-pagination {
      left:65%;
      bottom: 3.5%;
      &> span {
        width: 12px;
        height:12px;
        border-radius:2px;
      }
      & .swiper-pagination-bullet-active {
        background: #739143 !important;
      }
    }
    & img {
      width: 100%;
      height:90%;
      object-fit:cover;
      border-radius: 15px;
    }
  }
`

const Container = styled.div`
  padding: 0px 15px;
  width: 100%;
  margin: 0 auto;
  max-width: 1274px;
`