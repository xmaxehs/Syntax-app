import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";

export const BlogsPage = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BlogsTitle = styled.h1`
  font-size: 64px;
  font-weight: 700;
  color: #5e59f7;
  margin-top: 30px;
  width: 100%;
  text-align: center;
  @media screen and (max-width: 479.98px) {
    font-size: 32px;
  }
  @media screen and (max-width: 767.98px) {
    margin-left: 30px;
  }
`;

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

export const BlogsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #1f1f1f;
`;

export const BlogsInfo = styled.div`
  display: flex;
  background: #1f1f1f;
`;