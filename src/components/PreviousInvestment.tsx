import React from "react";
import styled from "styled-components";

interface PreviousInvestmentProps {
  previousInvestmentImages: any,
}

const PreviousInvestmentComponent = ({previousInvestmentImages}: PreviousInvestmentProps) => {
    return (
      <section id="investments">
          <InvestmentContainer>
              {previousInvestmentImages.nodes.map(element => {
                  return (
                      <div key={element.id}>
                            <img key={element.id} src={element.featuredImage.url}></img>
                            <p>{element.name}</p>
                            <div></div>
                      </div>
                  )
              })}
          </InvestmentContainer>
      </section>
    );
};
  
export default PreviousInvestmentComponent;

const InvestmentContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  position:relative;
  width:100%;
  max-width: 1274px;
  margin: 150px auto 50px auto;
  padding: 0px 15px;
  &> div {
      position:relative;
      margin: 0px 37px 50px 0px;
      height: 424px;
      &> img {
          border-radius: 15px;
          width: 380px;
          height:100%;
          object-fit:cover;
      }
      &> p {
          position:absolute;
          left:50%;
          top:50%;
          transform:translate(-50%,-50%);
          z-index:1;
          font-family: 'Work Sans';
          font-weight:700;
          font-size: 38px;
          line-height: 40px;
          color: #ffffff;
          text-align:center;
      }
      &> div {
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background: rgba(115, 145, 67, 0.75);
        border-radius: 15px;
      }
  }
  &>div:last-of-type {
    margin: 0px 0px 50px 0px;
  }
`