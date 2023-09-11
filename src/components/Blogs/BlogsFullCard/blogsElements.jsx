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

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #e9e7e8;
  width: 100%;
  @media screen and (max-width: 767.98px) {
    padding: 100px 0;
  }
`;

export const BlogsInfo = styled.div`
  display: flex;
`;

export const BlogWrapper = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const BlogRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Row1 = styled.div`
  margin-bottom: 10px;
  width: 100%;
  padding: 0 15px;
`;
export const Row2 = styled.div`
  margin-bottom: 15px;
  width: 100%;
  padding: 0 15px;
`;
export const TextWrapper = styled.div`
  max-width: 940px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const Title = styled.h3`
  margin-bottom: 24px;
  font-size: 56px;
  line-height: 1.1;
  font-weight: 700;

  @media screen and (max-width: 767.98px) {
    font-size: 48px;
  }
`;

export const Description = styled.p`
  margin-bottom: 35px;
  font-size: 18px;
`;

export const ImgWrapper = styled.div`
  margin-top: 30px;
  max-width: 1000px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  margin: 0 0 10px 0;
  border-radius: 15px;
  padding-right: 0;
`;
