import styled from 'styled-components';
import { Link as LinkR } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";

export const NotFoundContainer = styled.div`
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`

export const BackBtn = styled(LinkR)`
  position: fixed;
  width: 48px;
  height: 48px;
  padding: 4px;
  margin: 20px;
  top: 0;
  left: 0;
  background: #1f1f1f;
  border-radius: 10px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  z-index: 999;
`;
export const BackIcon = styled(BiChevronLeft)`
  font-size: 40px;
  color: #e9e7e8;
  background: transparent;
`;

export const NotFoundImg = styled.img`
    width: 60%;
`
export const NotFoundTitle = styled.h1`
    margin-top: 30px;
    font-size: 64px;
    font-weight: 700;
    text-align: center;
    color: #e9e7e8;
    @media screen and (max-width: 767.98px){
        font-size: 48px;
    }
    @media screen and (max-width: 497.98px){
        font-size: 32px;
    }
`